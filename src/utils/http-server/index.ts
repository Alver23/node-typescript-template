// Config
import config from '@alversoft/config';

export const normalizePort = (portArg: string): boolean | number => {
  const parsed = parseInt(portArg, 10);
  return parsed > 0 ? parsed : false;
};

export const onError = (
  error: NodeJS.ErrnoException,
  callback: (params) => void
): void => {
  if (error.syscall !== 'listen') {
    throw error;
  }
  callback(error);
};

export const onListening = (callback: (params: string) => void): void => {
  callback(
    `Listening on port ${config.port} - Environment: ${config.environment} - Host: http://localhost:${config.port}`
  );
};
