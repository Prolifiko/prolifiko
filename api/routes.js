var tour_handler = require('./handlers/tour_handler.js');
var welcome_handler = require('./handlers/welcome_handler.js');
var google = require('./handlers/google_handler.js');


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
      handler: tour_handler
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

];

module.exports = routes;
