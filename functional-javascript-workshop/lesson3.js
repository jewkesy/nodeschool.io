function doubleAll(numbers) {

  	var result = []

	numbers.map(function (x) {
		result.push(x * 2)
	});
 	return result
}

module.exports = doubleAll