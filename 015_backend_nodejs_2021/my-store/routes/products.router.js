const express = require('express');

const ProductService = require('../services/product.service');
const productService = new ProductService();

const router = express.Router();

const validatorHandler = require('../middlewares/validator.handler');
const { CreateProductSchema, UpdateProductSchema, ProductIdSchema } = require('../schemas/product.schema');

router.get('', async (request, response) => {
    const { size: limit } = request.query;
    const products = await productService.find();

    response.json(products);
});

router.get('/filter', (request, response) => {
    response.send('soy un filter');
});

router.get('/:id', validatorHandler(ProductIdSchema, 'params'),
    async (request, response, next) => {
        const { id } = request.params;

        try {
            const product = await productService.findOne(id);
            response.status(200).json(product);
        } catch (e) {
            next(e);
        }

    });

router.post('', validatorHandler(CreateProductSchema, 'body'),
    async (request, response) => {
        const body = request.body;

        const newProduct = await productService.create(body);

        response.json({
            message: 'created',
            data: newProduct
        });
    });

router.patch('/:id', [
    validatorHandler(ProductIdSchema, 'params'),
    validatorHandler(UpdateProductSchema, 'body')],
    async (request, response, next) => {
        try {
            const { id } = request.params;
            const body = request.body;

            const updatedProduct = await productService.update(id, body);

            response.json({
                id,
                message: 'updated',
                data: updatedProduct
            });
        } catch (e) {
            next(e);
        }
    });

router.delete('/:id', validatorHandler(ProductIdSchema, 'params'),
    async (request, response, next) => {
        try {
            const { id } = request.params;

            await productService.delete(id);

            response.json({
                id,
                message: 'deleted'
            });
        } catch (e) {
            next(e);
        }
    });

module.exports = router;