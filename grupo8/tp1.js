var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});

   // Send the response body as "Hello World"
   response.end('Hello soy manu\n');
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');

const rl = readline.createInterface({
   input: process.stdin,
   output: process.stdout
 });

 rl.question('What do you think of Node.js? ', (answer) => {
   // TODO: Log the answer in a database
   console.log(`Thank you for your valuable feedback: ${answer}`);

   rl.close();
 });
