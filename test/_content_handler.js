var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');//

test('testing welcome tour content route', function (t) {
  server.inject({method: 'GET', url: '/step1/1'}, function (response) {
    t.equal(response.statusCode, 200);
    t.end();
  });
});

test('no param gives same as "step1/0"', function (t) {
  server.inject({method: 'GET', url: '/step1'}, function (response) {
    server.inject({method: 'GET', url:'/step1/0'}, function (secondResponse){
      t.deepEqual(response.result, secondResponse.result);
      t.end();
    });
  });
});

test('penultimate page of step1 gives a star', function (t) {
  server.inject({method: 'GET', url: '/step1/4'}, function (response) {
    t.equal(isInBody(response.result, 'starButton'), true);
    t.end();
  });
});

test('ultimate page of step1 button to My progress (instead of continue)', function (t) {
  server.inject({method: 'GET', url: '/step1/5'}, function (response) {
    t.equal(isInBody(response.result, 'My Progress'), true);
    t.end();
  });
});

function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
