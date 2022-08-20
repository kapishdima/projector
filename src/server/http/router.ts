import { Application } from 'express';
import { projects } from '@domains/';

export const createRouter = (app: Application) => {
  app.use('/projects', projects.router);
};
