'use strict';

(function () {
  // Делает поля неактивными

  window.doInactivityMap = function () {
    var adForm = document.querySelector('.ad-form');
    var mapFilters = document.querySelector('.map__filters');
    var fieldsetAll = adForm.querySelectorAll('fieldset');
    var fieldsetAllArray = Array.prototype.slice.call(fieldsetAll);

    mapFilters.classList.add('ad-form--disabled');
    fieldsetAllArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
  };
})();
