/* eslint-disable no-unused-expressions */
import { ErrorRequestHandler } from 'express';
import { IGenericErrorMessage } from '../interfaces/errorMessage';
import config from '../config';
import ApiError from '../error/ApiError';
import handleValidationError from '../error/handleValidationError';
import handleCastError from '../error/handleCastError';
import { ZodError } from 'zod';
import handleZodError from '../error/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (error, req, res, next) => {
  config.env === 'development'
    ? console.log('globalErrorHandler', error)
    : console.log('globalErrorHandler', error);

  let statusCode = 500;
  let message = 'something went wrong';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error.name === 'CastError') {
    const simplifiedError = handleCastError(error);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    (message = error?.message),
      (errorMessages = error?.message
        ? [
            {
              path: '',
              message: error?.message,
            },
          ]
        : []);
  } else if (error instanceof Error) {
    message = error?.message;
    errorMessages = error?.message
      ? [
          {
            path: '',
            message: error?.message,
          },
        ]
      : [];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    // eslint-disable-next-line no-undefined
    stack: config.env !== 'production' ? error.stack : undefined,
  });
  next();
};

export default globalErrorHandler;
