'use strict';

(function () {
  var fragmentCard = document.createDocumentFragment();
  var templateCard = document.querySelector('#card');
  var mapCard = templateCard.content.querySelector('.popup');

  var createCard = function (card) {
    var elementCard = mapCard.cloneNode(true);
    var popupFeature = elementCard.querySelectorAll('.popup__feature');

    elementCard.querySelector('.popup__avatar').src = card.author.avatar;
    elementCard.querySelector('.popup__title').textContent = card.offer.title;
    elementCard.querySelector('.popup__text--address').textContent = card.offer.address;
    elementCard.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
    elementCard.setAttribute('style', 'display: ' + 'none' + ';');
    elementCard.querySelector('.popup__type').textContent = window.HashHouse[card.offer.type].name || '';
    elementCard.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    elementCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ' выезд до ' + card.offer.checkout;

    //  Скрываю все классы у преимуществ
    popupFeature.forEach(function (item) {
      item.setAttribute('style', 'display: ' + 'none' + ';');
    });

    if (card.offer.features.length > 0) {
      //  Добавляю классы имеющихся преимуществ
      card.offer.features.forEach(function (item) {
        elementCard.querySelector('.popup__feature' + '--' + item).setAttribute('style', 'display: ' + 'inline-block' + ';');
      });
      elementCard.querySelector('.popup__description').textContent = card.offer.description;
    }

    if (card.offer.photos.length > 0) {
      elementCard.querySelector('.popup__photo').src = card.offer.photos[0];
      card.offer.photos.forEach(function (item) {
        var popupPhoto = elementCard.querySelector('.popup__photo').cloneNode(true);
        popupPhoto.src = item;
        elementCard.querySelector('.popup__photos').appendChild(popupPhoto);
      });
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

    dataCards.map(function (item) {
      createCard(item);
    });
    containerCard.insertBefore(fragmentCard, filtersContainer);
  };

})();
