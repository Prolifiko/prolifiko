var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');


server.ext('onPreAuth', function (request, reply) {
  request.state.sid = {id: 23};
  reply.continue();
});

test('testing calendar route', function (t) {
  server.inject({method: 'GET', url: '/calendar'}, function (response) {
    t.equal(response.statusCode, 200);
    t.equal(isInBody(response.body, ['M', 'T', 'W', 'Th', 'F', 'Sa', 'Su']), true);
    t.end();
  });
});


function isInBody (x, y) {
  if (typeof y === 'object') { return y.every(function(e){ return y.indexOf(e) !== -1; }); }
  return y.indexOf(x) !== -1;
}
