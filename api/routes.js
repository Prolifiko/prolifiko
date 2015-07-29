
var loading_handler = require('./handlers/loading_handler');
var progress_handler = require('./handlers/progress_handler');
var google = require('./handlers/google_handlers');
var user = require('./handlers/user_info_handlers');


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
    path: '/progress',
    handler: progress_handler
  },

  {
    method: ['GET', 'POST'],
    path: '/login',
    config: {
      auth: 'google',
      handler: google.login,
    }
  },

  {
    method: 'GET',
    path: '/getMe',
    handler: user,
  }
];

module.exports = routes;
