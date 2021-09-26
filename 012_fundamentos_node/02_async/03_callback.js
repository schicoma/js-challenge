function hola(nombre, callback) {
    setTimeout(function () {
        console.log(`Hola, ${nombre}`);
        callback(nombre.toUpperCase());
    }, 1000);
}

function adios(nombre, callback) {
    setTimeout(function () {
        console.log(`Adiós, ${nombre}`);
        callback();
    }, 1000);
}

console.log('Iniciando proceso ...');

hola('Sebastian', function (nombre) {
    adios(nombre, function () {
        console.log('Terminando proceso ...');
    });
});



