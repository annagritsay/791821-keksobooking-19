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
      } else if (title.value.length < window.util.MIN_LENGTH_TITLE) {
        title.setCustomValidity('Минимальное количество знаков - ' + window.util.MIN_LENGTH_TITLE);
      } else if (title.value.length > window.util.MAX_LENGTH_TITLE) {
        title.setCustomValidity('Максимальное количество знаков - ' + window.util.MAX_LENGTH_TITLE);
      }

      if (price.value.length === 0) {
        price.setCustomValidity('Не заполнено обязательное поле');
      } else if (Number(price.value) < Number(price.placeholder)) {
        price.setCustomValidity('Минимальная цена для этого варианта размещения: ' + price.placeholder);
      } else if (Number(price.value) > window.util.MAX_VALUE_PRICE) {
        price.setCustomValidity('Максимально допустимое значение: ' + window.util.MAX_VALUE_PRICE);
      }

      if (capacitySelect.selectedOptions[0].disabled) {
        capacitySelect.setCustomValidity('Выберете подходящее количество мест');
      } else {
        capacitySelect.setCustomValidity('');
      }
    });
  };
})();
