const assert = require('assert');
const proxyquire = require('proxyquire');

const { MongoLibMock, getAllStub } = require('../utils/mocks/mongoLib');
const { moviesMock } = require('../utils/mocks/movies');

describe('services - movies', function () {

    const MovieService = proxyquire('../services/MovieService', {
        '../lib/mongo': MongoLibMock
    });

    const moviesServices = new MovieService();

    describe('when getMovies method is called', function () {
        it('should call the getAll MongoLib method', async function () {
            await moviesServices.getMovies({});
            assert.strictEqual(getAllStub.called, true);
        });

        it('should return an array of movies', async function () {
            const result = await moviesServices.getMovies({});
            const expected = moviesMock;

            assert.deepStrictEqual(result, expected);
            assert.strictEqual(getAllStub.calledOnce, false); // cuenta como segunda llamada
            assert.strictEqual(getAllStub.calledTwice, true); // cuenta como segunda llamada
        });
    });

});