var concat = require('concat-stream');


function reverse(s){
    return s.split("").reverse().join("");
}



process.stdin.pipe(concat(function (input) {
    console.log(reverse(input.toString()))
}))