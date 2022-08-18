import 'reflect-metadata';
import { injectable } from 'inversify';

import { Project } from '@prisma/client';

import prisma from '../../database';

const PROJECT_REPOSITORY = Symbol.for('ProjectRepository');

interface IProjectRepository {
  getProjects: () => Promise<Project[]>;
}

@injectable()
class ProjectRepository implements IProjectRepository {
  async getProjects() {
    const projects = await prisma.project.findMany();

    return projects;
  }
}

export { PROJECT_REPOSITORY, IProjectRepository, ProjectRepository };
