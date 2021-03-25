// Under test file
import { normalizePort, onListening, onError } from '../index';

describe('Utils > http-server', () => {
  it('should get the port to normalized', () => {
    const port = normalizePort('5000');
    const port2 = normalizePort('menor');
    expect(port).toBe(5000);
    expect(port2).toBeFalsy();
  });

  it('should call the method onListening', () => {
    const callback = jest.fn();
    onListening(callback);
    expect(callback).toHaveBeenCalledTimes(1);
  });

  describe('onError method', () => {
    it('should get an error', () => {
      const error: NodeJS.ErrnoException = new Error('fake error');
      const callback = jest.fn();
      expect(() => onError(error, callback)).toThrow(error);
    });
    it('should call the callback', () => {
      const error: NodeJS.ErrnoException = new Error('fake error');
      error.syscall = 'listen';
      const callback = jest.fn();
      onError(error, callback);
      expect(callback).toHaveBeenCalledTimes(1);
    });
  });
});
