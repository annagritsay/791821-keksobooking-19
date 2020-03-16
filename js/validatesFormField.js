'use strict';

(function () {
  // Валидация полей формы объявления

  window.validatesFormField = function () {
    var title = document.querySelector('#title');
    var roomNumber = document.querySelector('#room_number');
    var capacitySelect = document.querySelector('#capacity');
    var capacity = document.querySelector('#capacity').querySelectorAll('option');
    var typeHouse = document.querySelector('#type');
    var price = document.querySelector('#price');
    var buttonSubmit = document.querySelector('.ad-form__submit');

    title.addEventListener('input', function () {
      title.setCustomValidity('');
    });
    price.addEventListener('input', function () {
      price.setCustomValidity('');
    });
    capacitySelect.addEventListener('change', function () {
      capacitySelect.setCustomValidity('');
    });

    //  Плейсхолдер цены в зависимости от типа жилья
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

    //  Синхронизация времени заезда-выезда
    var timesIn = document.querySelector('#timein').querySelectorAll('option');
    var timesOut = document.querySelector('#timeout').querySelectorAll('option');
    var timeinSelect = document.querySelector('#timein');
    var timeoutSelect = document.querySelector('#timeout');

    timeinSelect.addEventListener('change', function () {
      timesOut.forEach(function (val) {
        val.removeAttribute('selected');
      });
      var optionIndex = timeinSelect.selectedIndex;
      timesOut[optionIndex].setAttribute('selected', true);
      timeoutSelect.value = timesOut[optionIndex].value;
    });

    timeoutSelect.addEventListener('change', function () {
      timesIn.forEach(function (val) {
        val.removeAttribute('selected');
      });
      var optionIndex = timeoutSelect.selectedIndex;
      timesIn[optionIndex].setAttribute('selected', true);
      timeinSelect.value = timesIn[optionIndex].value;
    });

    // Синхронизация количества комнат и гостей
    roomNumber.addEventListener('change', function () {
      var selectedOptions = roomNumber.selectedOptions;
      capacitySelect.setCustomValidity('');
      capacity.forEach(function (item) {
        if (Number(selectedOptions[0].value) - Number(item.value) === 100) {
          item.removeAttribute('disabled');
        } else if (item.value <= selectedOptions[0].value && selectedOptions[0].value !== '100' && item.value !== '0') {
          item.removeAttribute('disabled');
        } else {
          item.setAttribute('disabled', true);
        }
      });
    });

    // Отправка формы
    buttonSubmit.addEventListener('click', function () {
      if (title.value.length === 0) {
        title.setCustomValidity('Не заполнено обязательное поле');
      } else if (title.value.length < 29) {
        title.setCustomValidity('Минимальное количество знаков - 30');
      } else if (title.value.length > 99) {
        title.setCustomValidity('Максимальное количество знаков - 100');
      }

      if (price.value.length === 0) {
        price.setCustomValidity('Не заполнено обязательное поле');
      } else if (Number(price.value) < Number(price.placeholder)) {
        price.setCustomValidity('Минимальная цена для этого варианта размещения: ' + price.placeholder);
      } else if (Number(price.value) > 1000000) {
        price.setCustomValidity('Максимально допустимое значение: 1 000 000');
      }

      if (capacitySelect.selectedOptions[0].disabled) {
        capacitySelect.setCustomValidity('Выберете подходящее количество мест');
      }
    });
  };
})();
