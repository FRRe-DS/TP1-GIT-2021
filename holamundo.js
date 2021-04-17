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

const prompt = require('prompt-sync')({sigint: true});
const num = prompt('Enter a number: ');
console.log('Your number + 4 =');
console.log(num + 4); //ERROR
)

readline.question('Cuanto calzas?? ', calce =>{
    console.log(Bue ${calce} que paton);
    readline.close();
}
);