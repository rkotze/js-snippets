function MONAD() {
	var prototype = Object.create(null);
	function unit(value) {
		var monad = Object.create(prototype);
		monad.bind = function (func, args) {
		  return func.apply(undefined, [value].concat(Array.prototype.slice.apply(args || [])));
		};
		return monad;
	};

	// unit.method = function(name, func){
	// 	prototype[name] = func;
	// 	return unit;
	// }

	unit.lift = function(name, func){
		prototype[name] = function(args){
			return unit(this.bind(func, Array.prototype.slice.apply(args || [])));
		};
		return unit;
	}
	return unit;
}

function out(msg, msgPart2){
	console.log(msg + ' ' + msgPart2);
}
 
var identity = MONAD();
var monad = identity('hello identity');
monad.bind(console.log);

var ajax = MONAD().lift('out', out);
var monad2 = ajax('hello ajax', 'message');
monad2.out();