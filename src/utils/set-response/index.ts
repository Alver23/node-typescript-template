// Dependencies
import { OK } from 'http-status-codes';

// Interfaces
import { IResponse } from './interfaces';

const setResponse = ({
  message,
  data,
  status,
  options,
}: IResponse): IResponse => {
  let statusCode = OK;
  let additionalOptions = {};
  if (status) {
    statusCode = status;
  }

  if (options) {
    additionalOptions = options;
  }
  return {
    message,
    status: statusCode,
    data,
    ...additionalOptions,
  };
};

export default setResponse;
