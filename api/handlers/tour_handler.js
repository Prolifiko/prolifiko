var mongo = require('./mongo_content');

function tour_handler (request, reply){
  mongo.findContent('tour', function(err, data){
    stage = request.params.stage || 0;
    reply.view('tour', {tour_content: data.content[stage].text});
  });
}

module.exports = tour_handler;
