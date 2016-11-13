/*jshint esversion: 6, node: true*/
const http = require('http');
const fs = require('fs');

const file = process.argv[3];

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        'content-type': 'text/plain'
    });

    fs.createReadStream(file).pipe(res);
});

server.listen(process.argv[2]);
