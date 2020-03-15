// Управляет карточками объявлений и пинами
'use strict';
(function () {
  window.listeningTriggerCards = function () {
    var mapPinAll = document.querySelectorAll('.map__pin');
    var mapCardAll = document.querySelectorAll('.map__card');
    var mapPinAllArray = Array.prototype.slice.call(mapPinAll);
    var mapCardAllArray = Array.prototype.slice.call(mapCardAll);
    var buttonClose = document.querySelectorAll('.popup__close');

    // ИСКЛЮЧАЕТ ИЗ МАССИВА ГЛАВНУЮ МЕТКУ
    mapPinAllArray.splice(0, 1);

    // Функция открытия карточки
    var openCard = function (index) {
      mapCardAllArray.forEach(function (value) {
        value.setAttribute('style', 'display: ' + 'none' + ';');
      });
      mapCardAllArray[index].setAttribute('style', 'display: ' + 'block' + ';');
    };

    // Функция закрытия карточки
    var popupClose = function () {
      mapCardAllArray.forEach(function (value) {
        value.setAttribute('style', 'display: ' + 'none' + ';');
      });
    };

    // Проходит по массиву меток и слушает события (открытия/закрытия карточек)
    mapPinAllArray.forEach(function callback(currentValue, index) {
      currentValue.addEventListener('mouseup', function () {
        openCard(index);
      });
      currentValue.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.util.ENTER_KEYCODE) {
          openCard(index);
        }
      });
      document.addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.util.ESC_KEYCODE) {
          popupClose();
        }
      });
      buttonClose[index].addEventListener('keydown', function (evt) {
        if (evt.keyCode === window.util.ENTER_KEYCODE) {
          popupClose();
        }
      });
      buttonClose[index].addEventListener('mouseup', function () {
        popupClose();
      });
    });
  };
})();
