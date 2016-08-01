var querystring = require('querystring');

var result = querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: ''});
var result2 = "\n" + querystring.parse('foo=bar&baz=qux&baz=quux&corge');

console.log(result);
console.log(result2);
