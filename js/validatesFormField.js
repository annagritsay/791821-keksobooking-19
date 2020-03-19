'use strict';

(function () {
  var title = document.querySelector('#title');
  var capacitySelect = document.querySelector('#capacity');
  var buttonSubmit = document.querySelector('.ad-form__submit');
  var events = ['input', 'change'];
  var resetErrorValid = function (evt) {
    evt.target.setCustomValidity('');
  };

  window.validatesFormField = function () {
    events.map(function (evt) {
      window.HashVars.adForm.addEventListener(evt, resetErrorValid);
    });

    buttonSubmit.addEventListener('click', function () {
      if (title.value.length === 0) {
        title.setCustomValidity('Не заполнено обязательное поле');
      } else if (title.value.length < 30) {
        title.setCustomValidity('Минимальное количество знаков - 30');
      } else if (title.value.length > 100) {
        title.setCustomValidity('Максимальное количество знаков - 100');
      }

      if (window.HashVars.price.value.length === 0) {
        window.HashVars.price.setCustomValidity('Не заполнено обязательное поле');
      } else if (Number(window.HashVars.price.value) < Number(window.HashVars.price.placeholder)) {
        window.HashVars.price.setCustomValidity('Минимальная цена для этого варианта размещения: ' + window.HashVars.price.placeholder);
      } else if (Number(window.HashVars.price.value) > 1000000) {
        window.HashVars.price.setCustomValidity('Максимально допустимое значение: 1 000 000');
      }

      if (capacitySelect.selectedOptions[0].disabled) {
        capacitySelect.setCustomValidity('Выберете подходящее количество мест');
      }
    });
  };
})();
