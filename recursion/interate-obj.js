var test = {
  name: 'John',
  age: 21,
  scores: [89, 72, 96, 55, 66],
  friend: {
    name: 'Rich',
    scores: [99, 73, 69],
    friend: {
      name: 'Peter',
      scores: [59, 77, 90, {
        name: 'Timon'
      }]
    }
  }
}

function type(obj) {
  return Object.prototype.toString.call(obj).match(/.* (.*)\]/)[  1]
}

function stringify(obj) {
  if (type(obj) === 'Function') {
    return null;
  }
  if (type(obj) === 'Undefined') {
    return null;
  }
  if (type(obj) === 'Null') {
    return 'null';
  }
  if (type(obj) === 'Number') {
    return obj;
  }
  if (type(obj) === 'String') {
    return '"' + obj + '"';
  }
  if (type(obj) === 'Array') {
    return '[' +
      obj.map(function(o) {
        return stringify(o)
      }).join(',')
      + ']';
  }
  if (type(obj) === 'Object') {
    var result = []
    Object.keys(obj).forEach(function(key) {
      var val = stringify(obj[key])
      if (val !== null) {
        result.push('"' + key + '": ' + val);
      }
    })
    return '{' + result.join(',') + '}';
  }
}

console.log(stringify(test));