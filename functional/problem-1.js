//1. applyf(add)(2)(5)

function applyf (func) {	
	return function (x) {
		return function (y) {
			return func(x, y);
		};
	};
}

function add (x, y) {
	return x + y;
}

function addf (x) {
	return function (y) {
		return x + y;
	};
}

console.log(applyf(add)(2)(5));

//2. curry(add, 3)(4)

function curry (func, first) {
	return	function (second) {
		return func(first, second);
	}
}

console.log(curry(add, 8)(10));

//3. Three ways for INC func (add one to another value)

// var inc = applyf(add)(1);
//var inc = curry(add, 1);
var inc = addf(1);

console.log(inc(5));
console.log(inc(inc(5)));

//4. Methodize - attach to number

function methodize (func) {
	return function (y) {
		return func(this, y);
	};
}

Number.prototype.add = methodize(add);
console.log((3).add(77));

//5. demethodize - return to a normal function

function demethodize (func) {
	return function (that, y) {
		return func.call(that, y);
	};
}

console.log(demethodize(Number.prototype.add)(9, 2));