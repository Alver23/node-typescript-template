// Dependencies
import supertest from 'supertest';
import { notFound } from '@hapi/boom';
import { NextFunction, Request, Response } from 'express';

// Mocks
import { fakeServer } from '@alversoft/__mocks__/fake-server';

// Config
import config from '@alversoft/config';

// Under test file
import ErrorHandler from '../index';

jest.mock('@alversoft/config', () => jest.fn());

describe('ErrorHandler', () => {
  fakeServer.get(
    '/users',
    (req: Request, res: Response, next: NextFunction) => {
      ErrorHandler.handler()(notFound(), req, res, next);
    }
  );

  const cases = [[true], [false]];

  it.each(cases)(
    'should return an error when isProduction is to equal %s',
    async (value) => {
      config.isProduction = value;
      const response = await supertest(fakeServer).get('/users');
      expect(response.status).toEqual(404);
    }
  );
});
