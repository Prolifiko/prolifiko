var mongo = require('./mongo_handlers.js');

function login (request, reply) {
  var userId = getId(request);
  mongo.findUser(userId, function (err, result) {
    if (!result) {
      mongo.createUser(userId, function (err, result) {
        // set a cookie & go to tour
        reply.redirect('/tour');
      });
    } else { /* set a cookie & go to my progress */ return reply.redirect('/loading');}
  });
}

var getId = compose(get('id'), get('profile'), get('credentials'), get('auth'));

function get (property, object){
  if (object) { return object[property]; }
  return function (obj){ return obj[property]; };
}

function compose (){
  var args = arguments;
  return function(){
    var i = args.length;
    var result = arguments;
    while (--i >= 0){
      result = [args[i].apply(null, result)];
    }
    return result[0];
  };
}

module.exports = {
  login: login,
};
