// Dependencies
import { RequestHandler, ErrorRequestHandler } from 'express';

export interface IMiddleware {
  handler(params?): RequestHandler | ErrorRequestHandler;
}
