const express = require('express');
const app = express();

const { config } = require('./config/index');
const {logErrors, wrapErrors, errorHandler} = require('./utils/middlewares/errorHandlers');
const notFoundHandler = require('./utils/middlewares/notFoundHandler');
const moviesApi = require('./routes/movies');

app.use(express.json());

// routes
moviesApi(app);

// Capturar 404 error
app.use(notFoundHandler);

// los middlewares de error deben ir SIEMPRE al final
app.use(logErrors);
app.use(wrapErrors);
app.use(errorHandler);


app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
