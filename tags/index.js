var fs = require('fs');

module.exports = {
  header: fs.readFileSync(__dirname + '/layout_header.html', 'utf8'),
  loading_tags: require(__dirname + '/loading.tag'),
  footer: fs.readFileSync(__dirname + '/layout_footer.html', 'utf8'),
  landing_tags: require(__dirname + '/navbar.tag'),
  step_tags: require(__dirname + '/step.tag'),
  bonus_tag:require(__dirname + '/bonus.tag'),
  page_tags: require(__dirname + '/page.tag'),
  calendar_button_tags: require(__dirname + '/calendar_button.tag')
};
