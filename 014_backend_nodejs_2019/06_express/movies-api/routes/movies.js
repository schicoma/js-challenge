const express = require('express');

const { moviesMock } = require('../utils/mocks/movies');

function moviesApi(app) {
  const router = express.Router();

  app.use('/api/movies', router);

  // Listar
  router.get('/', async function (request, response, next) {
    try {
      const movies = await Promise.resolve(moviesMock);
      response.status(200).json({
        data: movies,
        message: 'Movies listed',
      });
    } catch (error) {
      next(error);
    }
  });

  // Obtener por id
  router.get('/:movieId', async function (request, response, next) {
    try {
      const movieId = request.params.movieId;
      const movie = await Promise.resolve(
        moviesMock.filter((movie) => movie.id === movieId)[0]
      );
      response.status(200).json({
        data: movie,
        message: 'Movie retrieved',
      });
    } catch (error) {
      next(error);
    }
  });

  // Crear
  router.post('', async function (request, response, next) {
    try {
      const createdMovie = await Promise.resolve();
      response.status(200).json({
        message: 'Movie created',
      });
    } catch (error) {
      next(error);
    }
  });

  // Actualizar
  router.put('/:movieId', async function (request, response, next) {
    try {
      const movieId = request.params.movieId;
      const updatedMovie = await Promise.resolve(
        moviesMock.filter((movie) => movie.id === movieId)[0]
      );
      response.status(201).json({
        data: movieId,
        message: 'Movie updated',
      });
    } catch (error) {
      next(error);
    }
  });

  // Eliminar
  router.delete('/:movieId', async function (request, response, next) {
    try {
      const movieId = request.params.movieId;
      const deletedMovie = await Promise.resolve(
        moviesMock.filter((movie) => movie.id === movieId)[0]
      );
      response.status(200).json({
        data: movieId,
        message: 'Movie deleted',
      });
    } catch (error) {
      next(error);
    }
  });
}

module.exports = moviesApi;
