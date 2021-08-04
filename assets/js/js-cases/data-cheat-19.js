import { cases } from "../cases.js";

function js19() {
  let view = document.getElementById("view");
  let c = cases[19];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------DEMONS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("div");
  g1.textContent = "👷🏻‍♂️";
  g1.classList.add("citizen");
  let g2 = document.createElement("div");
  g2.textContent = "👩🏽‍⚖️";
  g2.classList.add("citizen");
  let g3 = document.createElement("div");
  g3.textContent = "👨🏻‍🌾";
  g3.classList.add("citizen");
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  let vaccine = document.createElement("div");
  vaccine.textContent = "💉";

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--evil");
  button.textContent = "🧬 Spread the virus 🧬";

  view.appendChild(bunch);
  view.appendChild(vaccine);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghosts = document.querySelector(".div--icons");
  document.querySelector(".button--evil").addEventListener("click", () => {
    let virus = vaccine.cloneNode(true);
    ghosts.appendChild(virus);
    for (let v of document.querySelectorAll(".citizen")) {
      v.textContent = "🧟‍♂️";
    }
  });
}

export { js19 };
