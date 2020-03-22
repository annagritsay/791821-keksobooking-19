'use strict';

(function () {
  window.providesPossibleFieldOptions = function (adForm, price) {
    var roomNumber = document.querySelector('#room_number');
    var capacity = document.querySelector('#capacity').querySelectorAll('option');
    var typeHouse = document.querySelector('#type');
    var timeinSelect = document.querySelector('#timein');
    var timeoutSelect = document.querySelector('#timeout');
    var autoChanginTime;

    adForm.addEventListener('change', function (evt) {
      if (evt.target === timeinSelect || evt.target === timeoutSelect) {
        autoChanginTime = evt.target === timeinSelect ? timeoutSelect : timeinSelect;
        autoChanginTime.value = evt.target.value;
      }
      price.placeholder = window.HashHouse[typeHouse.value].placeholder;
      capacity.forEach(function (item) {
        if (Number(roomNumber.value) - Number(item.value) === Number(window.util.ROOM_NUMBER_MAX)) {
          item.removeAttribute('disabled');
        } else if (item.value <= roomNumber.value && roomNumber.value !== window.util.ROOM_NUMBER_MAX && item.value !== window.util.ROOM_NUMBER_MIN) {
          item.removeAttribute('disabled');
        } else {
          item.setAttribute('disabled', true);
        }
      });
    });
  };
})();
