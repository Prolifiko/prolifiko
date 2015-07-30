var MongoClient = require('mongodb').MongoClient;
var mongo = require('../api/handlers/mongo_handlers');
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


test('Testing a user can be inserted', function (t) {
  mongo.createUser(1, function (err, result) {
    t.deepEqual(result.ops, [{_id: 1, steps: [], timestamps: []}], 'checking insertion works');
    t.end();
  });
});

test('We can get the user by id', function (t) {
  mongo.findUser(1, function (err, result) {
    t.deepEqual(result, {_id: 1, steps: [], timestamps: []}, 'checking insertion works');
    t.end();
  });
});

test('pressStar updates the timestamp property', function (t) {
  mongo.pressStar(1, function (err, result) {
    t.equal(!!err, false);
    t.equal(result.modifiedCount, 1);
    t.end();
  });
});

test('pressStar called with "step" argument adds a true to the steps array', function (t) {
  mongo.pressStar(1, true, function (err, result) {
    mongo.findUser(1, function (err, result){
      t.equal(result.steps.length, 1);
      t.end();
    });
  });
});

test('Test the user can be deleted', function (t) {
  mongo.deleteUser(1, function (err, result) {
    t.equal(!!err, false);
    t.equal(result.deletedCount, 1);
    t.end();
  });
});

server.ext('onPreAuth', function (request, reply) {
  request.state.sid = {id: 23};
  reply.continue();
});

test('getting user 23 should return the info for the user', function (t) {
  server.inject({method: 'GET', url: '/getMe'}, function (response) {
    t.equals(response.statusCode, 200);
    var payload = JSON.parse(response.payload);
    t.equals(!!payload.steps, true);
    t.equals(!!payload.timestamps, true);
    t.end();
  });
});

test('users star can be updated', function (t) {
  server.inject({method: 'POST', url: '/starPush'}, function (response) {
    t.equals(response.statusCode, 200);
    mongo.findUser(23, function (err, result) {
      t.equal(1, result.steps.length);
      t.end();
    });
  });
});
