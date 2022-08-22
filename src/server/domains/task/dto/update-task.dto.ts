import { Status } from '@prisma/client';

export type UpdateTaskDTO = {
  title: string;
  description: string;
  status: Status;
};
