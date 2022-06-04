var http = require('http');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  var store = '';
  req.on('data', (chunk) => {
    store += chunk;
  });
  req.on('end', () => {
    console.log(store);
  });
  res.write(store, () => {
    console.log('writing store data...');
  });
  res.end();
}

server.listen(3456, () => {
  console.log('server is listening on port 3456');
});
