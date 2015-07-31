function progress_handler (request, reply) {
  reply.view('progress', {title_header: 'Progress'}, {layout: 'progress'});
}

module.exports = progress_handler;
