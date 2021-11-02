function changeGame() {
  const btn = document.getElementsByClassName("button")[0];
  const icons = document.querySelectorAll(".table__cell-icon");

  for (let item of icons) {
    if (item.parentElement.parentElement.classList[0] == "table") {
      item.style.display = "block";
    }

    if (item.parentElement.parentElement.classList[0] == "table_off") {
      item.style.display = "none";
    }
  }

  btn.addEventListener("click", () => {
    for (let icon of icons) {
      icon.style.display = icon.style.display == "none" ? "block" : "none";
    }

    btn.textContent =
      btn.textContent == "Сменить игру на шашки"
        ? "Сменить игру на шахматы"
        : "Сменить игру на шашки";

    const table_off = document.querySelector(".table_off"),
      table = document.querySelector(".table");

    table.classList.remove("table");
    table.classList.add("table_off");

    table_off.classList.remove("table_off");
    table_off.classList.add("table");
  });
}

export default changeGame;
