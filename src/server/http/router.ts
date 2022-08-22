import { Application } from 'express';
import { projects, tasks } from '@domains/';

export const createRouter = (app: Application) => {
  app.use(projects.router);
  app.use(tasks.router);
};
