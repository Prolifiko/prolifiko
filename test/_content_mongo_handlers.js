var MongoClient = require('mongodb').MongoClient;
var mongo = require('../api/handlers/content_mongo_handlers.js');
var test = require('tape');
var server = require('../api/server');
require('dotenv').load();

var url = process.env.MONGOLAB_URI;

test('connection to database working', function (t) {
  MongoClient.connect(url, function (err, db) {
    t.equal(null, err);
    db.close();
    t.end();
  });
});

server.ext('onPreHandler', function (request, reply) {
  request.payload = { screen: 'test', content: 'string' };
  console.log(request.payload);
  reply.continue();
});



test('Testing that content can be added to DB', function (t) {
server.inject({method: 'POST', url: '/contentUpload'}, function (err, response) {
  console.log(err, response);
  t.equal(response.statusCode, 200);
  //mongo.addcontent('test', 'string', function (err, result) {
	//console.log(err, result);
  t.end();
  });
});