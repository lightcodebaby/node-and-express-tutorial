'use strict';

const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req);
    if (req.url === '/') {
        res.end('Welcome to our server');
    }
    if (req.url === '/about') {
        res.end('Welcome to our about page');
    }
    res.end(`
		<h1>Oops!</h1>
		<p>Page doesn't exists</p>
		<a href="/">back home</a>
	`);
});

server.listen(5000);
