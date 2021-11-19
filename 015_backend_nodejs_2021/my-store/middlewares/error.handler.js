function logErrors(error, request, response, next) {
    console.log('Sucedió un error');
    console.error(error);
    next(error);
}

function errorHandler(error, request, response, next) {
    response.status(500).json({
        message: error.message,
        stack: error.stack
    });
}

function boomErrorHandler(error, request, response, next) {
    if (error.isBoom) {
        const { output } = error;
        response.status(output.statusCode).json(output);
    }

    next(error);
}

module.exports = { logErrors, errorHandler, boomErrorHandler };