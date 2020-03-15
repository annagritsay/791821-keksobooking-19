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
      var mapPinAll = document.querySelectorAll('.map__pin');
      var mapCardAll = document.querySelectorAll('.map__card');
      var mapPinAllArray = Array.prototype.slice.call(mapPinAll);
      var mapCardAllArray = Array.prototype.slice.call(mapCardAll);
      var housingFeaturesInputsArray = Array.prototype.slice.call(housingFeaturesInputs);

      mapPinAllArray.splice(0, 1);

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

      mapCardAllArray.forEach(function (value) {
        value.remove();
      });
      mapPinAllArray.forEach(function (value) {
        value.remove();
      });
      window.createPins(dataCards);
      window.createCards(dataCards);
      window.listeningTriggerCards();
    });
  };
})();
