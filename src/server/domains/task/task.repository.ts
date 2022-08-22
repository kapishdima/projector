import 'reflect-metadata';
import { injectable } from 'inversify';

import { Status, Task } from '@prisma/client';
import prisma from '@database/';

import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';

const TASK_REPOSITORY = Symbol.for('TaskRepository');

interface ITaskRepository {
  getTasks: (projectId: string) => Promise<Task[]>;
  getTask: (id: string) => Promise<Task | null>;
  getBacklogTasks: (projectId: string) => Promise<Task[]>;
  getTasksInProgress: (projectId: string) => Promise<Task[]>;
  getCompletedTasks: (projectId: string) => Promise<Task[]>;
  changeTaskStatus: (id: string, status: Status) => Promise<Task>;
  createTask: (projectId: string, payload: CreateTaskDTO) => Promise<Task[]>;
  updateTask: (id: string, payload: UpdateTaskDTO) => Promise<Task>;
  deleteTask: (projectId: string, id: string) => Promise<void>;
}

@injectable()
class TaskRepository implements ITaskRepository {
  async getTasks(projectId: string) {
    return await prisma.task.findMany({ where: { projectId } });
  }
  async getTask(id: string) {
    return await prisma.task.findFirst({ where: { id } });
  }
  async getBacklogTasks(projectId: string) {
    return await prisma.task.findMany({ where: { projectId, status: Status.BACKLOG } });
  }
  async getTasksInProgress(projectId: string) {
    return await prisma.task.findMany({ where: { projectId, status: Status.IN_PROGRESS } });
  }
  async getCompletedTasks(projectId: string) {
    return await prisma.task.findMany({ where: { projectId, status: Status.COMPLETED } });
  }
  async changeTaskStatus(id: string, status: Status) {
    return await prisma.task.update({ where: { id }, data: { status } });
  }
  async createTask(projectId: string, payload: CreateTaskDTO) {
    const project = await prisma.project.update({
      where: { id: projectId },
      data: {
        tasks: {
          create: payload,
        },
      },
      include: {
        tasks: true,
      },
    });

    return project.tasks;
  }
  async updateTask(id: string, payload: UpdateTaskDTO) {
    return await prisma.task.update({ where: { id }, data: payload });
  }
  async deleteTask(projectId: string, id: string): Promise<void> {
    try {
      await prisma.project.update({
        where: { id: projectId },
        data: {
          tasks: {
            delete: { id },
          },
        },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

export { TASK_REPOSITORY, ITaskRepository, TaskRepository };
