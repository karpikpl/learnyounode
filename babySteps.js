/*jshint esversion: 6, node: true*/
const sum = process.argv.slice(2)
    .map(n => {return Number(n);})
    .reduce((a, b) => a + b, 0);
console.log(sum);
