import 'reflect-metadata';
import { injectable, inject } from 'inversify';

import { Task } from '@prisma/client';

import { ITaskRepository, TASK_REPOSITORY } from './task.repository';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskNotFound } from './exceptions/task-not-found';

const TASK_SERVICE = Symbol.for('TaskService');

interface ITaskService {
  getTasks: (projectId: string) => Promise<Task[]>;
  getTask: (id: string) => Promise<Task>;
  createTask: (projectId: string, payload: CreateTaskDTO) => Promise<Task[]>;
  updateTask: (id: string, payload: UpdateTaskDTO) => Promise<Task>;
  deleteTask: (payloadId: string, id: string) => Promise<void>;
}

@injectable()
class TaskService implements ITaskService {
  constructor(@inject(TASK_REPOSITORY) private repository: ITaskRepository) {}

  getTasks = async (projectId: string) => {
    return await this.repository.getTasks(projectId);
  };
  getTask = async (id: string) => {
    const task = await this.repository.getTask(id);

    if (!task) {
      throw new TaskNotFound();
    }

    return task;
  };
  createTask = async (projectId: string, payload: CreateTaskDTO) => {
    const tasks = await this.repository.createTask(projectId, payload);
    return tasks;
  };
  updateTask = async (id: string, payload: UpdateTaskDTO) => {
    return await this.repository.updateTask(id, payload);
  };
  deleteTask = async (payloadId: string, id: string) => {
    return await this.repository.deleteTask(payloadId, id);
  };
}

export { TASK_SERVICE, TaskService, ITaskService };
