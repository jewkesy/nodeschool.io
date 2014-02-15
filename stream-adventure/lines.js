var split = require('split');
var through = require('through');
var i =0;
var tr = through(write);
function write (buf) { 
	if (i % 2 === 0) {
		this.queue(buf.toString().toLowerCase() + '\n')
	} else {
		this.queue(buf.toString().toUpperCase() + '\n')
	}
	i ++;
};

process.stdin.pipe(split()).pipe(tr).pipe(process.stdout)
