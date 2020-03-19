'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE
  };
  window.HashPrice = {
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
  window.HashHouse = {
    house: {
      name: 'Дом',
      placeholder: '5000'
    },
    bungalo: {
      name: 'Бунгало',
      placeholder: '0'
    },
    flat: {
      name: 'Квартира',
      placeholder: '1000'
    },
    palace: {
      name: 'Дворец',
      placeholder: '10 000'
    }
  };
})();
