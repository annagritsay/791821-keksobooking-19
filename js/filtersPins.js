'use strict';

(function () {

  // ФИЛЬТРАЦИЯ МЕТОК
  window.filtersPins = function () {
    var mapFilters = document.querySelector('.map__filters');

    mapFilters.addEventListener('change', function () {
      var dataCards = window.DATA;
      var housingTypeSelect = document.querySelector('#housing-type');
      var housingPrice = document.querySelector('#housing-price');
      var housingRooms = document.querySelector('#housing-rooms');
      var housingGuests = document.querySelector('#housing-guests');
      var housingFeatures = document.querySelector('#housing-features');
      var housingFeaturesInputs = housingFeatures.querySelectorAll('.map__checkbox');
      var mapPins = document.querySelectorAll('.map__pin');
      var mapCards = document.querySelectorAll('.map__card');
      var mapPinsArray = Array.prototype.slice.call(mapPins);
      var mapCardsArray = Array.prototype.slice.call(mapCards);
      var housingFeaturesInputsArray = Array.prototype.slice.call(housingFeaturesInputs);

      mapPinsArray.splice(0, 1);

      if (housingTypeSelect.value !== 'any') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.type === housingTypeSelect.value;
        });
      }

      if (housingPrice.value === 'middle') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.price >= 10000 && it.offer.price <= 50000;
        });
      } else if (housingPrice.value === 'low') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.price < 10000;
        });
      } else if (housingPrice.value === 'high') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.price > 50000;
        });
      }

      if (housingRooms.value !== 'any') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.rooms === Number(housingRooms.value);
        });
      }

      if (housingGuests.value !== 'any') {
        dataCards = dataCards.filter(function (it) {
          return it.offer.guests === Number(housingGuests.value);
        });
      }

      var filterFeatures = function (item) {
        dataCards = dataCards.filter(function (it) {
          return it.offer.features.includes(item.value);
        });
      };

      housingFeaturesInputsArray.forEach(function (item) {
        if (item.checked) {
          filterFeatures(item);
        }
      });

      mapCardsArray.forEach(function (value) {
        value.remove();
      });
      mapPinsArray.forEach(function (value) {
        value.remove();
      });
      window.createPins(dataCards);
      window.createCards(dataCards);
      window.listeningTriggerCards();
    });
  };
})();
