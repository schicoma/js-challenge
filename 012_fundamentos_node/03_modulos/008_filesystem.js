// import fs from 'fs'; // SyntaxError: Cannot use import statement outside a module
const fs = require('fs');

// IMPORTANTE: No utilizar las funciones síncronas del módulo fs

function readFile(path, callback) {
    fs.readFile(path, (err, data) => {
        callback(data.toString());
    });
}

function writeFile(path, data, callback) {
    fs.writeFile(path, data, (err) => {
        if (err) {
            console.err(err);
        } else {
            console.log('Se ha creado un nuevo archivo');
        }
    })
}

function deleteFile(path, callback) {
    fs.unlink(path, (err) => {
        callback(err);
    })
}

readFile(`${__dirname}/archivo.txt`, console.log);
writeFile(`${__dirname}/new_archivo.txt`, 'Un nuevo archivo');

setTimeout(() => {
    deleteFile(`${__dirname}/new_archivo.txt`, console.log);
}, 3000);
