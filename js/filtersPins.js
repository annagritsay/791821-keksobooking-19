/* eslint-disable max-nested-callbacks */
'use strict';

(function () {

  // ФИЛЬТРАЦИЯ МЕТОК
  window.filtersPins = function () {
    var mapFilters = document.querySelector('.map__filters');
    var housingTypeSelect = document.querySelector('#housing-type');
    var housingPrice = document.querySelector('#housing-price');
    var housingRooms = document.querySelector('#housing-rooms');
    var housingGuests = document.querySelector('#housing-guests');
    var housingFeatures = document.querySelector('#housing-features');
    var lastTimeout = null;
    mapFilters.addEventListener('change', function () {
      if (lastTimeout) {
        window.clearTimeout(lastTimeout);
      }
      var dataCards = window.DATA;
      var housingFeaturesInputs = [];
      housingFeatures.querySelectorAll('.map__checkbox:checked').forEach(function (it) {
        housingFeaturesInputs.push(it.value);
      });
      var HashPrice = {
        middle: {
          min: 10000,
          max: 50000
        },
        low: {
          min: 0,
          max: 10000
        },
        high: {
          min: 50000,
          max: Infinity
        },
        any: {
          min: 0,
          max: Infinity
        }
      };

      var filterTypeSelect = function () {
        dataCards = dataCards.filter(function (it) {
          var arrayOfSimilarFeatures = housingFeaturesInputs.filter(function (item) {
            if (it.offer.features.indexOf(item) !== -1) {
              return true;
            }
            return false;
          });
          if (
            (it.offer.type === housingTypeSelect.value || housingTypeSelect.value === 'any')
              && (it.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any')
              && (it.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any')
              && (HashPrice[housingPrice.value].min < it.offer.price && it.offer.price < HashPrice[housingPrice.value].max)
              && (arrayOfSimilarFeatures.length === housingFeaturesInputs.length || housingFeaturesInputs.length === 0)
          ) {
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
