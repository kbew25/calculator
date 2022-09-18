// A bare-bones web app implementation with NodeJS
const util = require('util');
const http = require('http');
const fs = require('fs');

// Create a server object
http.createServer(function (req, res) {
  fs.readFile('./docroot/index.html', function (err, data) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(data);
    return res.end();
  });
}).listen(1234); // The server object listens on port 3000
