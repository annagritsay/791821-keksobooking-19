'use strict';

(function () {
  // Активное состояние карты

  window.doActivityMap = function () {
    var adForm = document.querySelector('.ad-form');
    var mapFilters = document.querySelector('.map__filters');
    var fieldsetAll = adForm.querySelectorAll('fieldset');
    var fieldsetAllArray = Array.prototype.slice.call(fieldsetAll);
    var map = document.querySelector('.map');
    var addressId = document.querySelector('#address');

    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    fieldsetAllArray.forEach(function (val) {
      val.removeAttribute('disabled', true);
    });
    addressId.setAttribute('value', '570, 375');
    addressId.setAttribute('readonly', 'readonly');
    window.createPinss(window.DATA);
    window.createCards(window.DATA);
    window.listeningTriggerCards();
  };
})();
