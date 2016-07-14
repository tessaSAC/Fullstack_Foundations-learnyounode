var fs = require("fs");

var counted;

fs.readFile(process.argv[2], 'utf8', function(err, data) {
		if (err) throw err;
		console.log(data.match(/\n/g).length);
});