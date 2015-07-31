module.exports = function(){
  var test = new Date('Aug 3, 2015').getTime();
  var days = [0, 1, 2, 3, 4, 5, 6];
  return days.map(function (day) {
    return generateVertical(new Date(test + (day * 24 * 60 * 60 * 1000)));
  }).join('');
};

function generateVertical (day) {
  var days = ['Su', 'M', 'T', 'W', 'Th', 'F', 'Sa'];
  var result = '<div class="mdl-cell oneDay mdl-cell--1-col">' + days[day.getDay()];
  var start = day.getTime();
  var pasts = [-1, 0, 1, 2, 3, 4, 5].map(function (week) {
    return start + (week * 7 * 24 * 60 * 60 * 1000);
  });
  result += pasts.map(function(time){
    var day = new Date(time);
    var dayId = new Date(day.toDateString()).getTime();
    return '<div class="mdl-cell mdl-cell--1-col" id="'+dayId+'">'+day.getDate()+'</div>';
  }).join('');
  return result + '</div>';
}
