function calendar_handler (request, reply){
  reply.view('calendar', null, {layout: 'progress'});
}

module.exports = calendar_handler;
