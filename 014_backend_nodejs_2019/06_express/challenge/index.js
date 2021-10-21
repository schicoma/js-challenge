const express = require('express');
const app = express();

const { config } = require('./config/index.js');

app.get('/calcular-year-bisiesto', (request, response) => {
    const year = request.query?.year;
    let message = 'El año no es bisiesto';

    if (!year) {
        message = 'Envié el año en la url (usando "year")';
    } else if (Number(year) % 4 === 0) {
        message = 'El año es bisiesto';
    }

    response.send(message);
});

app.listen(config.port, function () {
    console.log(`Listening at http://localhost:${config.port}`);
});
