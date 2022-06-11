var http = require('http');
var path = require('path');
var qs = require('querystring');
var fs = require('fs');
var url = require('url');

var server = http.createServer(handleRequest);

function handleRequest(req, res) {
  const userDir = path.join(__dirname, 'users/');
  var store = `{
    "name": "user1",
    "email": "user1@gmail.com",
    "username": "user_01",
    "bio": "user",
  }`;
  if (req.method === 'POST' && req.url === '/users') {
    console.log(JSON.parse(store));
    // fs.open(userDir + username + '.json', 'wx', (err, fd) => {
    //   fs.writeFile(fd, store, (err) => {
    //     fs.close(fd, (err) => {
    //       res.end(`${username} successfully created`);
    //     });
    //   });
    // });
  }
}

server.listen(5555, () => {
  console.log('server is listening on port 5555');
});
