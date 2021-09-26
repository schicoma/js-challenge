async function hola(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Hola, ${nombre}`);
            resolve(nombre.toUpperCase());
        }, 1000);
    });
}

async function adios(nombre, callback) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(`Adiós, ${nombre}`);
            resolve();
        }, 1000);
    });
}

async function hablar(nombre, callback) {
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

async function main() {
    try {
        let nombre = await hola('Carlos');

        await hablar(nombre);
        await hablar(nombre);
        // await hablar();
        await hablar(nombre);
        
        await adios(nombre);

        console.log(`Terminado el proceso`);
    } catch (e) {
        console.error(e);
    }

}

console.log(`Iniciando el proceso`);
main();