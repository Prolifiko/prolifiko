var mongo = require('./mongo_content');

function contentHandler (step) {
  return function (request, reply) {
    mongo.findContent('step' + step, function(err, data){
      var button = 'Continue';
      var stage = request.params.stage || 0;
      var content = data.content[stage];
      var nextStep = '/content/' + (+stage + 1);
      var src = content.screenshot ? '/' + content.screenshot : false;
      if (+stage + 1 === data.content.length) {
        button = 'Sign Up';
        nextStep = '/progress';
      }
      reply.view('content', {
        content: content.text,
        nextStep: nextStep,
        button: button,
        src: src,
        title: content.title,
      });
    });
  };
}

module.exports = contentHandler;
