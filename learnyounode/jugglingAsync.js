var http = require('http')
var bl = require('bl')

var results = [];
var counter = 0;

function getUrl (index) {
	http.get(process.argv[2 + index], function (response) {
		response.pipe(bl(function (err, data) {
			if (err) return console.error(data)
	        results[index] = data.toString();
	      	counter++;
	      	if (counter == 3) {
	      		console.log(results[0]);
	      		console.log(results[1]);
	      		console.log(results[2]);
	      	}
	    }))  
	});
}



for (var i = 0; i < 3; i++ ) {
	getUrl(i)
}