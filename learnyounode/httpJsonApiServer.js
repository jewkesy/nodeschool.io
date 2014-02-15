var http = require('http');
var url = require('url');


function parseTime(time) {
	return { hour : time.getHours(), minute : time.getMinutes(), second : time.getSeconds() };
}

function unixTime(time) {
	return { unixtime : time.getTime()};
}

var server = http.createServer(function (req, res) {
	res.writeHead(200, { 'Content-Type': 'application/json' })

	var qs = url.parse(req.url, true);
	var time = new Date(qs.query.iso);
	var result;
	if (qs.pathname == '/api/parsetime') {
		result = parseTime(time, res);
	}
	else if (qs.pathname == '/api/unixtime') {
		result = unixTime(time, res);
	}
	return res.end(JSON.stringify(result));
}).listen(process.argv[2]);