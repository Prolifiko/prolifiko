module.exports = function (context) {
  return context.data.root.text.reduce(function(rendered, element) {
    if (typeof element === 'object') {
      return rendered + '<ul>' + element.reduce(function(list, e){return list + '<li>' + e + '</li>';}, '') + '</ul>';
    } else {
      return rendered +'<p>' + element + '</p>';
    }
  }, '');
};
