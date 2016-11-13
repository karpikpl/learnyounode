/*jshint esversion: 6, node: true*/
const http = require('http');
const map = require('through2-map');

const server = http.createServer((req, res) => {

  if(req.method !== 'POST') {
    res.writeHeader(400, {'content-type': 'text/plain'});
    return res.end('Only POSTs are supported!\n');
  }

    req.pipe(map(chunk => {
      return chunk.toString().toUpperCase();
    })).pipe(res);
});

server.listen(process.argv[2]);
