/* eslint-disable max-nested-callbacks */
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
      var counter = 0;
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      var dataCards = window.DATA;
      var housingFeaturesInputs = [];
      housingFeatures.querySelectorAll('.map__checkbox:checked').forEach(function (it) {
        housingFeaturesInputs.push(it.value);
      });
      var filterTypeSelect = function () {
        dataCards = dataCards.filter(function (it) {
          var arrayOfSimilarFeatures = housingFeaturesInputs.filter(function (item) {
            if (it.offer.features.indexOf(item) !== -1) {
              return true;
            }
            return false;
          });
          if (counter > 5) {
            return false;
          }
          if (
            (it.offer.type === housingTypeSelect.value || housingTypeSelect.value === 'any')
              && (it.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any')
              && (it.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any')
              && (window.HashPrice[housingPrice.value].min <= it.offer.price && it.offer.price <= window.HashPrice[housingPrice.value].max)
              && (arrayOfSimilarFeatures.length === housingFeaturesInputs.length || housingFeaturesInputs.length === 0)
          ) {
            counter = counter + 1;
            return true;
          }
          return false;
        });
        window.createPins(dataCards);
        window.createCards(dataCards);
        window.listeningTriggerCards();
      };
      lastTimeout = window.setTimeout(function () {
        filterTypeSelect();
      }, 300);
    });
  };
})();
