const fs = require('fs');
let path = process.argv[2];
let extension = '.' + process.argv[3];

fs.readdir(path, (err, data) => {
	data.filter(function (element, index) {
		//return console.log(element.search(/\.js/) !== -1);

		if(element.search(extension) !== -1) {
			console.log(element);
		}
	});
});

