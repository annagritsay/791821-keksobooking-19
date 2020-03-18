'use strict';

(function () {
  // Активное состояние карты

  window.doActivityMap = function () {
    var adForm = document.querySelector('.ad-form');
    var mapFilters = document.querySelector('.map__filters');
    var fieldsets = adForm.querySelectorAll('fieldset');
    var fieldsetsArray = Array.prototype.slice.call(fieldsets);
    var map = document.querySelector('.map');
    var addressId = document.querySelector('#address');

    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.removeAttribute('disabled', true);
    });
    addressId.setAttribute('value', '570, 375');
    addressId.setAttribute('readonly', 'readonly');
    window.getDataCards();
  };
})();
