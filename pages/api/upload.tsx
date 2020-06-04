import { NextApiRequest, NextApiResponse } from 'next';
import formidable from 'formidable';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const form = new formidable.IncomingForm();
    console.log('INCOMING IMAGE');

    form.uploadDir = './public/uploads';
    form.keepExtensions = true;
    form.multiples = true;

    form.parse(req, (err, fields, files) => {
      console.log(files.image.path);
      prisma.image
        .create({
          data: {
            path: files.image.path,
          },
        })
        .then();
      // prisma.image.create({
      //   data: {
      //     path: files.image.path,
      //   },
      // });
    });
    res.send({ result: 'yeet' });
  }
};

export const config = {
  api: {
    bodyParser: false,
  },
};
