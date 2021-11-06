const express = require('express');
const faker = require('faker');

const app = express();
const port = 3131;

const routerApi = require('./routes/index');

app.get('/', (request, response) => {
    response.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (request, response) => {
    response.send('Hola, esta es una nueva ruta');
});

routerApi(app);

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});
