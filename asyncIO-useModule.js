/*jshint esversion: 6, node: true*/
const filterFn = require('./asyncIO-module');

const dirName = process.argv[2];
const filterStr = process.argv[3];

filterFn(dirName, filterStr, (err, data) => {
  if(err) {
    return console.error(err);
  }

  data.forEach(f => console.log(f));
});
