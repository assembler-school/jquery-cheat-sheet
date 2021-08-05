import { cases } from "../cases.js";

function js23() {
  let view = document.getElementById("view");
  let c = cases[23];
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
  button.disabled = true;
  button.textContent = "🩸";
  document.querySelector(".button--evil");

  let cross = document.createElement("button");
  cross.classList.add("button--evil");
  cross.id = "button";
  cross.textContent = "Drink the blood!";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(cross);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let wolf = document.querySelector(".input--good");
  document.querySelector(".button--evil").addEventListener("click", () => {
    wolf.textContent = "🧛🏻‍♂️";
    wolf.className = "input";
  });
  document.querySelector("#button").addEventListener("click", () => {
    document.querySelector(".button--evil").disabled = false;
  });
}

export { js23 };
