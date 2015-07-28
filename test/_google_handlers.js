var google = require('../api/handlers/google_handlers');
var mongo = require('../api/handlers/mongo_handlers.js')
var test = require('tape');


test('a user that does not exist is created when auth happens', function(t){
  var fakeRequest = {auth: {credentials: {profile: {id: 23}}}};
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
