var obj = {
	name : 'val-a',
	dob : 'val-b',
	c : 'val-c',
	d : 'val-d',
	child : [{
		name: 'Jelena',
		dob: 'val-fb',
		child: [{
			name: 'Toby',
			dob: 'test'
		},
		{
			name: 'Cindy',
			dob: 'test'
		}]
	},
	{
		name: 'Kat',
		dob: 'val-fb',
		child: [{
			name: 'Olu',
			dob: 'test'
		}]
	}],
};

function type(obj) {
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[  1]
}

var output = [];

function reader(obj){

	if(type(obj) === 'String'){
		//console.log(obj)
		return obj;
	}

	if(type(obj) === 'Object'){
		var keys = Object.keys(obj);
		var readerOut = {};
		keys.forEach(function(key){
			if(key === 'name'){
				readerOut['fullname'] = reader(obj[key]);
			}
			if(key === 'child'){
				readerOut['children'] = obj[key].map(function(o){
					console.log(o);
					return reader(o);
				});
			}
		});

		return readerOut;
	}
}

// function readerx(obj, i){
// 	var keys = Object.keys(obj);
// 	if(i in keys){
// 		output.push(obj[keys[i]]);
// 		reader(obj, i + 1);
// 	}else{
// 		return;
// 	}
// }

var t = reader(obj);
console.log(t);