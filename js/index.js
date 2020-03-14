'use strict';

// Загрузка данных и вызов слушателей различных событий на странице
(function () {
  window.load();
  window.movePin();
  window.filtersPins();
  window.validatesFormField();
  window.sendFormData();

  var addressId = document.querySelector('#address');
  addressId.setAttribute('value', '570, 375');
})();
