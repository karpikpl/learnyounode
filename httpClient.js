/*jshint esversion: 6, node: true*/
const http = require('http');

const url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');
  response.on('error',console.error);
  response.on('data', console.log);
}).on('error', console.error);
