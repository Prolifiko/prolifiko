function tour_handler (request, reply){
  reply.view('welcome_tour', null, {layout: 'welcome'});
}

module.exports = tour_handler;
