var fs = require('fs');
var path = require('path');

var theDir = process.argv[2];
var theExt = process.argv[3];

fs.readdir(theDir, function(err, data) {
	if (err) throw err;

	data.forEach(function (file) {
	  if (path.extname(file) === '.' + theExt)
	    console.log(file);
	});
});
