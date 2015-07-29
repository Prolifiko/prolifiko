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

  var starPush = function(){
    var userStatus = JSON.parse(localStorage.getItem('prolifiko-me'));
    userStatus.steps.push(true);
    console.log(userStatus);
    localStorage.setItem('prolifiko-me', JSON.stringify(userStatus));
    standardRequest(function (req) {}, '/starPush/' + userStatus._id, 'POST')();
  };

  return {
    getMe: getMe,
    starPush: starPush,
  };
}());
