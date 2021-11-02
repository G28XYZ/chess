function chessFunc() {
  const chess = document.getElementsByClassName("table__cell-icon");

  for (let elem of chess) {
    elem.onmousedown = function (e) {
      // 1. отследить нажатие

      // подготовить к перемещению
      // 2. разместить на том же месте, но в абсолютных координатах
      elem.style.position = "absolute";
      moveAt(e);
      // переместим в body, чтобы мяч был точно не внутри position:relative
      document.body.appendChild(elem);

      elem.style.zIndex = 1000; // показывать мяч над другими элементами

      // передвинуть мяч под координаты курсора
      // и сдвинуть на половину ширины/высоты для центрирования
      function moveAt(e) {
        elem.style.left = e.pageX - elem.offsetWidth / 2 + "px";
        elem.style.top = e.pageY - elem.offsetHeight / 2 + "px";
      }

      // 3, перемещать по экрану
      document.onmousemove = function (e) {
        moveAt(e);
      };

      // 4. отследить окончание переноса
      elem.onmouseup = function () {
        document.onmousemove = null;
        elem.onmouseup = null;
      };

      elem.ondragstart = function () {
        return false;
      };
    };
  }
}

export default chessFunc;
