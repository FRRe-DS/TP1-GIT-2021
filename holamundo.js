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

// Codigo modificado------------------------------------------------
var numero = Array(4);
var suma;
 
for (i = 0; i < numero.length; i++){
    numero[i] = prompt("Ingrese un numero que termine en cero");
 
    suma=numero; //Aquí debería estar la suma de los números ingresados por el usuario
}
 
document.write(suma);

// Codigo modificado------------------------------------------------

readline.question('Cuanto calzas?? ', calce =>{
    console.log(Bue ${calce} que paton);
    readline.close();
}
)