var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');


test('Tips last page has a star', function(t) {
	server.inject({method: 'GET', url: '/stepTips/5'}, function(response) {
    t.equal(response.statusCode, 200); 
    t.equal(isInBody(response.result, "starButton"), true);
    t.end();
  });
});

test('Tips second last page does not have  a star', function(t) {
	server.inject({method: 'GET', url: '/stepTips/4'}, function(response) {
    t.equal(response.statusCode, 200); 
    t.equal(isInBody(response.result, "starButton"), false);
    t.end();
  });
});


test('If no stage will return stage 1', function(t) {
	server.inject({method: 'GET', url: '/stepTips/'}, function(response) {
      server.inject({method: 'GET', url: '/stepTips/0'}, function(response2) {
        t.equal(response.result, response2.result); 
        t.end();
      }); 
  });
});


function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
