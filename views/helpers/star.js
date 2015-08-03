module.exports = function (context) {
  if (context.data.root.star){
    var step = context.data.root.step;
    /*istanbul ignore next*/
    step= typeof step === 'number'? step: "'" +step+ "'";
    return '<button class="mdl-button mdl-js-button mdl-button--raised mdl-js-ripple-effect starButton" id='+step+' onclick="getMe.starPush('+ step + ')" />';
  }
};
