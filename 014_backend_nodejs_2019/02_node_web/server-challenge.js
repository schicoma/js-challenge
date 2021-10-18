const http = require("http");
const server = http.createServer();

const days = ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sábado"];

server.on("request", (request, response) => {
    if (request.method === "POST" && request.url === "/challenge") {
        let birthday = null;

        request
            .on("data", (chunk) => {
                birthday = chunk.toString();
            })
            .on("end", () => {
                birthdayDate = new Date(birthday);

                response.writeHead(200, { "Content-Type": "text/plain" });
                response.end(days[birthdayDate.getDay()]);
            });
    } else {
        response.statusCode = 404;
        response.end();
    }
}).listen(8988);

console.log("Iniciando servidor en la url http://localhost:8988");
