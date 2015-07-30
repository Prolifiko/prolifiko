var mongo = require('./mongo_content');

function tour_handler (request, reply){
  mongo.findContent('tour', function(err, data){
    var button = 'Continue';
    stage = request.params.stage || 0;
    var nextStep = '/tour/' + (+stage + 1);
    if (+stage + 1 === data.content.length) {
      button = 'Sign Up';
      nextStep = '/progress';
    }

    reply.view('tour', {tourContent: data.content[stage].text, nextStep: nextStep, button: button, src: '/'+data.content[stage].screenshot });
  });
}

module.exports = tour_handler;
