var filterFn = require('./modular_module');

var fileLocation = process.argv[2];
var fileFilter = process.argv[3];

filterFn (fileLocation, fileFilter, function (err, data) {
	if (err) { return console.error('There was an error:', err) }
    
    data.forEach(function (file) {
	    console.log(file);
	});
})