// Управляет карточками объявлений и пинами
'use strict';
(function () {
  window.listeningTriggerCards = function () {
    var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    var mapCards = document.querySelectorAll('.map__card');
    var mapPinsArray = Array.prototype.slice.call(mapPins);
    var mapCardsArray = Array.prototype.slice.call(mapCards);
    var buttonClose = document.querySelectorAll('.popup__close');

    // Функция открытия карточки
    var openCard = function (index) {
      mapCardsArray.forEach(function (value) {
        value.setAttribute('style', 'display: ' + 'none' + ';');
      });
      mapCardsArray[index].setAttribute('style', 'display: ' + 'block' + ';');
    };

    // Функция закрытия карточки
    var popupClose = function () {
      mapCardsArray.forEach(function (value) {
        value.setAttribute('style', 'display: ' + 'none' + ';');
      });
    };

    // Проходит по массиву меток и слушает события (открытия/закрытия карточек)
    mapPinsArray.forEach(function callback(currentValue, index) {
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
