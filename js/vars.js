'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var address = document.querySelector('#address');
  var price = document.querySelector('#price');
  var mapFilters = document.querySelector('.map__filters');
  var mapPin = document.querySelector('.map__pin--main');
  var conteiner = document.querySelector('main');

  window.HashVars = {
    adForm: adForm,
    address: address,
    price: price,
    mapFilters: mapFilters,
    mapPin: mapPin,
    conteiner: conteiner,
  };
})();
