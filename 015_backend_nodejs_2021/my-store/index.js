const express = require('express');
const cors = require('cors');

const { logErrors, errorHandler, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();
const port = process.env.PORT || 3131;

app.use(express.json());
app.use(cors({
    origin: ['http://127.0.0.1:5500']
}));

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
