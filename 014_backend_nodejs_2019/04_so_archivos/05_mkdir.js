const fs = require('fs');

fs.mkdir(__dirname + '/new_folder/recursive', { recursive: true }, (error) => {
    if (error) {
        console.error(error);
    }
});
