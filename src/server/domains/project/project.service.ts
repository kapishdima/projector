import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { Project } from '@prisma/client';

import { IProjectRepository, PROJECT_REPOSITORY } from './project.repository';
import { CreateProjectDTO } from './dto/create-project.dto';
import { UpdateProjectDTO } from './dto/update-project.dto';
import { HasInprogressProject } from './exceptions/has-inprogress-project';

const PROJECT_SERVICE = Symbol.for('ProjectService');

interface IProjectService {
  getProjects: () => Promise<Project[]>;
  getProject: (id: string) => Promise<Project | null>;
  createProject: (payload: CreateProjectDTO) => Promise<Project | null>;
  updateProject: (id: string, payload: UpdateProjectDTO) => Promise<Project | undefined>;
  deleteProject: (id: string) => Promise<void>;
}

@injectable()
class ProjectService implements IProjectService {
  constructor(@inject(PROJECT_REPOSITORY) private repository: IProjectRepository) {}

  async getProjects() {
    return await this.repository.getProjects();
  }

  async getProject(id: string) {
    return await this.repository.getProject(id);
  }

  async createProject(payload: CreateProjectDTO) {
    const projectInProgress: Project | null = await this.repository.getProjectInProgress();

    if (!projectInProgress) {
      return await this.repository.createProject(payload);
    }

    throw new HasInprogressProject();
  }

  async updateProject(id: string, payload: UpdateProjectDTO) {
    return await this.repository.updateProject(id, payload);
  }

  async deleteProject(id: string) {
    await this.repository.deleteProject(id);
  }
}

export { PROJECT_SERVICE, ProjectService, IProjectService };
