const fs = require('fs');

try {
    // console.log(process.argv) -- array de argumentos ['node', '02_sync_files.js', './naranja-dulce.txt']
    const file = process.argv[2]; 
    
    const content = fs.readFileSync(file).toString();

    const lines = content.split('\n').length;
    console.log(lines);
    
} catch (error) {
    console.log(error);
}