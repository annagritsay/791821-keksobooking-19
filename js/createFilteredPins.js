'use strict';

(function () {
  window.createFilteredPins = function (mapFilters) {
    var lastTimeout = null;
    mapFilters.addEventListener('change', function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      lastTimeout = window.setTimeout(function () {
        window.filterPins();
        window.createCardsAndPins(window.filterPins());
      }, 500);
    });
  };
})();
