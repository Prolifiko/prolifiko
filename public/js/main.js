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

  var getMe = standardRequest(function (req) {
    localStorage.setItem('prolifiko-me', req.responseText);
  }, '/getMe', 'get');

  getMe();

  var userStatus = JSON.parse(localStorage.getItem('prolifiko-me'));

  var starPush = function () {
    userStatus.steps.push(true);
    userStatus.timestamps.push(Date.now());
    localStorage.setItem('prolifiko-me', JSON.stringify(userStatus));
    standardRequest(function (req) {}, '/starPush', 'POST')();
  };

  function starYellower () {
    userStatus.timestamps.forEach( function (time) {
      var dayStart = new Date((new Date(time).toDateString())).getTime();
      var day = document.getElementById(dayStart + '');
      if (day.className.indexOf('success') === -1) { day.className += ' success'; }
    });
  }

  if (window.location.href.indexOf('alendar') > -1){ starYellower(); }

  return {
    getMe: getMe,
    starPush: starPush,
  };
}());
