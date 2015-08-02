function progress_handler (request, reply) {
  reply.view('progress', {title_header: ' My Progress'}, {layout: 'progress'});
}

module.exports = progress_handler;
