var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');



test('testing welcome tour content route', function (t) {
  server.inject({method: 'GET', url: '/stepOne/1'}, function (response) {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

test('no param gives same as "tour/0"', function (t) {
  server.inject({method: 'GET', url: '/stepOne'}, function (response) {
    server.inject({method: 'GET', url:'/stepOne/0'}, function (secondResponse){
      t.deepEqual(response.result, secondResponse.result);
      t.end();
    });
  });
});

function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
