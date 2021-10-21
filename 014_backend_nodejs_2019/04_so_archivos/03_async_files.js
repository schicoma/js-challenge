const fs = require('fs');

try {
    if (process.argv.length < 3) { 
        console.log('Especifique la ruta del archivo a leer');
        return;
    }

    const file = process.argv[2];

    fs.readFile(file, (error, data) => {
        if (error) {
            console.log(error);
            return;
        }

        const content = data.toString();
        const lines = content.split('\n').length;
        console.log(lines);
    });

    
} catch (error) {
    console.log(error);
}