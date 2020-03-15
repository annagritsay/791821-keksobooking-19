/* eslint-disable no-console */
'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';
  var adForm = document.querySelector('.ad-form');

  var upload = function (data) {
    var xhv = new XMLHttpRequest();

    xhv.addEventListener('load', function () {
      if (xhv.status === 200) {
        console.log(xhv.response);
        window.successMassage();
      } else {
        console.log('Cтатус ответа: ' + xhv.status + ' ' + xhv.statusText);
        window.errorMassage();
      }
    });

    xhv.open('POST', URL);
    xhv.send(data);
    window.doInactivityMap();
  };

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    upload(new FormData(adForm));
  });

  adForm.addEventListener('reset', function (evt) {
    evt.preventDefault();
    window.doInactivityMap();
  });

})();
