'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';

  window.getDataCards = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL);
    xhr.send();
    xhr.addEventListener('load', function () {
      if (xhr.status === window.util.CODE_SUCCESS) {
        window.DATA = xhr.response;
        window.callMainEvents(window.DATA);
      }
    });
    xhr.timeout = window.util.LOADING_TIMEOUT;
  };

})();
