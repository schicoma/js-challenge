const Joi = require('@hapi/joi');

const id = Joi.string().uuid();
const name = Joi.string().max(80);
const price = Joi.number().integer().min(100);
const image = Joi.string().uri();

const CreateProductSchema = Joi.object({
    name: name.required(),
    price: price.required(),
    image: image.required()
});

const UpdateProductSchema = Joi.object({
    name: name,
    price: price,
    image: image
});

const ProductIdSchema = Joi.object({
    id: id
});

module.exports = { CreateProductSchema, UpdateProductSchema, ProductIdSchema };