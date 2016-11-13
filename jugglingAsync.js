/*jshint esversion: 6, node: true*/
const async = require('async');
const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);

async.map(urls, (url, callback) => {

  http.get(url, response => {

    response.pipe(bl((err, data) => {

    if(err) {
      return callback(err);
    }

    return callback(null, data.toString());
    }));
  }).on('error', console.error);
}, displayResults);

function displayResults(err, results) {
  if(err) {
    return console.error(err);
  }

  results.forEach(r => console.log(r));
}
