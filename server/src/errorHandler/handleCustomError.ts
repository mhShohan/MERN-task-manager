import CustomError from './customError';

const handleCustomError = (err: CustomError) => {
  let errorResponse: Record<string, unknown> = {};

  if (err.type === 'WrongCredentials') {
    errorResponse = {
      email: {
        path: 'email',
        message: 'Wrong Credentials',
      },
      password: {
        path: 'password',
        message: 'Wrong Credentials',
      },
    };
  }

  if (err.type === 'Unauthorize') {
    errorResponse = { isAuthenticated: false };
  }

  return errorResponse;
};

export default handleCustomError;
