const { response, request } = require('express');
const express = require('express');
const faker = require('faker');

const ProductService = require('../services/product.service');
const productService = new ProductService();

const router = express.Router();

router.get('', (request, response) => {
    // const { size: limit } = request.query;
    const products = productService.find();

    response.json(products);
});

router.get('/filter', (request, response) => {
    response.send('soy un filter');
});

router.get('/:id', (request, response) => {
    const { id } = request.params;

    const product = productService.findOne(id)

    if (!product) {
        response.status(404).json({
            message: 'Not found'
        });
    } else {
        response.status(200).json(product);
    }

});

router.post('', (request, response) => {
    const body = request.body;

    const newProduct = productService.create(body);

    response.json({
        message: 'created',
        data: newProduct
    });
});

router.patch('/:id', (request, response) => {
    const { id } = request.params;
    const body = request.body;

    const updatedProduct = productService.update(id, body);

    response.json({
        id,
        message: 'updated',
        data: updatedProduct
    });
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;

    productService.delete(id);

    response.json({
        id,
        message: 'deleted'
    });
});

module.exports = router;