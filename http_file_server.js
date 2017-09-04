const http = require('http');
const fs = require('fs');


let server = http.createServer(function(req, res) {
	res.writeHead(200, { 'content-type': 'text/plain' });
	let src = fs.createReadStream(process.argv[3]);
	src.pipe(res);
});

server.listen(process.argv[2]);