var mongo = require('./mongo_content');

function contentHandler (step) {
  return function (request, reply) {
    mongo.findContent('step' + step, function(err, data){
      var button = 'Continue';
      var stage = request.params.stage || 0;
      var content = data.content[stage];
      var next = '/step' + step + '/' + (+stage + 1);
      var prev = '/step' + step + '/' + (+stage - 1);
      var src = content.screenshot ? '/' + content.screenshot : false;
      reply.view('content', {
        text: content.text,
        next: next,
        prev: prev,
        src: src,
        title: content.title,
      });
    });
  };
}

module.exports = contentHandler;
