import { Router } from 'express';

import { IProjectController, PROJECT_CONTROLLER } from './project.controller';
import { projectModule } from './project.module';

const router = Router();

const controller = projectModule.get<IProjectController>(PROJECT_CONTROLLER);

router.get('/projects', controller.getProjects);
router.get('/project/:id', controller.getProject);
router.post('/projects', controller.createProject);
router.put('/projects/:id', controller.updateProject);
router.delete('/projects/:id', controller.deleteProject);

export default router;
