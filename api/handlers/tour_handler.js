var mongo = require('./mongo_content');

function tour_handler (request, reply){
  mongo.findContent('tour', function(err, data){
    var button = 'Continue';
    var stage = request.params.stage || 0;
    var content = data.content[stage];
    var nextStep = '/tour/' + (+stage + 1);
    /* istanbul ignore next */
    if (+stage + 1 === data.content.length) {
      button = 'Sign Up';
      nextStep = '/progress';
    }
    reply.view('tour', {
      text: content.text,
      nextStep: nextStep,
      button: button,
      src: src,
      title: content.title,
      title_header: data.titleHeader
    });
  });
}

module.exports = tour_handler;
