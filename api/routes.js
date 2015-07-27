var loading_handler = require('./handlers/loading_handler.js');

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
  }

];

module.exports = routes;
