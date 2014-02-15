var fs = require('fs');

var theFilename = process.argv[2];
//console.log(theFilename);
var theFile = fs.readFileSync(theFilename.toString()).toString();

//console.log(theFile.toString());

var lines = theFile.split('\n').length-1;
console.log(lines);
