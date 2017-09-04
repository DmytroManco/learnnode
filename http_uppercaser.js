const http = require('http');
const port = process.argv[2];

let server = http.createServer(function (request, response) {

	request.setEncoding('utf8');

	if (request.method === 'POST') {
		let data = '';

		request.on('data', function (chunk) {
			data += chunk;
		});

		request.on('end', function () {

			try {
				response.writeHead(200, {'Content-Type': 'text/html'});
				response.write(data.toUpperCase());
				response.end();
			} catch (er) {
				response.statusCode = 400;
				return response.end('error: ' + er.message);
			}

		});
	}

});

server.listen(port);