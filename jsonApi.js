/*jshint esversion: 6, node: true*/
const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {
    const requestUrl = url.parse(req.url, true);
    let result;

    if (!requestUrl.query.iso) {
        res.writeHeader(400, {
            'content-type': 'text/plain'
        });
        return res.end('Missing parameter "iso"');
    }

    const iso = new Date(requestUrl.query.iso);

    if (requestUrl.pathname === '/api/parsetime') {
        result = parsetime(iso);
    }

    if (requestUrl.pathname === '/api/unixtime') {
        result = unixtime(iso);
    }

    if (result) {
        res.writeHeader(200, {
            'content-type': 'application/json'
        });
        return res.end(JSON.stringify(result));
    } else {
        res.writeHeader(404, {
            'content-type': 'text/plain'
        });
        return res.end('Not supported path');
    }
});

server.listen(process.argv[2]);

function parsetime(time) {
    return {
        hour: time.getHours(),
        minute: time.getMinutes(),
        second: time.getSeconds()
    };
}

function unixtime(time) {
    return {
        unixtime: time.getTime()
    };
}
