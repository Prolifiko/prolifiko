var tour_handler = require('./handlers/tour_handler.js');
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
    method: ['GET', 'POST'],
    path: '/login',
    config: {
        auth: 'google',
        handler: google.login,
    }
  },

];

module.exports = routes;
