// const exec = require('child_process').exec;

const { exec, spawn } = require('child_process'); // lo mismo de arriba, pero con desestructuración

const command = 'pwd';
// const command = 'node 09_console.js';

/**
 * exec
 * 
 * Permite ejecutar comandos en el sistema operativo.
 * 
 * Usa exec cuando quieras que el proceso hijo devuelva mensajes de estado simples.
 * Usa exec cuando solo quieras recibir datos al final de la ejecución.
 */
exec(command, (err, stdout, stderr) => {
    if (err) {
        console.log('Ha ocurrido un error');
        console.error(err);
        return false;
    }

    console.log(stdout);
});

/**
 * spawn
 * 
 * Permite invocar procesos y poder inspeccionar información del mismo.
 * 
 * Usa spawn cuando quieras que el proceso hijo devuelva datos binarios enormes a Node.
 * Usa spawn cuando quieras recibir datos desde que el proceso arranca.
 */
const process = spawn('ls', ['-la']);
console.log(process.pid);
console.log(process.connected);

process.stdout.on('data', (dato) => {
    console.log(process.killed); // false
    console.log(dato.toString());
});

process.on('exit', (code) => {
    console.log('El proceso terminó');
});