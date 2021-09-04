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

function hablar(callback) {
    setTimeout(function () {
        console.log('Bla bla bla bla ...');
        callback();
    }, 1000);
}

console.log('Iniciando proceso ...');


/**
 * 
 * CALLBACK HELL!!!
 * 
 * Recomendación: no anidar más de 3 callbacks
 * 
 */
hola('Sebastian', function (nombre) {
    hablar(function () {
        hablar(function () {
            hablar(function () {
                adios(nombre, function () {
                    console.log('Terminando proceso ...');
                });
            });
        });
    });
});



