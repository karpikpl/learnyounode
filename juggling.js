/*jshint esversion: 6, node: true*/
const http = require('http');
const bl = require('bl');

const urls = process.argv.slice(2);
const responses = [];
var responseCount = 0;

urls.forEach((url, index) => {

  http.get(url, response => {

    response.pipe(bl( (err,data) => {

      if(err) {
        return console.error(err);
      }

      responses[index] = data.toString();
      responseCount++;

      if(responseCount == urls.length) {
        responses.forEach(r => console.log(r));
      }

    }));
  }).on('error', console.error);
});
