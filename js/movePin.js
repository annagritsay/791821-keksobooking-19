'use strict';
// Перетаскивание метки

(function () {
  window.movePin = function (map, mapPin, address) {
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
        if (pointTop < window.util.POINT_TOP_MIN) {
          pointTop = window.util.POINT_TOP_MIN;
        }
        if (pointTop > window.util.POINT_TOP_MAX) {
          pointTop = window.util.POINT_TOP_MAX;
        }

        var pointLeft = mapPin.offsetLeft - shift.x;
        if (pointLeft < window.util.POINT_LEFT_MIN) {
          pointLeft = window.util.POINT_LEFT_MIN;
        }
        if (pointLeft > window.util.POINT_LEFT_MAX) {
          pointLeft = window.util.POINT_LEFT_MAX;
        }

        mapPin.style.top = (pointTop) + 'px';
        mapPin.style.left = (pointLeft) + 'px';

        var adress1 = pointTop + window.util.DIFFERENCE_COORDS_Y;
        var adress2 = pointLeft + window.util.DIFFERENCE_COORDS_X;
        address.setAttribute('value', adress2 + ',' + ' ' + adress1);
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
