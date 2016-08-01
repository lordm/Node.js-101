var util = require('util');

console.log(util.format('%s:%s', 'foo', 'bar', 'baz')); // 'foo:bar baz'
console.log(util.format('{%j:%j}', 'name', 'pup'));
console.log(util.format('%d', 1, 2, 3, "4"));
util.debug('message on stderr');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
util.print(util.isArray({}));
util.log(util.isDate(new Date()));

