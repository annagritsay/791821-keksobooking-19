'use strict';
(function () {
  var adFormElements = document.querySelectorAll('.ad-form__element');
  var adFormElementsArray = Array.prototype.slice.call(adFormElements);
  var adForm = document.querySelector('.ad-form');
  var address = document.querySelector('#address');
  var price = document.querySelector('#price');
  var mapFilters = document.querySelector('.map__filters');
  var mapPinMain = document.querySelector('.map__pin--main');
  var mapPin = document.querySelector('.map__pins');
  var map = document.querySelector('.map');
  var fieldsets = adForm.querySelectorAll('fieldset');
  var fieldsetsArray = Array.prototype.slice.call(fieldsets);
  var capacitySelect = document.querySelector('#capacity');
  var mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
  var mapPinsArray = Array.prototype.slice.call(mapPins);
  var mapCards = document.querySelectorAll('.map__card');
  var mapCardsArray = Array.prototype.slice.call(mapCards);

  address.setAttribute('value', '570, 375');
  adFormElementsArray.forEach(function (value) {
    value.setAttribute('disabled', true);
  });

  window.providesPossibleFieldOptions(adForm, price);
  window.validatesFormField(adForm, price, capacitySelect);
  window.movePin(map, mapPinMain, address);

  // Функции активации и деактивации карты перенесла в этот файл, так как именно в нем определены общие найденные на странице элементы
  // из функции, например, sendFormData даже параметрами, я не передам их, будет повторный поиск элементов
  window.doInactivityMap = function () {
    // Переменные ниже переопределяются после отрисовки карточек, поэтому их часто приходится искать на странице вновь
    mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinsArray = Array.prototype.slice.call(mapPins);
    mapCards = document.querySelectorAll('.map__card');
    mapCardsArray = Array.prototype.slice.call(mapCards);

    mapCardsArray.forEach(function (value) {
      value.remove();
    });
    mapPinsArray.forEach(function (value) {
      value.remove();
    });
    adForm.classList.add('ad-form--disabled');
    map.classList.add('map--faded');
    mapPinMain.setAttribute('style', 'left: ' + 570 + 'px; ' + 'top: ' + 375 + 'px;');
    address.setAttribute('value', '570, 375');
    mapFilters.classList.add('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.setAttribute('disabled', true);
    });
    adForm.reset();
    mapFilters.reset();
    price.placeholder = '1000';
  };

  window.doActivityMap = function () {
    map.classList.remove('map--faded');
    adForm.classList.remove('ad-form--disabled');
    mapFilters.classList.remove('ad-form--disabled');
    fieldsetsArray.forEach(function (val) {
      val.removeAttribute('disabled', true);
    });
    address.setAttribute('value', '570, 375');
    address.setAttribute('readonly', 'readonly');
    window.getDataCards();
  };

  // Вызывается при каждой фильрации для вывода результата(вынесено в отдельную функцию, чтобы не вызывать каждый раз лишние)
  // вроде валидации, проверки полей и тд(ниже в коде)

  window.createCardsAndPins = function (data) {
    window.createPins(data, mapPinsArray, mapPin);
    window.createCards(data, map, mapCardsArray);
    // Ниже переменные переопределяются после отрисовки данных, по сравнению с объявленными выше.
    mapPins = document.querySelectorAll('.map__pin:not(.map__pin--main)');
    mapPinsArray = Array.prototype.slice.call(mapPins);
    mapCards = document.querySelectorAll('.map__card');
    mapCardsArray = Array.prototype.slice.call(mapCards);

    window.listeningTriggerCards(mapCardsArray, mapPinsArray);
  };

  // Вызывается после загрузки объявлений
  window.callMainEvents = function (data) {
    window.createFilteredPins(mapFilters);
    window.providesPossibleFieldOptions(adForm, price);
    window.validatesFormField(adForm, price, capacitySelect);
    window.createCardsAndPins(data);
  };
})();
