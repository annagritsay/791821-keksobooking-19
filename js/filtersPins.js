'use strict';

(function () {

  // ФИЛЬТРАЦИЯ МЕТОК
  window.filtersPins = function () {
    var mapFilters = document.querySelector('.map__filters');

    mapFilters.addEventListener('change', function () {
      window.arrayElement = window.copyArrayElement;
      var housingTypeSelect = document.querySelector('#housing-type');
      var housingPrice = document.querySelector('#housing-price');
      var housingRooms = document.querySelector('#housing-rooms');
      var housingGuests = document.querySelector('#housing-guests');


      if (housingTypeSelect.value === 'any') {
        var newArray1 = window.copyArrayElement;
      } else {
        newArray1 = window.arrayElement.filter(function (it) {
          return it.offer.type === housingTypeSelect.value;
        });
      }
      var mapPinAll = document.querySelectorAll('.map__pin');
      var mapCardAll = document.querySelectorAll('.map__card');
      var mapPinAllArray = Array.prototype.slice.call(mapPinAll);
      mapPinAllArray.splice(0, 1);
      var mapCardAllArray = Array.prototype.slice.call(mapCardAll);

      mapCardAllArray.forEach(function (value) {
        value.remove();
      });
      mapPinAllArray.forEach(function (value) {
        value.remove();
      });


      if (housingPrice.value === 'any') {
        var newArray2 = window.copyArrayElement;
      } else if (housingPrice.value === 'middle') {
        newArray2 = window.arrayElement.filter(function (it) {
          return it.offer.price >= 10000 && it.offer.price <= 50000;
        });
      } else if (housingPrice.value === 'low') {
        newArray2 = window.arrayElement.filter(function (it) {
          return it.offer.price < 10000;
        });
      } else if (housingPrice.value === 'high') {
        newArray2 = window.arrayElement.filter(function (it) {
          return it.offer.price > 50000;
        });
      }

      mapCardAllArray.forEach(function (value) {
        value.remove();
      });
      mapPinAllArray.forEach(function (value) {
        value.remove();
      });


      if (housingRooms.value === 'any') {
        var newArray3 = window.copyArrayElement;
      } else {
        newArray3 = window.arrayElement.filter(function (it) {
          return it.offer.rooms === Number(housingRooms.value);
        });
      }
      mapCardAllArray.forEach(function (value) {
        value.remove();
      });
      mapPinAllArray.forEach(function (value) {
        value.remove();
      });

      if (housingGuests.value === 'any') {
        var newArray4 = window.copyArrayElement;
      } else {
        newArray4 = window.arrayElement.filter(function (it) {
          return it.offer.guests === Number(housingGuests.value);
        });
      }

      mapCardAllArray.forEach(function (value) {
        value.remove();
      });
      mapPinAllArray.forEach(function (value) {
        value.remove();
      });

      var summArray = newArray1.concat(newArray2, newArray3, newArray4);

      var user01 = 0;
      var user02 = 0;
      var user03 = 0;
      var user04 = 0;
      var user05 = 0;
      var user06 = 0;
      var user07 = 0;
      var user08 = 0;
      var user09 = 0;

      summArray.forEach(function (value) {
        if (value.author.avatar === 'img/avatars/user01.png') {
          user01++;
        }
        if (value.author.avatar === 'img/avatars/user02.png') {
          user02++;
        }
        if (value.author.avatar === 'img/avatars/user03.png') {
          user03++;
        }
        if (value.author.avatar === 'img/avatars/user04.png') {
          user04++;
        }
        if (value.author.avatar === 'img/avatars/user05.png') {
          user05++;
        }
        if (value.author.avatar === 'img/avatars/user06.png') {
          user06++;
        }
        if (value.author.avatar === 'img/avatars/user07.png') {
          user07++;
        }
        if (value.author.avatar === 'img/avatars/user08.png') {
          user08++;
        }
        if (value.author.avatar === 'img/avatars/user09.png') {
          user09++;
        }
      });

      var diffNumber = [];
      diffNumber.push(user01, user02, user03, user04, user05, user06, user07, user08, user09);
      var finishArray = [];
      diffNumber.forEach(function callback(value, index) {
        if (value === 4) {
          finishArray.push(window.copyArrayElement[index]);
        }
      });
      window.arrayElement = finishArray;
    });
  };
})();
