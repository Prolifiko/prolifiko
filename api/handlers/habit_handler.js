var mongo = require('./mongo_content');

function habitHandler (step) {
  return function (request, reply) {
    mongo.findContent('stepHabit', function(err, data){
      var button = 'My Progress';
      var stage = request.params.stage || 0;
      var content = data.content[stage];
      var next = "/progress";

      reply.view('habit', {
        button: button,
        text: content.text,
        next: next,
        title: content.title,
        step: step,
        title_header: data.titleHeader
      });
    });
  };
}

module.exports = habitHandler;
