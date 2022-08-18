import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { Request, Response } from 'express';

import { IProjectService, PROJECT_SERVICE } from './project.service';

const PROJECT_CONTROLLER = Symbol.for('ProjectController');

interface IProjectController {
  getProjects: (req: Request, res: Response) => Promise<void>;
}

@injectable()
class ProjectController implements IProjectController {
  constructor(@inject(PROJECT_SERVICE) private service: IProjectService) {}

  getProjects = async (req: Request, res: Response) => {
    const projects = await this.service.getProjects();

    res.json(projects);
    return;
  };
}

export { PROJECT_CONTROLLER, ProjectController, IProjectController };
