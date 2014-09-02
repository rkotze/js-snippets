//basic functional programming

function forEach (list, callback) {
	for (var i = 0; i < list.length; i++) {
		callback(list[i]);
	};
}

function printItem (item) {
	console.log(item);
}

var list = ['dog', 'cat', 'mouse'];
forEach(list, printItem);

//map function

function map (func, list) {
	var result = [];
	forEach(list, function (item) {
		result.push(func(item));
	});
	return result;
}

var numbers = [1.12, 5.2,0.9];
forEach(map(Math.round, numbers), console.log);