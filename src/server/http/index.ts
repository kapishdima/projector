import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { createRouter } from './router';

dotenv.config();

export const createServer = () => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  createRouter(app);

  app.listen(process.env.PORT, () => {
    console.log('Server starting...');
  });

  return app;
};
