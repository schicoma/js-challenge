const http = require("http");
const fs = require("fs");

const server = http.createServer();

server.on("request", (request, response) => {
    const src = fs.createReadStream("./big");
    src.pipe(response);
});

server.listen(3013);
