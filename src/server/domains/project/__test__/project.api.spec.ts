// import { Application } from 'express';
// import request from 'supertest';

// import prisma from '@database/';
// import { createServer } from '@http/';
// import { HasInprogressProjectMessage } from '../exceptions/has-inprogress-project';
// import { ProjectNotFoundMessage } from '../exceptions/project-not-found';

// const MAX_PORT = 9000;
// const MIN_PORT = 3000;

// let server: Application;
// let port = Math.floor(Math.random() * (MAX_PORT - MIN_PORT + 1) + MAX_PORT);

// const toStringDate = (date: Date) => date.toISOString();

// const mockProject = {
//   name: 'Project 1',
//   expiration_date: new Date(),
// };

// const mockCompletedProject = {
//   name: 'Project Completed',
//   expiration_date: new Date(),
//   completed: false,
// };

// describe('/projects', () => {
//   afterAll(async () => {
//     await prisma.project.deleteMany();
//   });

//   beforeAll(async () => {
//     server = createServer({ port });
//   });

//   it(`POST / should return [400] and message: "${HasInprogressProjectMessage}"`, async () => {
//     let completedProject;
//     try {
//       completedProject = await prisma.project.create({ data: mockCompletedProject });

//       await request(server)
//         .post('/projects')
//         .send(mockProject)
//         .expect(400, { message: HasInprogressProjectMessage });
//     } finally {
//       await prisma.project.delete({ where: { id: completedProject?.id } });
//     }
//   });

//   it('POST / should return [200] and created project', async () => {
//     const response = await request(server).post('/projects').send(mockProject).expect(201);

//     expect(response.body.id).toBeDefined();
//   });

//   it('GET / should return array with length 1', async () => {
//     const response = await request(server).get('/projects').expect(200);
//     expect(response.body.length).toBe(1);
//   });

//   it("GET /:id should return [404] and 'Project not found'", async () => {
//     await request(server).get('/projects/1').expect(404, { message: 'Project not found' });
//   });

//   it('GET /:id should return Project', async () => {
//     const project = await prisma.project.findFirst();
//     const reponse = await request(server).get(`/projects/${project?.id}`).expect(200);

//     expect(reponse.body.name).toBe(mockProject.name);
//     expect(reponse.body.expiration_date).toBe(toStringDate(mockProject.expiration_date));
//   });

//   it(`PUT /:id should return [404] and "${ProjectNotFoundMessage}"`, async () => {
//     await request(server).put('/projects/1').expect(404, { message: ProjectNotFoundMessage });
//   });

//   it(`PUT /:id should return [204] and updated project`, async () => {
//     const project = await prisma.project.findFirst();
//     await request(server).put(`/projects/${project?.id}`).expect(204);
//   });

//   it(`DELETE /:id should return [404] and "${ProjectNotFoundMessage}"`, async () => {
//     await request(server).delete('/projects/1').expect(404, { message: ProjectNotFoundMessage });
//   });

//   it("DELETE /:id should return [204] and 'Project successfully delete'", async () => {
//     const project = await prisma.project.findFirst();
//     await request(server)
//       .delete(`/projects/${project?.id}`)
//       .expect(200, { message: 'Project successfully delete' });
//   });
// });
