var getMe = (function(){
  'use strict';
  function standardRequest (callback, URL, method) {
    return function () {
      var xhr = new XMLHttpRequest();
      xhr.open(method, URL);
      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 & xhr.status < 300) {
          callback(xhr);
        }
      };
      xhr.send();
    };
  }

  function starPush (step) {
    if (step && userStatus.steps[step]) { return; }
    if (step) { userStatus.steps.push(step); }
    userStatus.timestamps.push(Date.now());
    localStorage.setItem('prolifiko-me', JSON.stringify(userStatus));
    isYellow();
    standardRequest(function (req) {}, '/starPush', 'POST')();
  }

  function starYellower () {
    userStatus.timestamps.forEach( function (time) {
      var dayStart = new Date((new Date(time).toDateString())).getTime();
      var day = document.getElementById(dayStart + '');
      if (day.className.indexOf('success') === -1) { day.className += ' success'; }
    });
  }

  function isYellow () {
    var star = document.getElementsByClassName('star')[0];
    var step = star.id.split('star')[1];
    if (userStatus.steps[step]) {
      star.className += ' success';
      star.src = '/public/img/spaceLogo.png';
    }
  }

  var userStatus;

  var getMe = standardRequest(function (req) {
    localStorage.setItem('prolifiko-me', req.responseText);
  }, '/getMe', 'get');

  getMe();
  userStatus = JSON.parse(localStorage.getItem('prolifiko-me'));
  isYellow();


  if (window.location.href.indexOf('alendar') > -1){ starYellower(); }

  return {
    getMe: getMe,
    starPush: starPush,
  };
}());
