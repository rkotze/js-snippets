
function rangeGen (year, numItems, callback) {
	var startYear = Number(year);
	for (var i = 0; i < numItems; i++) {
		callback(i);
	};
}

var matches = [];
rangeGen(1830, 3, function (i) {
	matches.push({value: year + '-' + (1830 + (3 * i))});
});

console.log(matches);