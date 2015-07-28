var server = require('./api/server.js');

server.start(function () {
  console.log(server.info.uri);
});

module.exports = server;
