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

    mapFilters.addEventListener('change', function () {
      var dataCards = window.DATA;
      var housingFeaturesInputs = [];
      housingFeatures.querySelectorAll('.map__checkbox:checked').forEach(function (it) {
        housingFeaturesInputs.push(it.value);
      });
      var mapPins = document.querySelectorAll('.map__pin:not(map-pin--main)');
      var mapCards = document.querySelectorAll('.map__card');
      var mapPinsArray = Array.prototype.slice.call(mapPins);
      var mapCardsArray = Array.prototype.slice.call(mapCards);
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
      var criateNewCards = function () {
        mapCardsArray.forEach(function (value) {
          value.remove();
        });
        mapPinsArray.forEach(function (value) {
          value.remove();
        });
        window.createPins(dataCards);
        window.createCards(dataCards);
        window.listeningTriggerCards();
      };
      var i = 0;
      var filterTypeSelect = window.debounce(function () {
        dataCards = dataCards.filter(function (it) {
          if (i > 4) {
            return false;
          }
          if ((it.offer.type === housingTypeSelect.value || housingTypeSelect.value === 'any')
              && (it.offer.rooms === Number(housingRooms.value) || housingRooms.value === 'any')
              && (it.offer.guests === Number(housingGuests.value) || housingGuests.value === 'any')
              && (HashPrice[housingPrice.value].min < it.offer.price && it.offer.price < HashPrice[housingPrice.value].max)) {
            i++;
            return true;
          }
          return false;
        });
        criateNewCards();
      });
      var filterFeatures = window.debounce(function (item) {
        dataCards = dataCards.filter(function (it) {
          return it.offer.features.includes(item);
        });
        criateNewCards();
      });
      housingFeaturesInputs.map(filterFeatures);
      filterTypeSelect();
    });
  };
})();
