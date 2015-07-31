module.exports = function (context) {
  if (context.data.root.star){
    var stage = context.data.root.stage;
    return '<div class="mdl-cell mdl-cell--2-col" onclick=getMe.starPush('+stage+')>' +
              "<img src='/public/img/unclicked.png'/ class='star' id='star" + stage + "'>" +
            '</div>';
  }
};
