var http = require("http")

http.createServer(function (request, response) {

    response.writeHead(200, {'Content-Type': 'text/plain'});
    response.write(`

    __¶¶¶¶¶¶__¶¶¶¶¶¶¶¶___¶¶¶¶¶¶¶¶¶__¶¶¶¶¶¶¶¶_¶¶¶¶¶¶¶¶_
    ___¶¶¶¶¶___¶¶¶¶¶¶__¶¶¶¶¶¶_¶¶¶¶¶__¶¶¶¶¶¶¶__¶¶¶¶¶¶¶_
    _____¶¶¶____¶¶¶___¶¶¶¶_______¶¶¶__¶¶¶_______¶¶¶___
    ______¶¶¶__¶¶¶____¶¶¶_________¶¶¶_¶¶¶_______¶¶¶___
    _______¶¶¶¶¶¶____¶¶¶__________¶¶¶_¶¶¶_______¶¶¶___
    ________¶¶¶¶_____¶¶¶__________¶¶¶_¶¶¶_______¶¶¶___
    ________¶¶¶______¶¶¶¶_________¶¶¶_¶¶¶_______¶¶¶___
    ________¶¶¶_______¶¶¶________¶¶¶¶_¶¶¶_______¶¶¶___
    ________¶¶¶________¶¶¶¶____¶¶¶¶¶___¶¶¶_____¶¶¶____
    ____¶¶¶¶¶¶¶¶¶¶¶_____¶¶¶¶¶¶¶¶¶¶______¶¶¶¶¶¶¶¶¶_____
    _____¶¶¶¶¶¶¶¶¶________¶¶¶¶¶¶__________¶¶¶¶¶_______

    `)

    response.end();
}).listen(8081);

console.log('Server running at http://127.0.0.1:8081/');

