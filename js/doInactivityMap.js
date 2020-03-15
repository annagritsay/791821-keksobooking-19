'use strict';

(function () {
  // Неактивное состояние карты

  window.doInactivityMap = function () {
    var adForm = document.querySelector('.ad-form');
    var mapFilters = document.querySelector('.map__filters');
    var fieldsets = adForm.querySelectorAll('fieldset');
    var fieldsetsArray = Array.prototype.slice.call(fieldsets);
    var map = document.querySelector('.map');
    var mapPin = document.querySelector('.map__pin--main');
    var mapPins = document.querySelectorAll('.map__pin');
    var mapCards = document.querySelectorAll('.map__card');
    var mapPinsArray = Array.prototype.slice.call(mapPins);
    var mapCardsArray = Array.prototype.slice.call(mapCards);
    var addressId = document.querySelector('#address');
    var price = document.querySelector('#price');
    var adFormElements = document.querySelectorAll('.map__card');
    var adFormElementsArray = Array.prototype.slice.call(adFormElements);

    adFormElementsArray.forEach(function (value) {
      value.setAttribute('disabled', true);
    });
    mapPinsArray.splice(0, 1);
    mapCardsArray.forEach(function (value) {
      value.remove();
    });
    mapPinsArray.forEach(function (value) {
      value.remove();
    });
    adForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
    mapPin.setAttribute('style', 'left: ' + 570 + 'px; ' + 'top: ' + 375 + 'px;');
    addressId.setAttribute('value', '570, 375');
    mapFilters.classList.add('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
    adForm.reset();
    mapFilters.reset();
    price.placeholder = '1000';
  };
})();
