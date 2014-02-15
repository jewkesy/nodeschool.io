var inputs = process.argv.slice(2);

var output = 0;
for (var i = 0; i < inputs.length; i++) {
   output += +inputs[i];
}

console.log(output);