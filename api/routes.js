var welcome_handler = require('./handlers/welcome_handler.js');
var tour_handler = require('./handlers/tour_handler.js');
var star_handler = require('./handlers/star_handler.js');
var calendar_handler = require('./handlers/calendar_handler.js');
var legal_handler = require('./handlers/legal_handler.js');
var hurrah_handler = require('./handlers/hurrah_handler.js');
var content_handler = require('./handlers/content_handler.js');
var progress_handler = require('./handlers/progress_handler');
var google = require('./handlers/google_handlers');
var mongo = require('./handlers/mongo_handlers');

var routes = [
  {
    method: 'GET',
    path: '/public/{param*}',
    config: {
      handler: {
        directory: {
          path: 'public'
        }
      },
      auth: false,
    }

  },

  {
    method: 'GET',
    path: '/',
    config: {
      auth: false,
      handler: welcome_handler
    }
  },

  {
    method: 'GET',
    path: '/tour/{stage?}',
    config: {
      auth: false,
      handler: tour_handler
    }
  },

  {
    method: 'GET',
    path: '/star',
    handler: star_handler
  },

  {
    method: 'GET',
    path: '/legal',
    handler: legal_handler
  },

  {
    method: 'GET',
    path: '/hurrah',
    handler: hurrah_handler
  },

  {
    method: 'GET',
    path: '/progress',
    handler: progress_handler
  },

  {
    method: 'GET',
    path: '/stepOne/{stage?}',
    handler: content_handler('One')
  },

  {
    method: 'GET',
    path: '/stepTwo/{stage?}',
    handler: content_handler('Two')
  },

  {
    method: 'GET',
    path: '/stepThree/{stage?}',
    handler: content_handler('Three')
  },

  {
    method: 'GET',
    path: '/stepFour/{stage?}',
    handler: content_handler('Four')
  }, 

  {
    method: 'GET',
    path: '/stepFive/{stage?}',
    handler: content_handler('Five')
  },

  {
    method: 'GET',
    path: '/bonus/{stage?}',
    handler: content_handler('bonus')
  },

  {
    method: 'GET',
    path: '/tips/{stage?}',
    handler: content_handler('quickTips')
  },    

  {
    method: 'GET',
    path: '/calendar',
    handler: calendar_handler
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
    handler: mongo.getMe,
  },

  {
    method: 'POST',
    path: '/starPush',
    handler: mongo.starRequest,
  }

];

module.exports = routes;
