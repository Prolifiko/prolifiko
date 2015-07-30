var test = require('tape');
var server = require('../api/server.js');
var mongo = require('../api/handlers/mongo_content');
var fs = require('fs');



test('testing welcome tour content route', function (t) {
  server.inject({method: 'GET', url: '/tour/1'}, function (response) {
    t.equal(response.statusCode, 200);

    var contentBody = response.result;
    mongo.findContent('tour', function(err, data){
      t.equal(isInBody(contentBody, data.content[1].text[0]), true);
      t.end();
    });

    function isInBody (x, y) {
    	return x.indexOf(y) !== -1;
    }
  });
});

test('no param gives same as "tour/0"', function (t) {
  server.inject({method: 'GET', url: '/tour'}, function (response) {
    server.inject({method: 'GET', url:'/tour/0'}, function (secondResponse){
      t.deepEqual(response.result, secondResponse.result);
      t.end();
    });
  });
});
