function tour_handler (request, reply){
  reply.view('welcome', null, {layout: 'welcome'});
}

module.exports = tour_handler;
