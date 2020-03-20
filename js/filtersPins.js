'use strict';

(function () {
  var housingTypeSelect = document.querySelector('#housing-type');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var housingFeatures = document.querySelector('#housing-features');

  window.filtersPins = function () {
    var lastTimeout = null;
    window.HashVars.mapFilters.addEventListener('change', function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      var dataCards = window.DATA;
      var housingFeaturesInputs = [];
      housingFeatures.querySelectorAll('.map__checkbox:checked').forEach(function (it) {
        housingFeaturesInputs.push(it.value);
      });
      var filterFeatures = function (it, item) {
        if (it.offer.features.indexOf(item) !== -1) {
          return true;
        }
        return false;
      };
      var filterTypeSelect = function () {
        var newArray = [];
        for (var i = 0; newArray.length < 5 && dataCards.length - 1 > i; i++) {
          var arrayOfSimilarFeatures = housingFeaturesInputs.filter(function (item) {
            return filterFeatures(dataCards[i], item);
          });
          if (
            (dataCards[i].offer.type === housingTypeSelect.value || housingTypeSelect.value === 'any')
              && (dataCards[i].offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any')
              && (dataCards[i].offer.guests === Number(housingGuests.value) || housingGuests.value === 'any')
              && (window.HashPrice[housingPrice.value].min <= dataCards[i].offer.price && dataCards[i].offer.price <= window.HashPrice[housingPrice.value].max)
              && (arrayOfSimilarFeatures.length === housingFeaturesInputs.length || housingFeaturesInputs.length === 0)
          ) {
            newArray.push(dataCards[i]);
          }
        }
        return newArray;
      };
      lastTimeout = window.setTimeout(function () {
        filterTypeSelect();
        window.createPins(filterTypeSelect());
        window.createCards(filterTypeSelect());
        window.listeningTriggerCards();
      }, 500);
    });
  };
})();
