const {config} = require('../config');

function cacheResponse(response, seconds) {
    if (!config.dev) {
        response.set('Cache-Control', `public, max-age=${seconds}`);
    }
}

module.exports = cacheResponse;