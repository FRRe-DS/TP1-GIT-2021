// server.js
'use strict';
const http = require('http');
const server = http.createServer(function (req, res) {
    res.writeHead(200, {'content-type': 'text/plain'});
    res.end('Hola Mundo\n');
});
server.listen(8000);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

readline.question('Como te llamas? ', nombre =>{
    console.log(Hola ${nombre} que tengas buen dia);
    readline.close();
}
)