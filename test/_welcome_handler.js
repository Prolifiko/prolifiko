var test = require('tape');
var cheerio = require('cheerio');
var server = require('../api/server.js');
var shot = require('shot');
var google = require('../api/handlers/google_handlers.js');


server.ext('onPreAuth', function (request, reply) {
  request.auth.session.set({id:23});
  reply.continue();
});

test('testing welcome route', function (t) {
  server.inject({method: 'GET', url: '/welcome'}, function (response) {
    t.equal(response.statusCode, 200);
    var $ = cheerio.load(response.result);
    t.equal($('h1')[0].children[0].data, 'Welcome to Prolifiko');
    server.stop();
    t.end();
  });
});
