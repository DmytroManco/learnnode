const http = require('http');
const url = require('url');
const port = process.argv[2];

let server = http.createServer(function (req, res) {

	if(req.method !== 'GET') {
		return res.end('error!')
	}

	res.writeHead(200, { 'Content-Type': 'application/json' });

	let requestUrl = url.parse(req.url, true);


	if (requestUrl.pathname === '/api/parsetime') {
		let date = new Date(requestUrl.query['iso']);

		res.end(JSON.stringify({
			hour: date.getHours(),
			minute: date.getMinutes(),
			second: date.getSeconds()
		}));
	} else if (requestUrl.pathname === '/api/unixtime') {
		res.end(JSON.stringify({unixtime: new Date(requestUrl.query['iso']).getTime()}));
	}
});

server.listen(port);