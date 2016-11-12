/*jshint esversion: 6, node: true*/
const fs = require('fs');
const path = require('path');

function filterDirectory(dirName, extension, callback) {
  fs.readdir(dirName, (err, list) => {
    if(err) {
      return callback(err);
    }

    const fullExtension = "." + extension;
    const data = list.filter(f => path.extname(f) === fullExtension);
    callback(null, data);
  });
}

module.exports = filterDirectory;
