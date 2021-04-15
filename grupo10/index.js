const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

function add(x1,x2){
    return x1+x2;
}



function divide(x1,x2){
    if (x2==0) {
        console.log('No divisible por cero');
    } else {
        return x1/x2;
    }
}