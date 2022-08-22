import { Application } from 'express';
import request from 'supertest';

import prisma from '@database/';
import { createServer } from '@http/';
import { Status } from '@prisma/client';

const MAX_PORT = 9000;
const MIN_PORT = 3000;

let server: Application;
let port = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1) + MAX_PORT);

const mockProject = {
  name: 'Project with task',
  expiration_date: new Date(),
};

const mockTask = {
  title: 'Task 1',
  description: 'Task 1 description',
};

const mockUpdatingTask = {
  title: 'Task 1 updated',
  description: 'Task 1 description updated',
  status: Status.TEST,
};

describe('/tasks', () => {
  beforeAll(async () => {
    server = createServer({ port });
  });
  afterAll(async () => {
    await prisma.task.deleteMany();
    await prisma.project.deleteMany();
  });

  it('GET /:projectId should return []', async () => {
    const project = await prisma.project.findFirst();
    request(server).get(`/tasks/${project?.id}`).expect(201, []);
  });
  it('POST /:projectId should return array with length 1', async () => {
    let project;
    try {
      project = await prisma.project.create({ data: mockProject, include: { tasks: true } });
      const response = await request(server)
        .post(`/tasks/${project?.id}`)
        .send(mockTask)
        .expect(201);

      expect(response.body.length).toBe(1);
    } finally {
      // await prisma.project.delete({ where: { id: project?.id } });
    }
  });
  it('GET /:id should return Task', async () => {
    const task = await prisma.task.findFirst();
    const response = await request(server).get(`/task/${task?.id}`).expect(200);

    expect(response.body.title).toBe(mockTask.title);
    expect(response.body.description).toBe(mockTask.description);
  });
  it('PUT /:id should return updated Task', async () => {
    const task = await prisma.task.findFirst();
    const response = await request(server)
      .put(`/tasks/${task?.id}`)
      .send(mockUpdatingTask)
      .expect(201);

    expect(response.body.title).toBe(mockUpdatingTask.title);
    expect(response.body.status).toBe(mockUpdatingTask.status);
    expect(response.body.description).toBe(mockUpdatingTask.description);
  });
  it('DELETE /:id should return message "Task successfully delete"', async () => {
    const project = await prisma.project.findFirst({ include: { tasks: true } });
    const task = await prisma.task.findFirst({ where: { projectId: project?.id } });

    const response = await request(server)
      .delete(`/tasks/${project?.id}/${task?.id}`)
      .expect(200, { message: 'Task successfully delete' });
  });
});
