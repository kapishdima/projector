export const ProjectNotFoundMessage = 'Project not found';
export class ProjectNotFound extends Error {
  constructor() {
    super(ProjectNotFoundMessage);

    Object.setPrototypeOf(this, ProjectNotFound.prototype);
  }
}
