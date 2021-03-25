// Dependencies
import http from 'http';
import express, { Application } from 'express';

// Under test file
import HttpServer from '@alversoft/bootstrap/http-server';

// Mocks
jest.mock('http', () => ({
  ...jest.requireActual('http'),
  createServer: jest.fn(() => ({
    listen: jest.fn(),
    on: jest.fn().mockImplementation((_name, cb) => cb('listening')),
  })),
}));

describe('HttpServer', () => {
  it('should create a server', async () => {
    const server: Application = express();
    const httpServer = new HttpServer(server, 5000);
    await httpServer.initialize();
    expect(http.createServer).toBeCalled();
  });
});
