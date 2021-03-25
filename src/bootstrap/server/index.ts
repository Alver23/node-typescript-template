// Dependencies
import { Application } from 'express';
import cookieParser from 'cookie-parser';
import healthCheck from 'express-healthcheck';

// Interfaces
import { IBootstrap } from '@alversoft/bootstrap/interfaces';

class Server implements IBootstrap {
  constructor(
    private readonly server: Application,
    private readonly port: number = 3000,
    private readonly basePath = ''
  ) {}

  setMiddlewares(): void {
    this.server.use(cookieParser());
    this.server.set('port', this.port);
  }

  setRoutes(): void {
    this.server.get(`${this.basePath}/health(check)?`, healthCheck());
  }

  async initialize(): Promise<Application> {
    this.setMiddlewares();
    this.setRoutes();
    return this.server;
  }
}

export default Server;
