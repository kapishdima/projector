import 'reflect-metadata';
import { inject, injectable } from 'inversify';

import { Request, Response } from 'express';

import { ITaskService, TASK_SERVICE } from './task.service';
import { CreateTaskDTO } from './dto/create-task.dto';
import { UpdateTaskDTO } from './dto/update-task.dto';
import { TaskNotFound, TaskNotFoundMessage } from './exceptions/task-not-found';

const TASK_CONTROLLER = Symbol.for('TaskController');

interface ITaskController {
  getTasks: (req: Request, res: Response) => Promise<Response>;
  getTask: (req: Request, res: Response) => Promise<Response>;
  createTask: (req: Request, res: Response) => Promise<Response>;
  updateTask: (req: Request, res: Response) => Promise<Response>;
  deleteTask: (req: Request, res: Response) => Promise<Response>;
}

@injectable()
class TaskController implements ITaskController {
  constructor(@inject(TASK_SERVICE) private service: ITaskService) {}

  getTasks = async (req: Request, res: Response) => {
    const projectId: string = req.params.projectId;
    const tasks = await this.service.getTasks(projectId);

    return res.json(tasks);
  };

  getTask = async (req: Request, res: Response) => {
    try {
      const id = req.params.id;
      const task = await this.service.getTask(id);

      return res.json(task);
    } catch (error) {
      if (error instanceof TaskNotFound) {
        return res.status(404).json({ message: TaskNotFoundMessage });
      }

      return res.status(500);
    }
  };

  createTask = async (req: Request, res: Response) => {
    try {
      const projectId: string = req.params.projectId;
      const payload: CreateTaskDTO = req.body;

      const task = await this.service.createTask(projectId, payload);

      return res.status(201).json(task);
    } catch (error) {
      return res.status(500);
    }
  };

  updateTask = async (req: Request, res: Response) => {
    try {
      const id: string = req.params.id;
      const payload: UpdateTaskDTO = req.body;

      const task = await this.service.updateTask(id, payload);

      return res.status(201).json(task);
    } catch (error) {
      if (error instanceof TaskNotFound) {
        return res.status(404).json({ message: TaskNotFoundMessage });
      }

      return res.status(500);
    }
  };

  deleteTask = async (req: Request, res: Response) => {
    try {
      const projectId: string = req.params.projectId;
      const id: string = req.params.id;

      await this.service.deleteTask(projectId, id);

      return res.status(200).json({ message: 'Task successfully delete' });
    } catch (error) {
      if (error instanceof TaskNotFound) {
        return res.status(404).json({ message: TaskNotFoundMessage });
      }

      return res.status(500);
    }
  };
}

export { TASK_CONTROLLER, TaskController, ITaskController };
