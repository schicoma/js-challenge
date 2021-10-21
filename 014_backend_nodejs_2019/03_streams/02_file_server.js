const http = require('http');
const fs = require('fs');

const server = http.createServer();

server.on('request', (request, response) => {
    fs.readFile('./big', (error, data) => {
        if (error) {
            console.error(error);
            return;
        }

        response.end(data);
    });
});

server.listen(3013);