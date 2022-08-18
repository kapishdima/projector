import { Application } from 'express';
import request from 'supertest';

import { createServer } from '../../../http';

let server: Application;

beforeAll(() => {
  server = createServer();
});

describe('/projects', () => {
  it("GET / should return 'get projects'", async () => {
    await request(server).get('/projects').expect(200, []);
  });

  it("GET /:id should return 'get projects'", async () => {
    await request(server).get('/projects/1').expect(200, 'get project1');
  });

  it("POST / should return 'create projects'", async () => {
    await request(server).post('/projects').expect(200, 'create project');
  });

  it("PUT /:id should return 'create projects'", async () => {
    await request(server).put('/projects/1').expect(200, 'put project1');
  });

  it("DELETE /:id should return 'delete projects'", async () => {
    await request(server).delete('/projects/1').expect(200, 'delete project1');
  });
});
