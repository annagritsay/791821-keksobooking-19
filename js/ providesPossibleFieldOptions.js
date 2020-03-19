'use strict';

(function () {
  window.providesPossibleFieldOptions = function () {
    var adForm = document.querySelector('.ad-form');
    var roomNumber = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity').querySelectorAll('option');
    var typeHouse = document.querySelector('#type');
    var price = document.querySelector('#price');
    var timeinSelect = document.querySelector('#timein');
    var timeoutSelect = document.querySelector('#timeout');

    adForm.addEventListener('change', function () {
      price.placeholder = window.HashHouse[typeHouse.value].placeholder;
      timeoutSelect.value = timeinSelect.value;
      capacity.forEach(function (item) {
        if (Number(roomNumber.value) - Number(item.value) === 100) {
          item.removeAttribute('disabled');
        } else if (item.value <= roomNumber.value && roomNumber.value !== '100' && item.value !== '0') {
          item.removeAttribute('disabled');
        } else {
          item.setAttribute('disabled', true);
        }
      });
    });
  };
})();
