var riot = require('riot');
var tags = require('../../tags');

function landing_handler (request, reply) {
  var body = riot.render(tags.page_tags);
  var step = riot.render(tags.step_tags, {step: 'MyStep'});
  reply(tags.header + body + tags.footer);
}

module.exports = landing_handler;
