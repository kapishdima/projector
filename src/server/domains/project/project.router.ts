import { Router } from 'express';

import { IProjectController, PROJECT_CONTROLLER } from './project.controller';
import { projectModule } from './project.module';
import { IProjectService, PROJECT_SERVICE } from './project.service';

const router = Router();

const controller = projectModule.get<IProjectController>(PROJECT_CONTROLLER);

console.log(projectModule.get<IProjectService>(PROJECT_SERVICE));

router.get('/', controller.getProjects);
router.get('/:id', (req, res) => {
  const id = req.params.id;
  res.send('get project' + id);
});
router.post('/', (req, res) => {
  res.send('create project');
});
router.put('/:id', (req, res) => {
  const id = req.params.id;
  res.send('put project' + id);
});
router.delete('/:id', (req, res) => {
  const id = req.params.id;
  res.send('delete project' + id);
});

export default router;
