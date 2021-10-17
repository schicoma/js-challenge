// http es un módulo que permite:
// - crear un servidor http
// - conectarnos via http a rutas específicas

// ver 'express' para más detalle

const http = require('http');

http.createServer(router).listen(5151);

function router(request, response) {
    console.log('New request !!!');
    console.log(request.url);

    switch(request.url) {
        case '/hola':
            let saludo = hola();
            response.write(saludo);
            response.end();
            break;
        default:
            response.write('Error 404');
            response.end();
    }

    // headers
    // response.writeHead(201, {
    //     'Content-Type': 'text/plain'
    // });

    // body
    // response.write('Hi, I already know how to use HTTP module in Node.js');
    // response.end();
}

function hola() {
    return 'Hi, how are you?';
}

console.log('Listening at port 3000');