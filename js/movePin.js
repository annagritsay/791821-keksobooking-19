'use strict';
// Перетаскивание метки

(function () {
  window.movePin = function () {
    var mapPin = document.querySelector('.map__pin--main');
    var map = document.querySelector('.map');
    var addressId = document.querySelector('#address');

    mapPin.addEventListener('mousedown', function (evt) {
      evt.preventDefault();

      var startCoords = {
        x: evt.clientX,
        y: evt.clientY
      };
      var onMouseMove = function (moveEvt) {
        moveEvt.preventDefault();
        var shift = {
          x: startCoords.x - moveEvt.clientX,
          y: startCoords.y - moveEvt.clientY
        };
        startCoords = {
          x: moveEvt.clientX,
          y: moveEvt.clientY
        };
        var pointTop = mapPin.offsetTop - shift.y;
        if (pointTop < 118) {
          pointTop = 118;
        }
        if (pointTop > 618) {
          pointTop = 618;
        }
        // Вычисляет ширину карты (для правой границы), но в таком случае метка тупит на границе, дергается, решить эту проблему можно, но подольше по времени
        // var card = document.querySelector('.map__pins');
        // var widthMap = card.clientWidth || card.offsetWidth;

        var pointLeft = mapPin.offsetLeft - shift.x;
        if (pointLeft < -7) {
          pointLeft = -7;
        }
        if (pointLeft > 1158) {
          pointLeft = 1158;
        }

        mapPin.style.top = (pointTop) + 'px';
        mapPin.style.left = (pointLeft) + 'px';
        if (map.classList.contains('map--faded')) {
          window.doActivityMap();
        }
        var adress1 = pointTop + 12;
        var adress2 = pointLeft + 7;
        addressId.setAttribute('value', adress1 + ',' + ' ' + adress2);
      };

      var onMouseUp = function (upEvt) {
        upEvt.preventDefault();

        document.removeEventListener('mousemove', onMouseMove);
        document.removeEventListener('mouseup', onMouseUp);
      };

      document.addEventListener('mousemove', onMouseMove);
      document.addEventListener('mouseup', onMouseUp);
    });
  };

})();
