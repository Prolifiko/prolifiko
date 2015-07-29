var tour_handler = require('./handlers/tour_handler.js');
var welcome_handler = require('./handlers/welcome_handler.js');
var welcome_content_handler = require('./handlers/welcome_content_handler.js');
var star_handler = require('./handlers/star_handler.js');
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
    path: '/tour',
      handler: welcome_content_handler
  },

  {
    method: 'GET',
    path: '/star',
      handler: star_handler
  },

  {
    method: 'GET',
    path: '/welcome',
      handler: welcome_handler
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
