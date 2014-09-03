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

function mul (x, y) {
	return x * y;
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

//6. call binary function to return unary function

function twice(binary){
	return function (a) {
		return binary(a, a);
	};
}

var double = twice(add);
console.log(double(11));

var square = twice(mul);
console.log(square(12));

//7. composeu func takes two unary functions and returns a unary function that calls them both

function composeu (funcA, funcB) {
	return function (x) {
		return funcB(funcA(x));
	}
}

console.log(composeu(double, square)(3));

//8. composeb takes two binary functions and returns a function that calls them both

function composeb (funcA, funcB) {
	return function (x, y, z) {
		return funcB(funcA(x, y), z);
	};
}

console.log(composeb(add, mul)(2, 3, 5));

//9. create a function that allows another function to only be called once

function once (func) {
	return function () {
		var f = func;
		func = null;
		return f.apply(
				this,
				arguments
			);
	};
}

var add_once = once(add);
console.log(add_once(3, 4));
//add_once(2, 2);//should throw exception

//10. write a factory function that returns two functions that implement an up down counter

function counterf (x) {
	return {
		inc : function () {
			return x = x + 1;
		},
		dec : function () {
			return x = x - 1;
		}
	};
}

var counter = counterf(10);
console.log(counter.inc());
console.log(counter.dec());

//11. revocable function revoke and invoke

function revocable (func) {
	return {
		revoke : function () {
			func = null;
		},
		invoke : function () {
			func.apply(this, arguments);
		}
	};
}

function alert (a) {
	console.log('Alert: ' + a);
}
var temp = revocable(alert);
temp.invoke(7);
temp.revoke();
temp.invoke(8); //fail