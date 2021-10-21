const express = require('express');
const app = express();

const { config } = require('./config/index');

app.get('/', function (request, response) {
  response.send('Hello world');
});

app.get('/json', function (request, response) {
  response.send({ hello: 'world' });
});

app.listen(config.port, function () {
  console.log(`Listening http://localhost:${config.port}`);
});
