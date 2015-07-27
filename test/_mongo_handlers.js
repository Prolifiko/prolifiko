var MongoClient = require('mongodb').MongoClient;
var assert = require('assert');

var url = 'mongodb://localhost:27018/prolifiko';

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
    console.log(result.ops);
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
