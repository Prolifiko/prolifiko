var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');
require('dotenv').load();

var url = process.env.MONGOLAB_URI;

MongoClient.connect(url, function (err, db) {

  assert.equal(null, err);

  db.close();
});

var insertDocuments = function (db, callback) {
  var collection = db.collection('users');
  collection.insert([
    {userId: 1, stars: {star1 : false}, timestamps: [], lastLogin: null},
  ], function (err, result) {
    assert.equal(err, null);
    assert.equal(1, result.result.n);
    assert.equal(1, result.ops.length);
    callback(result);
  });
};

MongoClient.connect(url, function (err, db) {

  assert.equal(null, err);
  console.log("Connected correctly to server");


  insertDocuments(db, function() {
    db.close();
  });
});

MongoClient.connect(url, function (err, db){
  console.log('First real test');
  var users = db.collection('users');
  // mongo.createUser(db, '1', function(result){
  //   assert.equal(result.ops, {userId: 1, stars: {star1: false, star2: false, star3: false, star4: false, star5: false}, timestamps: []});
  //   db.close();
  // });
  db.close();
});
