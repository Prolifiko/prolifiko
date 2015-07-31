var mongo = require('./mongo_content');

function contentHandler (step) {
  return function (request, reply) {
    mongo.findContent('step' + step, function(err, data){
      var button = 'Continue';
      var stage = request.params.stage || 0;
      var content = data.content[stage];
      var star = false;
      var hoorah = false;
      if (+stage === data.content.length - 2) { star = true; }
      /*istanbul ignore next*/
      if (+stage === data.content.length - 1) { hoorah = true; }
      var next = '/step' + step + '/' + (+stage + 1);
      var src = content.screenshot ? '/' + content.screenshot : false;
      reply.view('content', {
        button: button,
        text: content.text,
        next: next,
        src: src,
        button:button,
        title: content.title,
        star: star,
        step: step,
        hoorah: hoorah
      });
    });
  };
}

module.exports = contentHandler;
