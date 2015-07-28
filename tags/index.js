var fs = require('fs');

module.exports = {
  header: fs.readFileSync(__dirname + '/layout_header.html', 'utf8'),
  loading_tags: require(__dirname + '/loading.tag'),
  footer: fs.readFileSync(__dirname + '/layout_footer.html', 'utf8')
};
