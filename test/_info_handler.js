var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');

test('The static handler return the terms page as expected', function (t) {
  server.inject({method:'GET', url:'/info/terms.html'},function (response) {
    var page = fs.readFileSync(__dirname + '/../public/html/terms.html', 'utf-8');
    t.equal(isInBody(response.result, page), true);
    t.end();
  });  
});

function isInBody (x, y) {
  return x.indexOf(y) !== -1;
}
