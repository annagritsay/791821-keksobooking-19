'use strict';

(function () {

  // ФИЛЬТРАЦИЯ МЕТОК
  window.filtersPins = function () {
    var mapFilters = document.querySelector('.map__filters');

    mapFilters.addEventListener('change', function (evt) {
      var dataCards = window.DATA;
      var housingTypeSelect = document.querySelector('#housing-type');
      var housingPrice = document.querySelector('#housing-price');
      var housingRooms = document.querySelector('#housing-rooms');
      var housingGuests = document.querySelector('#housing-guests');
      var housingFeatures = document.querySelector('#housing-features');
      var housingFeaturesInputs = housingFeatures.querySelectorAll('.map__checkbox:checked');
      var mapPins = document.querySelectorAll('.map__pin');
      var mapCards = document.querySelectorAll('.map__card');
      var mapPinsArray = Array.prototype.slice.call(mapPins);
      var mapCardsArray = Array.prototype.slice.call(mapCards);
      mapPinsArray.splice(0, 1);
      var arr = [];
      housingFeaturesInputs.forEach(function (it) {
        arr.push(it.value);
      });

      var filterHousingPrice = function (it) {
        if (housingPrice.value === 'any') {
          return true;
        } else if (housingPrice.value === 'middle') {
          return it.offer.price >= 10000 && it.offer.price <= 50000;
        } else if (housingPrice.value === 'low') {
          return it.offer.price < 10000;
        }
        return it.offer.price > 50000;
      };
      var filterHousingTypeSelect = function (it) {
        if (housingTypeSelect.value === 'any') {
          return true;
        }
        return it.offer.type === housingTypeSelect.value;
      };
      var filterHousingRooms = function (it) {
        if (housingRooms.value === 'any') {
          return true;
        }
        return it.offer.rooms === Number(housingRooms.value);
      };
      var filterHousingGuests = function (it) {
        if (housingGuests.value === 'any') {
          return true;
        }
        return it.offer.guests === Number(housingGuests.value);
      };

      var filterFeatures = function (item) {
        dataCards = dataCards.filter(function (it) {
          return it.offer.features.includes(item);
        });
      };

      dataCards = dataCards
        .filter(filterHousingTypeSelect)
        .filter(filterHousingPrice)
        .filter(filterHousingRooms)
        .filter(filterHousingGuests);
      if (evt.target.classList.contains('map__checkbox')) {
        arr.map(function (item) {
          filterFeatures(item);
        });
      }

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
