// Dependencies
import http from 'http';
import Debug from 'debug';
import { Application } from 'express';

// Config
import config from '@alversoft/config';

// Interfaces
import { IBootstrap } from '@alversoft/bootstrap/interfaces';

// Utils
import { onError, onListening } from '@alversoft/utils/http-server';

class HttpServer implements IBootstrap {
  private readonly debug: Debug;

  constructor(
    private readonly server: Application,
    private readonly port: number
  ) {
    this.debug = Debug(`${config.appName}:http-server`);
    this.debugLog = this.debugLog.bind(this);
  }

  private debugLog(log: string): void {
    this.debug(log);
  }

  async initialize(): Promise<string> {
    return new Promise((resolve, reject) => {
      const httpServer: http.Server = http.createServer(this.server);
      httpServer.listen(this.port);
      httpServer.on('listening', () => {
        onListening(this.debugLog);
        resolve('');
      });
      httpServer.on('error', (error) => {
        onError(error, this.debugLog);
        reject(error);
      });
    });
  }
}

export default HttpServer;
