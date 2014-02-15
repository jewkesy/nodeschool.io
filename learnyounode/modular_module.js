var fs = require('fs');
var path = require('path');

filterFiles = function (fileLocation, fileFilter, callback) {

	fs.readdir(fileLocation, function (err, list) {
	    if (err){ return callback (err); }
	    
	    list = list.filter(function (file) {
            return path.extname(file) === '.' + fileFilter
        })

		callback(null, list) // called only once, after we've constructed the array
	})
}; 
module.exports = filterFiles;