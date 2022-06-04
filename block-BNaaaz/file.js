var http = require('http');
var fs = require('fs');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var readStream = fs.createReadStream('./readme.txt');
  readStream.on('open', function () {
    readStream.pipe(res);
  });
}

server.listen(3000, () => {
  console.log('server is listening on port 3000');
});
