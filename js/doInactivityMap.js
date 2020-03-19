'use strict';

(function () {
  window.doInactivityMap = function () {
    var map = document.querySelector('.map');
    var fieldsets = window.HashVars.adForm.querySelectorAll('fieldset');
    var fieldsetsArray = Array.prototype.slice.call(fieldsets);
    var mapPins = document.querySelectorAll('.map__pin + :not(.map-pin--main)');
    var mapCards = document.querySelectorAll('.map__card');
    var mapPinsArray = Array.prototype.slice.call(mapPins);
    var mapCardsArray = Array.prototype.slice.call(mapCards);

    mapCardsArray.forEach(function (value) {
      value.remove();
    });
    mapPinsArray.forEach(function (value) {
      value.remove();
    });
    window.HashVars.adForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
    window.HashVars.mapPin.setAttribute('style', 'left: ' + 570 + 'px; ' + 'top: ' + 375 + 'px;');
    window.HashVars.address.setAttribute('value', '570, 375');
    window.HashVars.mapFilters.classList.add('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
    window.HashVars.adForm.reset();
    window.HashVars.mapFilters.reset();
    window.HashVars.price.placeholder = '1000';
  };
})();
