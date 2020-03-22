'use strict';

(function () {
  var fragmentCard = document.createDocumentFragment();
  var templateCard = document.querySelector('#card');
  var mapCard = templateCard.content.querySelector('.popup');
  var filtersContainer = document.querySelector('.map__filters-container');

  var createCard = function (card) {
    var elementCard = mapCard.cloneNode(true);
    var popupFeature = elementCard.querySelectorAll('.popup__feature');
    var popupPhotos = elementCard.querySelector('.popup__photos');
    var popupPhotoCloneNode;
    var popupPhoto = elementCard.querySelector('.popup__photo');

    elementCard.querySelector('.popup__avatar').src = card.author.avatar;
    elementCard.querySelector('.popup__title').textContent = card.offer.title;
    elementCard.querySelector('.popup__text--address').textContent = card.offer.address;
    elementCard.querySelector('.popup__text--price').textContent = card.offer.price + ' ₽/ночь';
    elementCard.querySelector('.popup__type').textContent = window.HashHouse[card.offer.type].name || '';
    elementCard.querySelector('.popup__text--capacity').textContent = card.offer.rooms + ' комнаты для ' + card.offer.guests + ' гостей';
    elementCard.querySelector('.popup__text--time').textContent = 'Заезд после ' + card.offer.checkin + ' выезд до ' + card.offer.checkout;
    elementCard.setAttribute('style', 'display: ' + 'none' + ';');

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
      // Оставила здесь for, мне нужно идти с 1 индекса
      for (var i = 1; i < card.offer.photos.length; i++) {
        popupPhotoCloneNode = elementCard.querySelector('.popup__photo').cloneNode(true);
        popupPhotoCloneNode.src = card.offer.photos[i];
        popupPhotos.appendChild(popupPhotoCloneNode);
      }
    } else {
      popupPhoto.setAttribute('style', 'display: ' + 'none' + ';');
    }
    fragmentCard.appendChild(elementCard);
  };

  /*  Функция создания всех карточек  */
  window.createCards = function (dataCards, map, mapCardsArray) {
    if (mapCardsArray.length > 0) {
      mapCardsArray.forEach(function (value) {
        value.remove();
      });
    }
    for (var index = 0; index < dataCards.length && index < window.util.MAX_OFFERS; index++) {
      createCard(dataCards[index]);
    }
    map.insertBefore(fragmentCard, filtersContainer);
  };

})();
