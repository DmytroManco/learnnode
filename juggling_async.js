const http = require('http');
const urls = process.argv.slice(2);

const results = [];
let count = 0;

urls.forEach(function (url, i) {
	http.get(url, function (res) {
		let str = '';
		res.setEncoding('utf8');

		res.on('data', function (data) {
			str += data;
		});

		res.on('end', function () {
			++count;
			results[i] = str;
			if (count === urls.length) {
				urls.forEach(function (url, i) {
					console.log(results[i]);
				});
			}
		});
	}).on('error', function (err) {
		console.error(err);
	});
});