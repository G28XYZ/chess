function chessFunc() {
  const chess = document.getElementsByClassName("table__cell-icon");

  for (let elem of chess) {
    elem.onmousedown = function (e) {
      let coords = getCoords(elem);
      let shiftX = e.pageX - coords.left;
      let shiftY = e.pageY - coords.top;

      elem.style.position = "absolute";
      document.body.appendChild(elem);
      moveAt(e);

      elem.style.zIndex = 1000; // над другими элементами

      function moveAt(e) {
        elem.style.left = e.pageX - shiftX + "px";
        elem.style.top = e.pageY - shiftY + "px";
      }

      document.onmousemove = function (e) {
        moveAt(e);
      };

      elem.onmouseup = function () {
        document.onmousemove = null;
        elem.onmouseup = null;
      };
    };

    elem.ondragstart = function () {
      return false;
    };

    function getCoords(elem) {
      // кроме IE8-
      var box = elem.getBoundingClientRect();
      return {
        top: box.top + pageYOffset,
        left: box.left + pageXOffset,
      };
    }
  }
}

export default chessFunc;
