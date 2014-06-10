// to_reject_or_not_to_reject

var q = require('q');
var defer = q.defer(); 
//defer.promise is the actual promise itself
//defer.promise.then is the "Q" way of attaching a then handler
//your solution here 

function showErr(err) {
	console.log(err)
}

defer.promise.then(console.log, console.log);
defer.resolve("I FIRED");
defer.reject("I DID NOT FIRE");