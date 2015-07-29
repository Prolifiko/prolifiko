
function progress_handler (request, reply) {
  reply.file('./public/html/progress.html');
}

module.exports = progress_handler;