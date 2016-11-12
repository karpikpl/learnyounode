/*jshint esversion: 6, node: true*/
const http = require('http');

const url = process.argv[2];

http.get(url, response => {
  response.setEncoding('utf8');
  let allData = '';

  response.on('error', console.error);

  response.on('data', data => {
    allData += data;
  });

  response.on('end', _ => {
    console.log(allData.length);
    console.log(allData);
  });
}).on('error', console.error);
