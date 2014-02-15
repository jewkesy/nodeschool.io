var through = require('through');
var tr = through(write);

//tr.pipe(process.stdout);

function write (buf) { this.queue(buf.toString().toUpperCase()) }

process.stdin.pipe(tr).pipe(process.stdout)