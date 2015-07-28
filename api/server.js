var Hapi = require('hapi');
var Cookie= require('hapi-auth-cookie');
var server = new Hapi.Server();
var routes = require('./routes.js');
require('dotenv').load();

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 8000
});

server.register(require('bell'), function (err) {

    server.auth.strategy('google', 'bell', {
        provider: 'google',
        password: 'cookie_encryption_password',
        clientId: process.env.GOOGLE_ID,
        clientSecret: process.env.GOOGLE_SECRET,
        isSecure: false
    });

});


server.register(Cookie, function (err) {

    server.auth.strategy('session', 'cookie', {
        password: 'secret',
        cookie: 'sid',
        redirectTo: '/login',
        isSecure: false
    });
});

//server.auth.default('session');



server.route(routes);

module.exports = server;
