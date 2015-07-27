var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./api/routes.js');

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 8000
});

server.route(routes);

server.start(function () {
  console.log(server.info.uri);
});

module.exports = server;
