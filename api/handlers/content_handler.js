var riot = require('riot');
var tags = require('../../tags');

function content_handler (request, reply) {
  var body = riot.render(tags.page_tags);
  var lesson = riot.render(tags.lesson_tags, {lesson: ''});
  reply(tags.header + lesson + tags.footer);
}

module.exports = content_handler;
