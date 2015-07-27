var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./api/routes.js');
require('dotenv').load();

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 8000
});

server.route(routes);

server.register(require('bell'), function (err) {

    // Declare an authentication strategy using the bell scheme
    // with the name of the provider, cookie encryption password,
    // and the OAuth client credentials.
    server.auth.strategy('google', 'bell', {
        provider: 'google',
        password: 'cookie_encryption_password',
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET
    });

    server.route({
        method: ['GET', 'POST'],
        path: '/login',
        config: {
            auth: 'google',
            handler: function (request, reply) {
                console.log(request, reply);
                return reply.redirect('/');
            }
        }
    });

});

server.start(function () {
  console.log(server.info.uri);
});

module.exports = server;
