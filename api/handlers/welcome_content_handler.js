function tour_handler (request, reply){
  reply.view('welcome_tour_content', null);
}

module.exports = tour_handler;
