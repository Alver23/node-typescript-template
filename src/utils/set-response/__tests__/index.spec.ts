// Under test file
import setReponse from '../index';

describe('SetResponse Method', () => {
  it('should get an response when status code is 200', () => {
    expect(setReponse({ data: [], message: 'fake message' })).toEqual(
      expect.objectContaining({
        data: expect.any(Array),
        message: expect.any(String),
        status: expect.any(Number),
      })
    );
  });

  it('should get an response when status code is 201', () => {
    expect(
      setReponse({
        status: 201,
      })
    ).toHaveProperty('status', 201);
  });

  it('should get an response when send options', () => {
    expect(setReponse({ options: { error: 'fake error' } })).toHaveProperty(
      'error',
      'fake error'
    );
  });
});
