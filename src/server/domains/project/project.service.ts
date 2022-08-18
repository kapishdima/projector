import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { Project } from '@prisma/client';

import { IProjectRepository, PROJECT_REPOSITORY } from './project.repository';

const PROJECT_SERVICE = Symbol.for('ProjectService');

interface IProjectService {
  getProjects: () => Promise<Project[]>;
}

@injectable()
class ProjectService implements IProjectService {
  constructor(@inject(PROJECT_REPOSITORY) private repository: IProjectRepository) {}

  async getProjects() {
    return await this.repository.getProjects();
  }
}

export { PROJECT_SERVICE, ProjectService, IProjectService };
