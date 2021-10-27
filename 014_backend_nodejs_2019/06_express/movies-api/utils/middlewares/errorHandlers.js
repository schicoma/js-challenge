const { config } = require('../../config');

function withErrorStack(error, stack) {
  if (config.dev) {
    return { error, stack };
  }

  return error;
}

function logErrors(error, request, response, next) {
  console.log(error);
  next(error);
}

function errorHandler(error, request, response, next) {
  response.status(error.status || 500);
  response.json(withErrorStack(error.message, error.stack));
}

module.exports = {
  logErrors,
  errorHandler,
};
