import { Container } from 'inversify';

import { IProjectRepository, PROJECT_REPOSITORY, ProjectRepository } from './project.repository';
import { IProjectService, PROJECT_SERVICE, ProjectService } from './project.service';
import { IProjectController, PROJECT_CONTROLLER, ProjectController } from './project.controller';

const projectModule = new Container({ autoBindInjectable: true });

projectModule.bind<IProjectRepository>(PROJECT_REPOSITORY).to(ProjectRepository);
projectModule.bind<IProjectService>(PROJECT_SERVICE).to(ProjectService);
projectModule.bind<IProjectController>(PROJECT_CONTROLLER).to(ProjectController);

export { projectModule };
