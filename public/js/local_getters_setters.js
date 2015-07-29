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

  return getMe;
}());
