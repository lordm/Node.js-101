var express = require('express');
var app = express();

var port = process.env.PORT || 1300;
app.set('port', port);

app.get('/ping', function(req, res) {
  res.send('pong');
});

var server = app.listen(app.get('port'));

