var bl = require('bl');
var http = require('http');
var url = process.argv[2];

http.get(url, function(res) {
	res.setEncoding('utf8');
	res.pipe(bl(function (err, data) {
		var result = data.toString();
		console.log(result.length);
		console.log(result);
	}));

});
