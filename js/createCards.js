'use strict';

(function () {
  var fragmentCard = document.createDocumentFragment();

  /*  Функция создания одной карточки  */
  var createCard = function (indexCard, dataCards) {
    var templateCard = document.querySelector('#card');
    var mapCard = templateCard.content.querySelector('.popup');
    var elementCard = mapCard.cloneNode(true);
    var popupFeature = elementCard.querySelectorAll('.popup__feature');

    elementCard.querySelector('.popup__avatar').src = dataCards[indexCard].author.avatar;
    elementCard.querySelector('.popup__title').textContent = dataCards[indexCard].offer.title;
    elementCard.querySelector('.popup__text--address').textContent = dataCards[indexCard].offer.address;
    elementCard.querySelector('.popup__text--price').textContent = dataCards[indexCard].offer.price + ' ₽/ночь';
    elementCard.setAttribute('style', 'display: ' + 'none' + ';');

    if (dataCards[indexCard].offer.type === 'palace') {
      var typeVar = 'Дворец';
    }
    if (dataCards[indexCard].offer.type === 'flat') {
      typeVar = 'Квартира';
    }
    if (dataCards[indexCard].offer.type === 'house') {
      typeVar = 'Дом';
    }
    if (dataCards[indexCard].offer.type === 'bungalo') {
      typeVar = 'Бунгало';
    }

    elementCard.querySelector('.popup__type').textContent = typeVar;
    elementCard.querySelector('.popup__text--capacity').textContent = dataCards[indexCard].offer.rooms + ' комнаты для ' + dataCards[indexCard].offer.guests + ' гостей';
    elementCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + dataCards[indexCard].offer.checkin + ' выезд до ' + dataCards[indexCard].offer.checkout;

    //  Скрываю все классы у преимуществ
    for (var indexFeature = 0; indexFeature < popupFeature.length; indexFeature++) {
      popupFeature[indexFeature].setAttribute('style', 'display: ' + 'none' + ';');
    }

    if (dataCards[indexCard].offer.features.length > 0) {
      //  Добавляю классы имеющихся преимуществ
      for (var indexFeatureAvailable = 0; indexFeatureAvailable < dataCards[indexCard].offer.features.length; indexFeatureAvailable++) {
        elementCard.querySelector('.popup__feature' + '--' + dataCards[indexCard].offer.features[indexFeatureAvailable]).setAttribute('style', 'display: ' + 'inline-block' + ';');
      }
      elementCard.querySelector('.popup__description').textContent = dataCards[indexCard].offer.description;
    }

    if (dataCards[indexCard].offer.photos.length > 0) {
      elementCard.querySelector('.popup__photo').src = dataCards[indexCard].offer.photos[0];
      for (var i = 1; i < dataCards[indexCard].offer.photos.length; i++) {
        var popupPhoto = elementCard.querySelector('.popup__photo').cloneNode(true);
        popupPhoto.src = dataCards[indexCard].offer.photos[i];
        elementCard.querySelector('.popup__photos').appendChild(popupPhoto);
      }
    } else {
      elementCard.querySelector('.popup__photo').setAttribute('style', 'display: ' + 'none' + ';');
    }
    fragmentCard.appendChild(elementCard);
  };

  /*  Функция создания всех карточек  */
  window.createCards = function (dataCards) {
    var mapCards = document.querySelectorAll('.map__card');
    var mapCardsArray = Array.prototype.slice.call(mapCards);
    if (mapCardsArray.length > 0) {
      mapCardsArray.forEach(function (value) {
        value.remove();
      });
    }
    var containerCard = document.querySelector('.map');
    var filtersContainer = document.querySelector('.map__filters-container');

    for (var indexCard = 0; indexCard < dataCards.length - 1 && indexCard < 5; indexCard++) {
      createCard(indexCard, dataCards);
    }
    containerCard.insertBefore(fragmentCard, filtersContainer);
  };

})();
