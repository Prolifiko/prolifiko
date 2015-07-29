var Hapi = require('hapi');
var server = new Hapi.Server();
var routes = require('./routes.js');
require('dotenv').load();

server.connection({
  host: '0.0.0.0',
  port: Number(process.env.PORT) || 8000
});

server.views({
    engines: {
        html: require('handlebars')
    },
    path: __dirname + '/../views',
    layoutPath: __dirname + '/../views/layout',
    layout: true,
    partialsPath: __dirname + '/../views/partial'
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

server.route(routes);

module.exports = server;
