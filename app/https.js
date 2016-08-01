var https = require('https');
var fs = require('fs');

var options = {
  key: fs.reafFileSync('./localhost.key');
  cert: fs.readFileSync('./localhost.cert');
}

https.createServer(options, function(req, res) {
  res.writeHead(200);
  res.end("hello world\n");
}).listen(8000);
