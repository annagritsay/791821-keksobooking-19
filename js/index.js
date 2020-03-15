'use strict';

// Загрузка данных и вызов слушателей различных событий на странице
(function () {
  window.getDataCards();
  window.movePin();
  window.filtersPins();
  window.validatesFormField();

  var addressId = document.querySelector('#address');
  var adFormElements = document.querySelectorAll('.ad-form__element');
  var adFormElementsArray = Array.prototype.slice.call(adFormElements);

  addressId.setAttribute('value', '570, 375');
  adFormElementsArray.forEach(function (value) {
    value.setAttribute('disabled', true);
  });
})();
