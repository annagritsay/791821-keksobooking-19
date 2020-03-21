// Создание пина
'use strict';
(function () {
  var template = document.querySelector('#pin');
  var button = template.content.querySelector('button');
  var fragment = document.createDocumentFragment();

  /*  Функция создания одной метки на карте  */
  var createPin = function (indexButton, dataCards) {
    var element = button.cloneNode(true);
    element.setAttribute('style', 'left: ' + dataCards[indexButton].location.x + 'px; ' + 'top: ' + dataCards[indexButton].location.y + 'px;');
    element.querySelector('img').alt = dataCards[indexButton].offer.title;
    element.querySelector('img').src = dataCards[indexButton].author.avatar;
    fragment.appendChild(element);
  };

  /*  Функция создания всех меток на карте  */
  window.createPins = function (dataCards, mapPinsArray, mapPin) {
    if (mapPinsArray.length > 0) {
      mapPinsArray.forEach(function (value) {
        value.remove();
      });
    }
    for (var indexButton = 0; indexButton < dataCards.length && indexButton < 5; indexButton++) {
      createPin(indexButton, dataCards);
    }
    mapPin.appendChild(fragment);
  };
})();
