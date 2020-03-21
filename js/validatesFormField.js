'use strict';

(function () {
  var title = document.querySelector('#title');
  var buttonSubmit = document.querySelector('.ad-form__submit');
  var events = ['input', 'change'];

  window.validatesFormField = function (adForm, price, capacitySelect) {
    var resetErrorValid = function (evt) {
      evt.target.setCustomValidity('');
    };
    events.map(function (evt) {
      adForm.addEventListener(evt, resetErrorValid);
    });

    buttonSubmit.addEventListener('click', function () {
      if (title.value.length === 0) {
        title.setCustomValidity('Не заполнено обязательное поле');
      } else if (title.value.length < 30) {
        title.setCustomValidity('Минимальное количество знаков - 30');
      } else if (title.value.length > 100) {
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
