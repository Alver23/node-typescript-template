// Dependencies
import express from 'express';

const basePath = '/';
const fakeServer = express();
fakeServer.use(express.json());

export { fakeServer, basePath };
