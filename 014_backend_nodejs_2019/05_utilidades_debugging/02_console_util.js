// console utiliza paquete util
// en este caso, se utiliza el util.format()
console.log('Un %s, otro %s y un %d', 'perrito', 'gatito', 90);

console.info('Information: Hello world');
console.warn('Warning !!!  Hello world');
console.assert(42 === '42');
console.trace('hello');


const util = require('util');
const debugLog = util.debuglog('foo');

// solo se ejecutará si se activa la variable de entorno NODE_DEBUG=foo
// ejecutar: NODE_DEBUG=foo node app.js
debugLog('Hello from foo');