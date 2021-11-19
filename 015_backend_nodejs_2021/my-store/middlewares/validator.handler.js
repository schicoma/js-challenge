const Joi = require('@hapi/joi');
const boom = require('@hapi/boom');

function validatorHandler(schema, property) {
    return (request, response, next) => {
        const data = request[property];
        const { error } = schema.validate(data, { abortEarly: false }); // enviar errores de manera conjunta

        if (error) {
            next(boom.badRequest(error));
        }

        next();
    }
}

module.exports = validatorHandler;