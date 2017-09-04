const net = require('net');
let strDate = "";

let server = net.createServer(function(socket) {
	const date = new Date();

	strDate += date.getFullYear() + '-';
	strDate += ('0' + (date.getMonth()+1)).slice(-2) + '-';
	strDate += ('0' + date.getDate()).slice(-2) + ' ';
	strDate += ('0' + date.getHours()).slice(-2) + ':';
	strDate += ('0' + date.getMinutes()).slice(-2);

	socket.write(strDate + '\n');
	socket.end();
});

server.listen(Number(process.argv[2]));