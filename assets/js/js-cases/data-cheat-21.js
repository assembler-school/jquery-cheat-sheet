import { cases } from "../cases.js";

function js21() {
  let view = document.getElementById("view");
  let c = cases[21];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------DEMONS
  let bunch = document.createElement("div");
  bunch.classList.add("input--good");
  let g1 = document.createElement("div");
  g1.textContent = "👨🏻‍🌾";
  g1.classList.add("citizen");
  bunch.appendChild(g1);

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--evil");
  button.textContent = "🌕";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let wolf = document.querySelector(".input--good");
  document.querySelector(".button--evil").addEventListener("click", () => {
    wolf.classList.toggle("input--good");
    if (wolf.className == "") {
      wolf.textContent = "🐺";
    } else {
      wolf.textContent = "👨🏻‍🌾";
    }
  });
}

export { js21 };
