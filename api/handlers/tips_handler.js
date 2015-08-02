var mongo = require('./mongo_content');

function tipsHandler (step) {
  return function (request, reply) {
    mongo.findContent('step' + step, function(err, data){
      var button = 'Continue';
      var stage = request.params.stage || '0';
      var content = data.content[stage];
      var star = false;
      if (+stage === data.content.length - 1) { star = true; }
 	    var next = '/step' + step + '/' + (+stage + 1);
      var progress = ' ' + (+stage + 1) + '/' + data.content.length;
      if (+stage +1 === data.content.length){
        button= "My Progress";
        next = "/progress";
      }
      reply.view('content', {
        button: button,
        text: content.text,
        next: next,
        src: false,
        title: content.title,
        star: star,
        step: step,
        type: '',
        title_header: data.titleHeader + progress
      });
    });
  };
}

module.exports = tipsHandler;
