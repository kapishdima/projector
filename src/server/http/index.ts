import express from 'express';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';

import { createRouter } from './router';

dotenv.config();

export type Server = {
  port?: number;
};

export const createServer = (options?: Server) => {
  const app = express();

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  createRouter(app);

  app.listen(options?.port || process.env.SERVER_PORT, () => {
    console.log('Server starting...');
  });

  return app;
};
