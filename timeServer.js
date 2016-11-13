/*jshint esversion: 6, node: true*/
const net = require('net');

const server = net.createServer(socket => {
  socket.end(now() + '\n');
});

server.listen(process.argv[2]);

function now() {
  // format to return "YYYY-MM-DD hh:mm"
  const date = new Date();
  const YYYY = date.getFullYear();
  const MM = zeroFill(date.getMonth() + 1);
  const DD = zeroFill(date.getDate());
  const hh = zeroFill(date.getHours());
  const mm = zeroFill(date.getMinutes());

  return `${YYYY}-${MM}-${DD} ${hh}:${mm}`;
}

function zeroFill(number) {
  return (number < 10 ? '0' : '') + number;
}
