'use strict';
(function () {
  var adFormElements = document.querySelectorAll('.ad-form__element');
  var adFormElementsArray = Array.prototype.slice.call(adFormElements);
  var adForm = document.querySelector('.ad-form');
  var address = document.querySelector('#address');
  var price = document.querySelector('#price');
  var mapFilters = document.querySelector('.map__filters');
  var mapPinMain = document.querySelector('.map__pin--main');
  var mapPin = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var fieldsets = adForm.querySelectorAll('fieldset');
  var fieldsetsArray = Array.prototype.slice.call(fieldsets);
  var capacitySelect = document.querySelector('#capacity');
  var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  var mapPinsArray = Array.prototype.slice.call(mapPins);
  var mapCards = document.querySelectorAll('.map__card');
  var mapCardsArray = Array.prototype.slice.call(mapCards);

  address.setAttribute('value', '570, 375');
  adFormElementsArray.forEach(function (value) {
    value.setAttribute('disabled', true);
  });

  window.providesPossibleFieldOptions(adForm, price);
  window.validatesFormField(adForm, price, capacitySelect);
  window.movePin(map, mapPinMain, address);

  window.doInactivityMap = function () {
    mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinsArray = Array.prototype.slice.call(mapPins);
    mapCards = document.querySelectorAll('.map__card');
    mapCardsArray = Array.prototype.slice.call(mapCards);

    mapCardsArray.forEach(function (value) {
      value.remove();
    });
    mapPinsArray.forEach(function (value) {
      value.remove();
    });
    adForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
    mapPinMain.setAttribute('style', 'left: ' + 570 + 'px; ' + 'top: ' + 375 + 'px;');
    address.setAttribute('value', '570, 375');
    mapFilters.classList.add('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
    adForm.reset();
    mapFilters.reset();
    price.placeholder = '1000';
  };

  window.doActivityMap = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.removeAttribute('disabled', true);
    });
    address.setAttribute('value', '570, 375');
    address.setAttribute('readonly', 'readonly');
    window.getDataCards();
  };

  window.mainFunction = function (data) {
    window.createPins(data, mapPinsArray, mapPin);
    window.createCards(data, map, mapCardsArray);

    mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinsArray = Array.prototype.slice.call(mapPins);
    mapCards = document.querySelectorAll('.map__card');
    mapCardsArray = Array.prototype.slice.call(mapCards);

    window.listeningTriggerCards(mapCardsArray, mapPinsArray);
    window.listeningTriggerCards();
    window.filtersPins(mapFilters);
    window.providesPossibleFieldOptions(adForm, price);
    window.validatesFormField(adForm, price, capacitySelect);
  };
})();
