var events = require('events').EventEmitter;

var ee = new events();

ee.on('event', function() {
  console.log('an event occured');
});

ee.emit('event');
