const express = require('express');
const app = express();

const { config } = require('./config/index');
const {logErrors, errorHandler} = require('./utils/middlewares/errorHandlers');
const moviesApi = require('./routes/movies');

app.use(express.json());

moviesApi(app);

// los middlewares de error deben ir SIEMPRE al final
app.use(logErrors);
app.use(errorHandler);


app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
