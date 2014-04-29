function getShortMessages(messages) {

	var result = []

	messages.filter(function (x) {
		if (x.message.length < 50) {
			result.push(x.message)
		}
	});

	return result
}

module.exports = getShortMessages