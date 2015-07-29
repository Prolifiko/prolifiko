var user = require('../api/handlers/user_info_handlers');
var test = require('tape');
var server = require('../api/server');

server.ext('onPreAuth', function (request, reply) {
  request.state.sid = {id: 23};
  reply.continue();
});

test('getting user 23 should return the info for the user', function (t) {
  server.inject({method: 'GET', url: '/getMe'}, function (response) {
    t.equals(response.statusCode, 200);
    var payload = JSON.parse(response.payload);
    t.equals(!!payload.steps, true);
    t.equals(!!payload.timestamps, true);
    t.end();
  });
});
