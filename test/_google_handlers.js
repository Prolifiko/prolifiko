var google = require('../api/handlers/google_handlers');
var mongo = require('../api/handlers/mongo_handlers.js');
var test = require('tape');


test('a user that does not exist is created when auth happens', function(t){
  var fakeRequest = {auth: {
    session:{set: function (id) {
      t.equals(23, id.id);
    }},
    credentials: {profile: {id: 23}}}
  };
  var fakeReply = {
    redirect: function(){
      mongo.findUser(23, function (err, reply) {
        t.equals(!!reply, true);
        t.end();
      });
    }
  };
  mongo.deleteUser(23, function (err, reply) {
    google.login(fakeRequest, fakeReply);
  });
});

test('a user that does exist is redirected ', function(t){
  var fakeRequest = {auth: {
    session:{set: function (id) {
      t.equals(23, id.id);
    }},
    credentials: {profile: {id: 23}}}
  };
  var fakeReply = {
    redirect: function(){
      mongo.findUser(23, function (err, reply) {
        t.equals(!!reply, true);
        t.end();
      });
    }
  };
    google.login(fakeRequest, fakeReply);
});

