'use strict';

(function () {
  // Валидация полей формы объявления

  window.validatesFormField = function () {

    // Синхронизация количества комнат и гостей
    var capacity = document.querySelector('#capacity').querySelectorAll('option');
    var roomNumber = document.querySelector('#room_number');
    var capacitySelect = document.querySelector('#capacity');

    roomNumber.addEventListener('change', function () {
      capacity.forEach(function (val) {
        val.removeAttribute('disabled');
      });
      var optionIndex = roomNumber.selectedIndex;
      if (optionIndex === 2) {
        capacity[3].setAttribute('disabled', true);
      } else if (optionIndex === 3) {
        capacity.forEach(function (val) {
          val.setAttribute('disabled', true);
        });
        capacity[3].removeAttribute('disabled');
      } else if (optionIndex === 0) {
        capacity.forEach(function (val) {
          val.setAttribute('disabled', true);
        });
        capacity[2].removeAttribute('disabled');
      } else if (optionIndex === 1) {
        capacity[3].setAttribute('disabled', true);
        capacity[0].setAttribute('disabled', true);
      }
    });

    //  Синхронизация времени заезда-выезда
    var timein = document.querySelector('#timein').querySelectorAll('option');
    var timeout = document.querySelector('#timeout').querySelectorAll('option');
    var timeinSelect = document.querySelector('#timein');
    var timeoutSelect = document.querySelector('#timeout');

    timeinSelect.addEventListener('change', function () {
      timeout.forEach(function (val) {
        val.removeAttribute('selected');
      });
      var optionIndex = timeinSelect.selectedIndex;
      timeout[optionIndex].setAttribute('selected', true);
      timeoutSelect.value = timeout[optionIndex].value;
    });

    timeoutSelect.addEventListener('change', function () {
      timein.forEach(function (val) {
        val.removeAttribute('selected');
      });
      var optionIndex = timeoutSelect.selectedIndex;
      timein[optionIndex].setAttribute('selected', true);
      timeinSelect.value = timein[optionIndex].value;
    });

    // Валидация формы
    var buttonSubmit = document.querySelector('.ad-form__submit');

    buttonSubmit.addEventListener('click', function () {
      var optionIndex = capacitySelect.selectedIndex;
      if (capacitySelect[optionIndex].disabled === true) {
        capacitySelect.setCustomValidity('Выберете подходящее количество мест');
      } else {
        capacitySelect.setCustomValidity('');
      }
    });

    capacitySelect.addEventListener('click', function () {
      capacitySelect.setCustomValidity('');
    });

    //  Плейсхолдер цены в зависимости от типа жилья
    var typeHouse = document.querySelector('#type');
    var price = document.querySelector('#price');

    typeHouse.addEventListener('change', function () {
      if (typeHouse.value === 'house') {
        price.placeholder = '5000';
      }
      if (typeHouse.value === 'bungalo') {
        price.placeholder = '0';
      }
      if (typeHouse.value === 'flat') {
        price.placeholder = '1000';
      }
      if (typeHouse.value === 'palace') {
        price.placeholder = '10 000';
      }
    });
  };
})();
