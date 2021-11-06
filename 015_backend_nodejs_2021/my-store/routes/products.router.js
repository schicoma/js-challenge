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

router.get('/filter',  (request, response) => {
    response.send('soy un filter');
});

router.get('/:id', (request, response) => {
    const { id } = request.params;
    response.json({
        id: id,
        name: 'Producto 1',
        price: 2504
    });
});

module.exports = router;