var mongo = require('./mongo_content');

function contentHandler (step) {
  return function (request, reply) {
    mongo.findContent('step' + step, function(err, data){
      var button = 'Continue';
      var stage = request.params.stage || '0';
      var content = data.content[stage];
      var star = false;
      var hoorah = false;
      var type = 'screen';
      if (+stage === data.content.length - 2) { star = true; }
      /*istanbul ignore next*/
      if (+stage === data.content.length - 1) { hoorah = true; }
      var next = '/step' + step + '/' + (+stage + 1);
      var src = content.screenshot ? '/' + content.screenshot : false;
      var progress = ' ' + (+stage + 1) + '/' + data.content.length;
      if (!src){
        if(hoorah){
          src = "/public/img/" + step + "star.png";
          type = 'stars';
        }
      }
      if (+stage +1 === data.content.length){
        button= "My Progress";
        next = "/progress";
      }
      reply.view('content', {
        button: button,
        text: content.text,
        next: next,
        src: src,
        title: content.title,
        star: star,
        step: step,
        hoorah: hoorah,
        type:  type,
        title_header: data.titleHeader + progress
      });
    });
  };
}

module.exports = contentHandler;
