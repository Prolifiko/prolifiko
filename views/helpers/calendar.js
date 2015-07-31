module.exports = function(){
  var mon = getMonday().getTime();
  var days = [0, 1, 2, 3, 4, 5, 6];
  return days.map(function (day) {
    return generateVertical(new Date(mon + (day * 24 * 60 * 60 * 1000)));
  }).join('');
};

function generateVertical (day) {
  var days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  var result = '<div class="mdl-cell oneDay mdl-cell--1-col">' + days[day.getDay()];
  var start = day.getTime();
  var pasts = [-1, 0, 1, 2, 3, 4, 5].map(function (week) {
    return start + (week * 7 * 24 * 60 * 60 * 1000);
  });
  result += pasts.map(function (time) {
    var day = new Date(time);
    var dayId = new Date(day.toDateString()).getTime();
    return '<div class="mdl-cell mdl-cell--1-col valign-wrapper" id="'+dayId+'">'+day.getDate()+'</div>';
  }).join('');
  return result + '</div>';
}

function getMonday () {
  var now = new Date();
  var lastMonday = now.getTime() - (dayAdjust(now.getDay()) * 24 * 60 * 60 * 1000);
  return new Date(lastMonday);
}

function dayAdjust (day) {
  /* istanbul ignore next */
  if (day === 0) return 6;
  else return day - 1;
}
