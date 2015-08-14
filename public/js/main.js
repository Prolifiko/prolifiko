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

  function clickedToday() {
    var today = new Date().getDate();
    return userStatus.timestamps.some(function(timestamp){
      return new Date(timestamp).getDate() === today;
    });
  }

  function habitYellower () {
    var star = document.getElementsByClassName('habitStar')[0];
      if(clickedToday()){
        star.className += ' success2';
        star.style['background-image'] = 'url(/public/img/spaceLogo.png)';
      }
  }

  function starPush (step) {
    if (step && userStatus.steps[step]) { return; }
    if (step !== undefined) { userStatus.steps[step] = true; }
    userStatus.timestamps.push(Date.now());
    localStorage.setItem('prolifiko-me', JSON.stringify(userStatus));
    try { isYellow(); } catch (e) {}
    try { habitYellower(); } catch (e) {}
    if(step !== 'Bonus' && step !== 'Tips' && step !== 'Habit' ){
      standardRequest(function (req) {}, '/starPush', 'POST')();
    }
  }

  function calendarPrep () {
    starYellower();
    totalRender();
  }

  function starYellower () {
    userStatus.timestamps.forEach( function (time) {
      var dayStart = new Date(time).toDateString();
      var day = document.getElementById(dayStart + '');
      if (day.className.indexOf('success') === -1) { day.className += ' success'; }
    });
  }

  function totalRender () {
    document.getElementById('streak').innerHTML = userStatus.timestamps.length;
  }

  function isYellow () {
    var star = document.getElementsByClassName('starButton')[0];
    if (userStatus.steps[star.id]) {
      star.className += ' success2';
      star.style['background-image'] = 'url(/public/img/spaceLogo.png)';
    }
  }

  function stepActivate () {
    var buttons = document.getElementsByTagName('button');
    userStatus.steps.forEach( function (step, i) {
      buttons[i + 1].disabled = false;
      buttons[i].className += ' mdl-button--accent';
    });
  }

  var userStatus;

  var getMe = standardRequest(function (req) {
    localStorage.setItem('prolifiko-me', req.responseText);
  }, '/getMe', 'get');

  getMe();
  userStatus = JSON.parse(localStorage.getItem('prolifiko-me'));
  try { isYellow(); } catch (e) {}
  // try { habitYellower(); } catch (e) {}

  if (window.location.href.indexOf('calendar') > -1){ calendarPrep(); }
  if (window.location.href.indexOf('progress') > -1){ stepActivate(); }

  return {
    getMe: getMe,
    starPush: starPush,
  };
}());
