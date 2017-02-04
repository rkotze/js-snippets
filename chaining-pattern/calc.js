var Calc = function (start) {
	var self = this,
	value = start;

	this.add = function (x) {
		value = value + x;

		return self;
	};

	this.multiply = function (x) {
		value = value * x;

		return self;
	};

	this.equals = function (callback) {
		callback(value);

		return self;
	};
}

new Calc(0)
	.add(1)
	.add(2)
	.multiply(3)
	.equals(function (result) {
		console.log(result);
	});