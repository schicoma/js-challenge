const assert = require('assert');
const proxyquire = require('proxyquire');

const { moviesMock, MovieServiceMock } = require('../utils/mocks/movies');
const testServer = require('../utils/testServer');

describe('routes - movies', function () {

    const route = proxyquire('../routes/movies', {
        '../services/MovieService': MovieServiceMock
    });

    const request = testServer(route);

    describe('GET /movies', function () {
        it('should answer with 200 status', function (done) {
            request.get('/api/movies').expect(200, done);
        });

        it('should answer with the list of movies', function (done) {
            request.get('/api/movies').end((err, response) => {
                assert.deepStrictEqual(response.body, {
                    data: moviesMock,
                    message: 'Movies listed'
                });

                done();
            })
        })
    });
});