require("dotenv").config();
const port = process.env.PORT;
const {imprimirEntrada} = require("./utils/imprimirEntrada");



http.createServer(function (request, response) {
   
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   imprimirEntrada(); 
}).listen();


console.log (`Server running at http://127.0.0.1:${port}/`);