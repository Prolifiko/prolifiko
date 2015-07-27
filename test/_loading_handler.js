var test = require('tape');
var cheerio = require('cheerio');
var server = require('../app.js');

test("Testing server routes", function(t) {
  var options = {
    method: "GET",
    url: "/loading"
  };

  server.inject(options, function(response) {
    t.equal(response.statusCode, 200, "Loading page route works");

    var $ = cheerio.load(response.result);
    t.equal('Kickstart and continue your blogging habit', $('h1').text(), 'checking the content of the heading');

    server.stop();
    t.end();
  });
});
