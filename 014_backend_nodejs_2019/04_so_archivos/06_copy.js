const fs = require('fs');

console.log(__dirname);

fs.copyFile(__dirname + '/naranja-dulce.txt', __dirname + '/new_folder/recursive/limon-partido.txt', (error) => {
    if (error) {
        console.error('Error', error);
    } else {
        console.log('Archivo copiado como limon.txt');
    }
})