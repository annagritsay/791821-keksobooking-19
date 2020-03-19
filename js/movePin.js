'use strict';
// Перетаскивание метки

(function () {
  window.movePin = function () {
    var mapPin = document.querySelector('.map__pin--main');
    var map = document.querySelector('.map');
    mapPin.addEventListener('mousedown', function (evt) {
      if (map.classList.contains('map--faded')) {
        window.doActivityMap();
      }
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

        var pointLeft = mapPin.offsetLeft - shift.x;
        if (pointLeft < -7) {
          pointLeft = -7;
        }
        if (pointLeft > 1158) {
          pointLeft = 1158;
        }

        mapPin.style.top = (pointTop) + 'px';
        mapPin.style.left = (pointLeft) + 'px';

        var adress1 = pointTop + 12;
        var adress2 = pointLeft + 7;
        window.HashVars.address.setAttribute('value', adress1 + ',' + ' ' + adress2);
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
