module.exports = {
  login: login,
};

function login (request, reply) {
  console.log(getId(request));
  return reply.redirect('/loading');
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
