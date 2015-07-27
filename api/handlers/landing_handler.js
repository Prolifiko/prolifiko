function landing_handler (request, reply) {
  reply.file('./public/html/landingPage.html');
}

module.exports = landing_handler;
