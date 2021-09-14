// objeto global
// https://nodejs.org/api/globals.html

// console.log(global);

console.log(setInterval);
console.log(setImmediate);

console.log(__dirname);
console.log(__filename);

// creando variables globales

global.mi_variable = 'Hola mundo';
console.log(global.mi_variable);
console.log(mi_variable);