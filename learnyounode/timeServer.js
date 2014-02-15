var net = require('net');


function padZeros(val) {
	return String("00" + val).slice(-2);
}

function printDate() {
	//YYYY-MM-DD hh:mm
	var d = new Date();

	var result = d.getFullYear() + '-' + padZeros(d.getMonth() + 1) + '-' + padZeros(d.getDate()) + ' ' + padZeros(d.getHours()) + ':' + padZeros(d.getMinutes());

	return result;
}

var server = net.createServer(function (socket) {
	socket.end(printDate() + '\n');
}).listen(process.argv[2]);