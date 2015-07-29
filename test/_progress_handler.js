var test = require('tape');
var server = require('../api/server.js');
var fs = require('fs');



test('testing progress route', function (t) {
  server.inject({method: 'GET', url: '/progress'}, function (response) {
    t.equal(response.statusCode, 200);
    var page = fs.readFileSync(__dirname + '/../public/html/progress.html', 'utf-8');
    t.equal(response.result, page);
    server.stop();
    t.end();
  });
});