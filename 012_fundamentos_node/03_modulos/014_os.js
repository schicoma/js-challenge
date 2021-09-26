// Módulo OS provee utilidades relacionadas al sistema operativo
const { Console } = require('console');
const os = require('os');

const SIZE = 1024;

function kbytes(bytes) {
    return bytes / SIZE;
}

function gbytes(bytes) {
    return bytes / SIZE / SIZE / SIZE;
}

console.log(os.arch()); // x64
console.log(os.platform()); // linux
// console.log(os.cpus());
console.log(os.cpus().length); // 4
// console.log(os.constants); // información de bajo nivel

console.log(os.freemem()); // bytes
console.log(kbytes(os.freemem())); // en kilobytes
console.log(gbytes(os.freemem())); // en gigabytes
console.log(gbytes(os.totalmem())); // memoria total en gigabytes

console.log(os.homedir());
console.log(os.tmpdir())

console.log(os.hostname());
console.log(os.networkInterfaces());




