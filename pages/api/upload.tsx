import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { PrismaClient } from '@prisma/client';
import sharp from 'sharp';

const prisma = new PrismaClient();

export default (req: NextApiRequest, res: NextApiResponse) => {
  // if (req.method === 'GET') {
  //   console.log('GET REQUEST');
  //   sharp('camtasia.png').blur().toFile('yeet.png');
  //   res.send('OKAY');
  //   return;
  // }
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    console.log('INCOMING IMAGE');

    form.uploadDir = './public/uploads';
    form.keepExtensions = true;
    form.multiples = true;

    form.parse(req, (err, fields, files) => {
      const path = files.image.path;
      const filename = path.split('/')[2];
      const processedPath = `public/uploads/processed/${filename}`;
      const blurRadius = +fields.blurRadius;
      const sharpChain = sharp(files.image.path).rotate(+fields.rotation);
      if (fields.flipped === 'true') {
        sharpChain.flip();
      }
      if (blurRadius > 0.3 && blurRadius < 1000) {
        sharpChain.blur(blurRadius);
      }

      sharpChain.toFile(processedPath).then();
      prisma.image
        .create({
          data: {
            path,
            processedPath,
          },
        })
        .then();
    });
    res.send({ result: 'yeet' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
