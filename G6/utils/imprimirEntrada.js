
const imprimirEntrada = () => {
    const readline = require('readline').createInterface({
        input: process.stdin,
        output: process.stdout
      });

   readline.question('Esta es una buena entrada: ', prueba => {
        console.log(`Resultado: ${prueba}`); 
        readline.close(); 
   }); 
}

module.exports = {imprimirEntrada}; 
