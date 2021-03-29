// Dependencies
import supertest from 'supertest';
import express, { Application } from 'express';

// Interfaces
import { IBootstrap } from '@alversoft/bootstrap/interfaces';

// Under test file
import ExpressServer from '../index';

describe('ExpressServer', () => {
  const application: Application = express();
  const expressServer: IBootstrap = new ExpressServer(application);

  it('should start a server', async (done) => {
    const server = await expressServer.initialize();
    supertest(server)
      .get('/health')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, done);
  });
});
