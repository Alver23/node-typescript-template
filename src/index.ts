// Dependencies
import 'module-alias/register';
import express from 'express';

// Bootstrap
import ExpressServer from '@alversoft/bootstrap/express-server/server';
import HttpServer from '@alversoft/bootstrap/http-server';

// Config
import config from '@alversoft/config';

// Utils
import { normalizePort } from '@alversoft/utils/http-server';

const port: number = normalizePort(config.port as string) as number;

const start = async () => {
  try {
    const expressServer = new ExpressServer(express(), port);
    const server = await expressServer.initialize();
    const httpServer = new HttpServer(server, port);
    await httpServer.initialize();
  } catch (e) {
    process.exit(1);
  }
};

start();
