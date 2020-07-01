import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';
import { v4 as uuid } from 'uuid';

const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'GET') {
    console.log('GET REQUEST');
    const images = await prisma.image.findMany();
    res.send(images);
    return;
  }
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();

    form.uploadDir = './public/uploads';
    form.keepExtensions = true;
    form.multiples = true;

    form.parse(req, async (err, fields, files) => {
      const path = files.image.path;
      const processedPathPartial = `/uploads/processed/${uuid()}.png`;
      const processedPath = `public${processedPathPartial}`;
      const blurRadius = +fields.blurRadius;
      const sharpChain = sharp(files.image.path)
        .withMetadata()
        .rotate(+fields.rotation);

      if (fields.flipped === 'true') {
        sharpChain.flip();
      }
      if (blurRadius > 0.3 && blurRadius < 1000) {
        sharpChain.blur(blurRadius);
      }

      await sharpChain
        .resize(1024)
        .composite([
          { input: 'public/bbw_watermark.png', gravity: 'southeast' },
        ])
        .png()
        .toFile(processedPath);
      await prisma.image.create({
        data: {
          path,
          processedPath: processedPathPartial,
        },
      });
    });
    res.send({ result: 'yeet' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
