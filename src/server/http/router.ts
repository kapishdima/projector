import { Application } from 'express';
import projects from '../domains/project/project.router';

export const createRouter = (app: Application) => {
  app.use('/projects', projects);
};
