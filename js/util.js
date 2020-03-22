'use strict';

(function () {
  var ESC_KEYCODE = 27;
  var ENTER_KEYCODE = 13;
  var CODE_SUCCESS = 200;
  var MAX_OFFERS = 5;
  var MAIN_PIN_START_X = '570';
  var MAIN_PIN_START_Y = '375';
  var MAIN_PIN_START_VALUE = MAIN_PIN_START_X + ', ' + MAIN_PIN_START_Y;
  var LOADING_TIMEOUT = 10000;
  var MIN_LENGTH_TITLE = 30;
  var MAX_LENGTH_TITLE = 100;
  var MAX_VALUE_PRICE = 1000000;
  var ROOM_NUMBER_MAX = '100';
  var ROOM_NUMBER_MIN = '0';
  var ALL_CHOISE = 'any';
  var POINT_TOP_MAX = 618;
  var POINT_TOP_MIN = 118;
  var POINT_LEFT_MAX = 1158;
  var POINT_LEFT_MIN = -7;
  var DIFFERENCE_COORDS_X = 7;
  var DIFFERENCE_COORDS_Y = 12;
  var DEBOUNCE_INTERVAL = 300;

  window.util = {
    ESC_KEYCODE: ESC_KEYCODE,
    ENTER_KEYCODE: ENTER_KEYCODE,
    CODE_SUCCESS: CODE_SUCCESS,
    MAX_OFFERS: MAX_OFFERS,
    MAIN_PIN_START_X: MAIN_PIN_START_X,
    MAIN_PIN_START_Y: MAIN_PIN_START_Y,
    MAIN_PIN_START_VALUE: MAIN_PIN_START_VALUE,
    LOADING_TIMEOUT: LOADING_TIMEOUT,
    ALL_CHOISE: ALL_CHOISE,
    ROOM_NUMBER_MIN: ROOM_NUMBER_MIN,
    ROOM_NUMBER_MAX: ROOM_NUMBER_MAX,
    MIN_LENGTH_TITLE: MIN_LENGTH_TITLE,
    MAX_LENGTH_TITLE: MAX_LENGTH_TITLE,
    MAX_VALUE_PRICE: MAX_VALUE_PRICE,
    POINT_TOP_MAX: POINT_TOP_MAX,
    POINT_TOP_MIN: POINT_TOP_MIN,
    POINT_LEFT_MAX: POINT_LEFT_MAX,
    POINT_LEFT_MIN: POINT_LEFT_MIN,
    DIFFERENCE_COORDS_X: DIFFERENCE_COORDS_X,
    DIFFERENCE_COORDS_Y: DIFFERENCE_COORDS_Y,
    DEBOUNCE_INTERVAL: DEBOUNCE_INTERVAL
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
