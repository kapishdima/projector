import 'reflect-metadata';
import { injectable } from 'inversify';

import { Project } from '@prisma/client';
import prisma from '@database/';

import { CreateProjectDTO } from './dto/create-project.dto';
import { UpdateProjectDTO } from './dto/update-project.dto';
import { ProjectNotFound } from './exceptions/project-not-found';

const PROJECT_REPOSITORY = Symbol.for('ProjectRepository');

interface IProjectRepository {
  getProjects: () => Promise<Project[]>;
  getProject: (id: string) => Promise<Project | null>;
  getCompletedProject: () => Promise<Project | null>;
  getProjectInProgress: () => Promise<Project | null>;
  createProject: (payload: CreateProjectDTO) => Promise<Project>;
  updateProject: (id: string, payload: UpdateProjectDTO) => Promise<Project | undefined>;
  deleteProject: (id: string) => Promise<void>;
}

@injectable()
class ProjectRepository implements IProjectRepository {
  async getProjects() {
    const projects = await prisma.project.findMany();

    return projects;
  }
  async getProject(id: string) {
    const project = await prisma.project.findFirst({ where: { id } });

    return project;
  }

  async getCompletedProject() {
    const project = await prisma.project.findFirst({ where: { completed: true } });

    return project;
  }

  async getProjectInProgress() {
    const project = await prisma.project.findFirst({ where: { completed: false } });

    return project;
  }

  async createProject(payload: CreateProjectDTO) {
    return await prisma.project.create({ data: payload });
  }

  async updateProject(id: string, payload: CreateProjectDTO) {
    try {
      return await prisma.project.update({ where: { id }, data: payload });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new ProjectNotFound();
      }
    }
  }

  async deleteProject(id: string) {
    try {
      await prisma.project.delete({ where: { id } });
    } catch (error: any) {
      if (error.code === 'P2025') {
        throw new ProjectNotFound();
      }
    }
  }
}

export { PROJECT_REPOSITORY, IProjectRepository, ProjectRepository };
