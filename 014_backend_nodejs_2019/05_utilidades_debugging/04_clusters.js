const cluster = require('cluster');
const http = require('http');
const os = require('os');

// Requerimos la cantidad de CPU's del equipo
const numCPUs = os.cpus().length;

if (cluster.isMaster) {
    for (let i = 0; i< numCPUs; i++) {
         // Si el cluster es maestro, creamos tantos procesos como numero de CPUS
        cluster.fork();
    }

    cluster.on('exit', (worker, code, signal) => {
        console.log(`Worker ${worker.process.id} died`);
    });
} else {
    http.createServer((request, response) => {
        response.writeHead(200);
        response.end('Hello world\n');
    }).listen(8013);

    console.log(`Worker ${process.pid} started`);
}
