import { Router } from 'express';

import { ITaskController, TASK_CONTROLLER } from './task.controller';
import { taskModule } from './task.module';

const router = Router();

const controller = taskModule.get<ITaskController>(TASK_CONTROLLER);

router.get('/tasks/:projectId', controller.getTasks);
router.get('/task/:id', controller.getTask);
router.post('/tasks/:projectId', controller.createTask);
router.put('/tasks/:id', controller.updateTask);
router.delete('/tasks/:projectId/:id', controller.deleteTask);

export default router;
