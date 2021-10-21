const util = require('util');

const helloPluto = util.deprecate(() => {
    console.log('Hello pluto')
}, 'pluto is deprecate, is not a planet anymore');

helloPluto();