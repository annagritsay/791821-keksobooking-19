'use strict';

(function () {
  window.doActivityMap = function () {
    var map = document.querySelector('.map');
    var fieldsets = window.HashVars.adForm.querySelectorAll('fieldset');
    var fieldsetsArray = Array.prototype.slice.call(fieldsets);

    map.classList.remove('map--faded');
    window.HashVars.adForm.classList.remove('ad-form--disabled');
    window.HashVars.mapFilters.classList.remove('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.removeAttribute('disabled', true);
    });
    window.HashVars.address.setAttribute('value', '570, 375');
    window.HashVars.address.setAttribute('readonly', 'readonly');
    window.getDataCards();
  };
})();
