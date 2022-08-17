import express from 'express';
import { PrismaClient } from '@prisma/client';

import { Request, Response } from 'express';

const prisma = new PrismaClient();
const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Application workssadas!');
});

app.listen(3000, () => {
  console.log('Application started on port 3000!');
});
