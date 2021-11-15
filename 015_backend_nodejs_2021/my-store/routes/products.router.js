const { response, request } = require('express');
const express = require('express');
const faker = require('faker');

const router = express.Router();

router.get('', (request, response) => {
    const { size: limit } = request.query;

    const products = [];

    for (let i = 0; i < (limit > 50 ? 50 : limit); i++) {
        products.push({
            name: faker.commerce.productName(),
            price: parseInt(faker.commerce.price(), 10),
            image: faker.image.imageUrl()
        });
    }

    response.json(products);
});

router.get('/filter', (request, response) => {
    response.send('soy un filter');
});

router.get('/:id', (request, response) => {
    const { id } = request.params;

    if (id === '999') {
        response.status(404).json({
            message: 'Not found'
        });
    } else {
        response.status(200).json({
            id: id,
            name: 'Producto 1',
            price: 2504
        });
    }

});

router.post('', (request, response) => {
    const body = request.body;

    response.json({
        message: 'created',
        data: body
    });
});

router.patch('/:id', (request, response) => {
    const { id } = request.params;
    const body = request.body;
    response.json({
        id,
        message: 'updated',
        data: body
    });
});

router.delete('/:id', (request, response) => {
    const { id } = request.params;
    response.json({
        id,
        message: 'deleted'
    });
});

module.exports = router;