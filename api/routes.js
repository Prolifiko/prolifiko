var routes = [
{
  method: 'GET',
  path: '/',
    handler: function (request, reply) {
      reply('Hello!');
    }
  }

];

module.exports = routes;