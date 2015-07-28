var MongoClient = require('mongodb').MongoClient;
require('dotenv').load();
var url = process.env.MONGOLAB_URI;

module.exports = {
  createUser: createUser,
  findUser: findUser,
  pressStar: pressStar,
  deleteUser: deleteUser,
};

function createUser (id, callback) {
  MongoClient.connect(url, function (err, db){
    var users = db.collection('users');
    users.insert({_id: id, steps: [], timestamps: []},
      function (err, result) {
        db.close();
        if (err) { callback(err); }
        else { callback(null, result); }
      });
  });
}

function findUser (id, callback) {
  MongoClient.connect(url, function (err, db) {
    var users = db.collection('users');
    users.findOne({_id: id}, function (err, result) {
      db.close();
      if (err) { callback(err); }
      else { callback(null, result); }
    });
  });
}

function pressStar (id, step, callback) {
  MongoClient.connect(url, function (err, db) {
    var users = db.collection('users');
    var update = {timestamps: Date.now()};
    if (!callback) { callback = step; update.steps = true;}
    users.updateOne({_id: id},
      {$push: update},
      function (err, result) {
        db.close();
        if (err) { callback(err); }
        else { callback(null, result); }
      }
    );
  });
}

function deleteUser (id, callback){
  MongoClient.connect(url, function (err, db){
    var users = db.collection('users');
    users.deleteOne({_id: id},
      function(err, result){
        db.close();
        if (err) { callback(err); }
        else { callback(null, result); }
      });
  });
}
