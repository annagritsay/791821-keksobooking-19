'use strict';

// Загрузка данных и вызов слушателей различных событий на странице
(function () {
  window.getDataCards();
  window.movePin();
  window.filtersPins();
  window.validatesFormField();

  var addressId = document.querySelector('#address');
  addressId.setAttribute('value', '570, 375');
})();
