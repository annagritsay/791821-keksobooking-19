'use strict';

(function () {
  var URL = 'https://js.dump.academy/keksobooking';
  var adForm = document.querySelector('.ad-form');
  var conteiner = document.querySelector('main');
  var upload = function (data) {
    var xhv = new XMLHttpRequest();

    xhv.addEventListener('load', function () {
      if (xhv.status === window.util.CODE_SUCCESS) {
        window.getSuccessMassage(conteiner);
      } else {
        window.getErrorMassage(conteiner);
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

  adForm.addEventListener('reset', function () {
    window.doInactivityMap();
  });

})();
