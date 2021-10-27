const boom = require('@hapi/boom');
const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { ...error, stack };
  }

  return error;
}

function logErrors(error, request, response, next) {
  console.log(error);
  next(error);
}

function wrapErrors(error, request, response, next) {
  if (!error.isBoom) {
    next(boom.badImplementation(error));
  }

  next(error);
}

function errorHandler(error, request, response, next) {
  const {
    output: { statusCode, payload }
  } = error;

  response.status(statusCode);
  response.json(withErrorStack(payload, error.stack));
}

module.exports = {
  logErrors,
  wrapErrors,
  errorHandler,
};
