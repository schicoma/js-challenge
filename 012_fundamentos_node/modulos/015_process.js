/**
 * process se encuentra en global, por lo que no es necesario
 * importarlo
 */
// const process = require('process');

// El objecto process es una instancia de EventEmitter
process.on('beforeExit', () => {
    console.log('El proceso va a terminar');
});

process.on('exit', () => {
    console.log('El proceso acabó');

    //  en este punto, nos hemos desconectado del event loop, por lo que
    // no se podrán ejecutar tareas asíncronas

    setTimeout(() => {
        console.log('No se pintará');
    }, 0);
});

process.on('uncaughtException', (err, src) => {
    console.log('Se me olvidó capturar un error');
    // console.error(err);
    setTimeout(() => {
        console.log('Viene de las excepciones');
    }, 3000);
});

funcionQueNoExiste();