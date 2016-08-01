var util = require('util');
var vm = require('vm');

var sandbox = { hello: 'nobody' };
vm.runInNewContext('hello = "world";', sandbox);

util.log('Hello '+ sandbox.hello);
