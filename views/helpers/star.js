module.exports = function (context) {
  if (context.data.root.star){
    return '<div class="mdl-cell mdl-cell--2-col">' +
              "<img src='/public/img/spaceLogo.png'/>" +
            '</div>';
  }
};
