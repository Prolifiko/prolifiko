var mongo = require('./mongo_handlers.js');

function getMe (request, reply) {
  mongo.findUser(request.state.sid.id, function (err, result) {
    /* istanbul ignore if */
    if (err) {reply(err);}
    else {reply(result);}
  });
}

module.exports = getMe;
