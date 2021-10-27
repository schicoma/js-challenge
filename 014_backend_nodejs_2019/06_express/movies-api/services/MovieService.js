const MongoLib = require('../lib/mongo');
class MovieService {
  constructor() {
    this.collection = 'movies';
    this.mongoDb = new MongoLib();
  }

  async getMovies(tags) {
    // verificación para ver si la variable tags está definida (hay datos) y en caso de que así sea está creando un objeto con el atributo tags
    const query = tags && { tags: { $in: tags } };
    const movies = await this.mongoDb.getAll(this.collection, query);
    return movies || [];
  }

  async getMovie(id) {
    const movie = await this.mongoDb.get(this.collection, id);
    return movie || {};
  }

  async createMovie(movie) {
    const createdMovieId = await this.mongoDb.create(this.collection, movie);
    return createdMovieId;
  }

  async updateMovie(id, movie) {
    const updatedMovieId = await this.mongoDb.update(this.collection, id, movie);
    return updatedMovieId;
  }

  async deleteMovie(id) {
    const movieId = await this.mongoDb.delete(this.collection, id);
    return movieId;
  }
}

module.exports = MovieService;
