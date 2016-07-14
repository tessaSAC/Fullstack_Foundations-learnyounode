var fs = require("fs"),
	directory = process.argv[2],
	extension = process.argv[3];

fs.readdir(directory, "utf8", function(err, list) {
	var found = list.toString().match(/\w+\.md/g);
	console.log(found.join("\n"));
});

// why does typeof list print "String" but match doesn't seem
// to work without manual coercion it toString?