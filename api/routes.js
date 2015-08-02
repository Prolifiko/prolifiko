var welcome_handler = require('./handlers/welcome_handler.js');
var tour_handler = require('./handlers/tour_handler.js');
var star_handler = require('./handlers/star_handler.js');
var calendar_handler = require('./handlers/calendar_handler.js');
var legal_handler = require('./handlers/legal_handler.js');
var hurrah_handler = require('./handlers/hurrah_handler.js');
var content_handler = require('./handlers/content_handler.js');
var habit_handler = require('./handlers/habit_handler.js');
var tips_handler = require('./handlers/tips_handler.js');
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
    path: '/step1/{stage?}',
    handler: content_handler('1')
  },

  {
    method: 'GET',
    path: '/step2/{stage?}',
    handler: content_handler('2')
  },

  {
    method: 'GET',
    path: '/step3/{stage?}',
    handler: content_handler('3')
  },

  {
    method: 'GET',
    path: '/step4/{stage?}',
    handler: content_handler('4')
  },

  {
    method: 'GET',
    path: '/step5/{stage?}',
    handler: content_handler('5')
  },

  {
    method: 'GET',
    path: '/stepBonus/{stage?}',
    handler: content_handler('Bonus')
  },

  {
    method: 'GET',
    path: '/stepTips/{stage?}',
    handler: tips_handler('Tips')
  },

  {
    method: 'GET',
    path: '/stepHabit',
    handler: habit_handler()   
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
