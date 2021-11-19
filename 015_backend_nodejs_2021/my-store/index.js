const express = require('express');
const faker = require('faker');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = 3131;

app.use(express.json());

const routerApi = require('./routes/index');

app.get('/', (request, response) => {
    response.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (request, response) => {
    response.send('Hola, esta es una nueva ruta');
});

routerApi(app);

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);

app.listen(port, () => {
    console.log(`Escuchando en http://localhost:${port}`);
});
