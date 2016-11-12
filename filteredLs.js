/*jshint esversion: 6, node: true*/
const fs = require('fs');
const path = require('path');

fs.readdir(process.argv[2], (err, list) => {
  if(err) {
    return console.error(err);
  }

  const ext = '.' + process.argv[3];

  list
  .filter(f => path.extname(f) === ext)
  .forEach(f => console.log(f));
});
