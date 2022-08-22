import { Container } from 'inversify';

import { ITaskRepository, TASK_REPOSITORY, TaskRepository } from './task.repository';
import { ITaskService, TASK_SERVICE, TaskService } from './task.service';
import { ITaskController, TASK_CONTROLLER, TaskController } from './task.controller';

const taskModule = new Container({ autoBindInjectable: true });

taskModule.bind<ITaskRepository>(TASK_REPOSITORY).to(TaskRepository);
taskModule.bind<ITaskService>(TASK_SERVICE).to(TaskService);
taskModule.bind<ITaskController>(TASK_CONTROLLER).to(TaskController);

export { taskModule };
