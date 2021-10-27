const boom = require('@hapi/boom');
const joi = require('@hapi/joi');

function validate(data, schema) {
    const { error } = joi.object(schema).validate(data);
    // const error = false;
    return error;
}

function validationHandler(schema, check = 'body') {
    return function (request, response, next) {
        const error = validate(request[check], schema);

        error ? next(boom.badRequest(error)) : next();
    }
}

module.exports = validationHandler;