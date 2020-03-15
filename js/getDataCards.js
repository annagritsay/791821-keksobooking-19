/* eslint-disable no-console */
'use strict';
(function () {
  var URL = 'https://js.dump.academy/keksobooking/data';

  window.load = function () {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.open('GET', URL);
    xhr.send();
    xhr.addEventListener('load', function () {
      if (xhr.status === 200) {
        window.DATA = xhr.response;
      } else {
        console.log('Cтатус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      console.log('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      console.log('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    xhr.timeout = 10000; // 10s
  };

})();
