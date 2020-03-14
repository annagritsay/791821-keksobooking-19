/* eslint-disable no-console */
'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';

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
  };

  window.sendFormData = function () {
    var adForm = document.querySelector('.ad-form');

    adForm.addEventListener('submit', function (evt) {
      evt.preventDefault();
      upload(new FormData(adForm));
      window.doInactivityMap();
      adForm.reset();
    });
    adForm.addEventListener('reset', function (evt) {
      evt.preventDefault();
      window.doInactivityMap();
      adForm.reset();
    });
  };

})();
