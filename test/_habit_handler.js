var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');


test('habit page has a star on it', function(t) {
	server.inject({method: 'GET', url: '/stepHabit'}, function(response) {
    t.equal(response.statusCode, 200);
    t.equal(isInBody(response.result, "habitStar"), true);
    t.end();
  });
});


function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
