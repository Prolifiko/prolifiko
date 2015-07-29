var MongoClient = require('mongodb').MongoClient;
require('dotenv').load();
var url = process.env.MONGOLAB_URI;


function contentRequest (request, reply) {
  addcontent(request.payload.screen, request.payload.content, function (err, result) {
    console.log('HI');
    if(err) {reply(err);}
    else{reply.end();}
  });
}

function addcontent (screen, content, callback) {
	MongoClient.connect(url, function (err, db) {
    console.log('FDSDA');
		var content = db.collection('content');
    console.log('ALMOST');
    content.insert({_id:screen, content:content}, function(err, result) {
      console.log('AAAAA');
      db.close();
      if(err) { callback(err);}
      else{callback(null, result);}
    });
	});  
}

function getContent (screen, callback) {
  MongoClient.connect(url, function (err, db){
    var content = db.collection('content');
    content.findOne({_id:screen}, function (err, result) {
      db.close();
      if(err) {callback(err);}
      else {callback(null, result);}
    });
  });
}

module.exports= contentRequest;