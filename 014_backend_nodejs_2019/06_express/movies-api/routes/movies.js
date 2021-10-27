const express = require('express');
// const bodyParser = require('body-parser');

const MovieService = require('../services/MovieService');

function moviesApi(app) {
  const router = express.Router();

  app.use(express.json());
  app.use('/api/movies', router);

  const movieService = new MovieService();

  // Listar
  router.get('/', async function (request, response, next) {
    try {
      const movies = await movieService.getMovies();

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
      const { movieId } = request.params;
      const movie = await movieService.getMovie(movieId);

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
      // obtener el objeto request.'body' y asignarlo a la variable 'movie'
      const { body: movie } = request;
      
      const createdMovie = await movieService.createMovie(movie);

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
      const { movieId } = request.params;
      const { body: movie } = request;

      const updatedMovie = await movieService.updateMovie(movieId, movie);

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
      const { movieId } = request.params;
      const deletedMovie = await movieService.deleteMovie(movieId);

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
