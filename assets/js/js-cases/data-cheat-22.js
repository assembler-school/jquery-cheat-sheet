import { cases } from "../cases.js";

function js22() {
  let view = document.getElementById("view");
  let c = cases[22];
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
  button.textContent = "🩸";

  let cross = document.createElement("button");
  cross.classList.add("button--good");
  cross.textContent = "✝️";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(cross);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let wolf = document.querySelector(".input--good");
  document.querySelector(".button--evil").addEventListener("click", () => {
    wolf.textContent = "🧛🏻‍♂️";
  });
  document.querySelector(".button--good").addEventListener("click", () => {
    document.querySelector(".button--evil").disabled = true;
  });
}

export { js22 };
