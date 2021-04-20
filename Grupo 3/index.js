//var http = require("http");

const express = require('express');
const app = express();
const port = 3000;



app.use(express.static(__dirname + '/public/'));

//app.get('/', (req, res) => {
//  res.send('Hello World!')
//})""

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)

})

function suma(x1,x2){
    return x1+x2;
}



function division(x1,x2){
    if (x2==0) {
        console.log('No divisible por cero');
    } else {
        return x1/x2;
    }
}
// funcion de daniel
function daniel(){
    const readline = require ('readline');

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('como te llamas', (answer) => {
        console.log('fulanito ${answer}');
    rl.close();

    });
}
// funcion de agustin
function multiplicar(a, b){
    console.log("a+b")
    return a+b
}

