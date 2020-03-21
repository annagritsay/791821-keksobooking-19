'use strict';

(function () {
  window.filterPins = function () {
    var housingTypeSelect = document.querySelector('#housing-type');
    var housingPrice = document.querySelector('#housing-price');
    var housingRooms = document.querySelector('#housing-rooms');
    var housingGuests = document.querySelector('#housing-guests');
    var housingFeatures = document.querySelector('#housing-features');
    var dataCards = window.DATA;
    var housingFeaturesInputs = [];
    var filterFeatures = function (it, item) {
      if (it.offer.features.indexOf(item) !== -1) {
        return true;
      }
      return false;
    };
    housingFeatures.querySelectorAll('.map__checkbox:checked').forEach(function (it) {
      housingFeaturesInputs.push(it.value);
    });
    var filteredPins = [];
    for (var i = 0; filteredPins.length < 5 && dataCards.length - 1 > i; i++) {
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
        filteredPins.push(dataCards[i]);
      }
    }
    return filteredPins;
  };
})();
