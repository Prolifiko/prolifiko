var mongo = require('./mongo_handlers.js'); //

function login (request, reply) {
  var userId = getId(request);
  request.auth.session.set({id:userId});
  mongo.findUser(userId, function (err, result) {
    if (!result) {
      mongo.createUser(userId, function (err, result) {
        reply.redirect('/progress');
      });
    }else { reply.redirect('/progress');}
  });
}

var getId = compose(get('id'), get('profile'), get('credentials'), get('auth'));

function get (property, object) {
  /*istanbul ignore if*/
  if (object) { return object[property]; }
  return function (obj){ return obj[property]; };
}

function compose () {
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
