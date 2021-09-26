function hola(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`);
            resolve(nombre.toUpperCase());
        }, 1000);
    });
}

function adios(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adiós, ${nombre}`);
            resolve();
        }, 1000);
    });
}

function hablar(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('Bla bla bla bla ...');

            if (nombre) {
                resolve(nombre);
            } else {
                reject(new Error('Hay un error'));
            }

        }, 1000);
    });
}

// ---

console.log(`Iniciando el proceso`);

hola('Carlos')
    // .then(nombre => hablar()) // UnhandledPromiseRejectionWarning: Hay un error
    .then(nombre => hablar(nombre))
    .then(hablar) // se pasa automáticamente el parámetro
    .then(hablar)
    .then(nombre => {
        return adios(nombre);
    })
    .then(nombre => {
        console.log(`Terminado el proceso`);
    })
    .catch(error => {
        console.error(error);
    });