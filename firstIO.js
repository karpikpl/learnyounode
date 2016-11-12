/*jshint esversion: 6, node: true*/
const fs = require('fs');

const fileTxt = fs.readFileSync(process.argv[2], 'utf8');

console.log(fileTxt.split('\n').length - 1);
