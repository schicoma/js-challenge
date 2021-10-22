const { moviesMock } = require('../utils/mocks/movies');

class MovieService {
  async getMovies() {
    const movies = await Promise.resolve(moviesMock);
    return movies || [];
  }

  async getMovie(id) {
    const movie = await Promise.resolve(
      moviesMock.filter((movie) => movie.id === id)[0]
    );

    return movie || {};
  }

  async createMovie(movie) {
    const createdMovie = await Promise.resolve(moviesMock[0]);

    return createdMovie?.id;
  }

  async updateMovie(id, movie) {
    const updatedMovie = await Promise.resolve(moviesMock[0]);

    return updatedMovie?.id;
  }

  async deleteMovie(id) {
    const movie = await Promise.resolve(
      moviesMock.filter((movie) => movie.id === id)[0]
    );

    return movie?.id;
  }

}

module.exports = MovieService
