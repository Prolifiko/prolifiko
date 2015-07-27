function loading_handler (request, reply) {
  reply.file('./public/html/loading.html');
}

module.exports = loading_handler;
