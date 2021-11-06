const express = require('express');

const router = express.Router();

router.get('', (request, response) => {
    const { limit, offset } = request.query;

    if (limit && offset) {
        response.json({
            limit,
            offset
        });
    } else {
        response.send('No hay parámetros');
    }
});

module.exports = router;