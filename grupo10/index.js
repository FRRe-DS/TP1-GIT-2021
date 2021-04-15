const express = require('express')

const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('ingrese su nombre por favor ', (answer) => {
  // TODO: Log the answer in a database
  console.log(`hola, un gusto ${answer}`);

  rl.close();
});

