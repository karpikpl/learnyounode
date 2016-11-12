/*jshint esversion: 6, node: true*/
const bl = require('bl');
const http = require('http');

const url = process.argv[2];

http.get(url, response => {

  response.pipe(bl((err, data) => {
    if(err) {
      return console.error(err);
    }

    const dataString = data.toString();

    console.log(dataString.length);
    console.log(dataString);
  }));
});
