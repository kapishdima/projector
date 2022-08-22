export const TaskNotFoundMessage = 'Task not found';
export class TaskNotFound extends Error {
  constructor() {
    super(TaskNotFoundMessage);

    Object.setPrototypeOf(this, TaskNotFound.prototype);
  }
}
