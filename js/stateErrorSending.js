'use strict';
(function () {
  window.getErrorMassage = function (conteiner) {
    var template = document.querySelector('#error');
    var massage = template.content.querySelector('.error').cloneNode(true);

    conteiner.appendChild(massage);
    document.addEventListener('keydown', function (evt) {
      if (evt.keyCode === window.util.ESC_KEYCODE) {
        massage.setAttribute('style', 'display: ' + 'none' + ';');
      }
    });
    document.addEventListener('click', function () {
      massage.setAttribute('style', 'display: ' + 'none' + ';');
    });
    document.querySelector('.error__button').addEventListener('click', function () {
      massage.setAttribute('style', 'display: ' + 'none' + ';');
    });
  };
})();
