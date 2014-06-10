// reject_a_promise

var q = require('q');
var defer = q.defer(); 
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here 

function showErr(err) {
	console.log(err)
}

defer.promise.then(null, showErr);
setTimeout(defer.reject, 300, "REJECTED!");