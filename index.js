var express = require('express');
var app = express();
var multiply = require('./app/service/multiply');
var http = require('http').Server(app);
var io = require('socket.io')(http);

var port = process.env.PORT || 1300;
app.set('port', port);
app.use(express.static(__dirname + '/public'));

app.get('/ping', function(req, res) {
  res.send('pong');
});

app.get('/:x/x/:y', function(req, res){
  res.json({ input: req.params, result: multiply(req.params.x, req.params.y)});
});

app.get('/', function(req, res) {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket) {
  console.log('new user connected');
  socket.on('disconnect', function() {
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg) {
    console.log('message: '+ msg);
    io.emit('chat message', msg);
  });
});

http.listen(app.get('port'), function(){
  console.log('server listening');
});
