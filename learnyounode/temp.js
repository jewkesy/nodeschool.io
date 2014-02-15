var fs = require('fs');

var theFilename = process.argv[2];
fs.readFile(theFilename.toString(), 'utf8' , callme);




function callme(err, data) {
	var lines = data.split('\n').length-1;
	console.log(lines);
}
