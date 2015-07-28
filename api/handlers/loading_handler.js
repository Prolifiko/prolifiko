var riot = require('riot');
var tags = require('../../tags');

function loading_handler (request, reply) {
  var body = riot.render(tags.loading_tags);
  reply(tags.header + body + tags.footer);
}

module.exports = loading_handler;
