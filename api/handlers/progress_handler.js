function progress_handler (request, reply) {
  reply.view('progress', null, {layout: 'progress'});
}

module.exports = progress_handler;
