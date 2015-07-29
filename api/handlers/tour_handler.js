function tour_handler (request, reply){
  reply.view('test', { title: 'My home page', title_header: 'Tour', tour_content: 'This is the content of the tour' });
}

module.exports = tour_handler;
