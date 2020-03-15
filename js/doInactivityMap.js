'use strict';

(function () {
  // Неактивное состояние карты

  window.doInactivityMap = function () {
    var adForm = document.querySelector('.ad-form');
    var mapFilters = document.querySelector('.map__filters');
    var fieldsetAll = adForm.querySelectorAll('fieldset');
    var fieldsetAllArray = Array.prototype.slice.call(fieldsetAll);
    var map = document.querySelector('.map');
    var mapPin = document.querySelector('.map__pin--main');
    var mapPinAll = document.querySelectorAll('.map__pin');
    var mapCardAll = document.querySelectorAll('.map__card');
    var mapPinAllArray = Array.prototype.slice.call(mapPinAll);
    var mapCardAllArray = Array.prototype.slice.call(mapCardAll);
    var addressId = document.querySelector('#address');

    mapPinAllArray.splice(0, 1);
    mapCardAllArray.forEach(function (value) {
      value.remove();
    });
    mapPinAllArray.forEach(function (value) {
      value.remove();
    });
    adForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
    mapPin.setAttribute('style', 'left: ' + 570 + 'px; ' + 'top: ' + 375 + 'px;');
    addressId.setAttribute('value', '570, 375');
    mapFilters.classList.add('ad-form--disabled');
    fieldsetAllArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
    adForm.reset();
    mapFilters.reset();
  };
})();
