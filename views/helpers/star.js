module.exports = function (context) {
  if (context.data.root.star){
    var step = context.data.root.step;
    return '<div class="mdl-cell mdl-cell--2-col" onclick=getMe.starPush('+step+')>' +
              "<img src='/public/img/unclicked.png'/ class='star' id='star" + step + "'>" +
            '</div>';
  }
};
