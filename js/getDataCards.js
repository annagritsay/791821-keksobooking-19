'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';

  window.getDataCards = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL);
    xhr.send();
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.DATA = xhr.response;
        window.callMainEvents(window.DATA);
      }
    });
    xhr.timeout = 10000; // 10s
  };

})();
