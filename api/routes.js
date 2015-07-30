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
    handler: {
      directory: {
        path: 'public'
      }
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
    path: '/content',
    handler: content_handler
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
