console.log('Hola mundo');

// informativo
console.info('Hola mundo (info)');

// warning (advertencia)
console.warn('Hola mundo (warning)');

// tablas
console.table([{
    nombre: 'Juan',
    edad: 30
}]);

// groups
console.group('Grupo 1');
console.log('Hola mundo 1 - grupo 1');
console.log('Hola mundo 2 - grupo 1');
console.log('Hola mundo 3 - grupo 1');
console.groupEnd('Grupo 1');

// nested groups
console.group('Grupo 2');
console.log('Hola mundo 1 - grupo 2');
console.log('Hola mundo 2 - grupo 2');
console.group('Grupo 2.1');
console.log('Hola mundo 2.1 - grupo 2.1');
console.groupEnd('Grupo 2.1');
console.log('Hola mundo 3 - grupo 2');
console.groupEnd('Grupo 2');

// contadores

console.count('Contador');
console.count('Contador');
console.count('Contador');
console.count('Contador');
console.countReset('Contador');
console.count('Contador');

