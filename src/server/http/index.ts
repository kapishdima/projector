import express from 'express';
import dotenv from 'dotenv';

import { createRouter } from './router';

dotenv.config();

export const createServer = () => {
  const app = express();

  createRouter(app);

  app.listen(process.env.PORT, () => {
    console.log('Server starting...');
  });

  return app;
};
