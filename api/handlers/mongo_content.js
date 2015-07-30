var MongoClient = require('mongodb').MongoClient;
require('dotenv').load();
var url = process.env.MONGOLAB_URI;

module.exports = {
  findContent: findContent,
};


function findContent (step, callback) {
  MongoClient.connect(url, function (err, db) {
    var content = db.collection('content');
    content.findOne({step: step}, function (err, result) {
      db.close();
      /*istanbul ignore if*/
      if (err) { callback(err); }
      else { callback(null, result); }
    });
  });
}
