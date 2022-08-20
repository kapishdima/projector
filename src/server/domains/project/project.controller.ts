import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { Request, Response } from 'express';

import { IProjectService, PROJECT_SERVICE } from './project.service';
import { CreateProjectDTO } from './dto/create-project.dto';
import {
  HasInprogressProject,
  HasInprogressProjectMessage,
} from './exceptions/has-inprogress-project';
import { UpdateProjectDTO } from './dto/update-project.dto';
import { ProjectNotFound, ProjectNotFoundMessage } from './exceptions/project-not-found';

const PROJECT_CONTROLLER = Symbol.for('ProjectController');

interface IProjectController {
  getProjects: (req: Request, res: Response) => Promise<Response>;
  getProject: (req: Request, res: Response) => Promise<Response>;
  createProject: (req: Request, res: Response) => Promise<Response>;
  updateProject: (req: Request, res: Response) => Promise<Response>;
  deleteProject: (req: Request, res: Response) => Promise<Response>;
}

@injectable()
class ProjectController implements IProjectController {
  constructor(@inject(PROJECT_SERVICE) private service: IProjectService) {}

  getProjects = async (req: Request, res: Response) => {
    const projects = await this.service.getProjects();

    return res.json(projects);
  };

  getProject = async (req: Request, res: Response) => {
    const id = req.params.id;
    const project = await this.service.getProject(id);

    if (!project) {
      return res.status(404).json({ message: 'Project not found' });
    }

    return res.json(project);
  };

  createProject = async (req: Request, res: Response) => {
    try {
      const payload: CreateProjectDTO = req.body;
      const project = await this.service.createProject(payload);

      return res.status(201).json(project);
    } catch (error) {
      if (error instanceof HasInprogressProject) {
        return res.status(400).json({ message: HasInprogressProjectMessage });
      }

      return res.status(500);
    }
  };

  updateProject = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const payload: UpdateProjectDTO = req.body;

      const project = await this.service.updateProject(id, payload);

      return res.status(204).json(project);
    } catch (error) {
      if (error instanceof ProjectNotFound) {
        return res.status(404).json({ message: ProjectNotFoundMessage });
      }

      return res.status(500);
    }
  };

  deleteProject = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      await this.service.deleteProject(id);

      return res.status(200).json({ message: 'Project successfully delete' });
    } catch (error) {
      if (error instanceof ProjectNotFound) {
        return res.status(404).json({ message: ProjectNotFoundMessage });
      }

      return res.status(500);
    }
  };
}

export { PROJECT_CONTROLLER, ProjectController, IProjectController };
