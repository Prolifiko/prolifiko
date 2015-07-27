var test = require('tape');
var server = require('../app.js');

test("Testing server routes", function(t) {
  var options = {
    method: "GET",
    url: "/"
  };

  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, "Home page route works");
    server.stop();
    t.end();
  });
});