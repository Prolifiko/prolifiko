var loading_handler = require('./handlers/loading_handler.js');
var google = require('./handlers/google_handlers.js');

var routes = [
  {
    method: 'GET',
    path: '/public/{param*}',
    handler: {
        directory: {
            path: 'public'
        }
    }
},
{
  method: 'GET',
  path: '/loading',
    handler: loading_handler
  },

  {
    method: 'GET',
    path: '/',
      handler: loading_handler
  },

  {
      method: ['GET', 'POST'],
      path: '/login',
      config: {
          auth: 'google',
          handler: google.login,
      }
  }

];

module.exports = routes;
