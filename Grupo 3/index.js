var http = require("http");

const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
<<<<<<< HEAD:grupo10/index.js
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


function multiplicar(a, b){
    console.log("a+b")
    return a+b
}
=======
})
>>>>>>> 1e502e7173071aab7584867f4632ed001391dfb3:Grupo 3/index.js
