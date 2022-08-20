import { Router } from 'express';

import { IProjectController, PROJECT_CONTROLLER } from './project.controller';
import { projectModule } from './project.module';

const router = Router();

const controller = projectModule.get<IProjectController>(PROJECT_CONTROLLER);

router.get('/', controller.getProjects);
router.get('/:id', controller.getProject);
router.post('/', controller.createProject);
router.put('/:id', controller.updateProject);
router.delete('/:id', controller.deleteProject);

export default router;
