// Dependencies
import { Application } from 'express';

abstract class ServerTemplate {
  protected abstract server: Application;

  protected abstract errorHandlers(): void;

  protected abstract setMiddlewares(): void;

  protected abstract setRoutes(): void;

  async initialize(): Promise<Application> {
    this.setMiddlewares();
    this.setRoutes();
    this.errorHandlers();
    return this.server;
  }
}

export default ServerTemplate;
