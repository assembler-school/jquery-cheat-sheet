import { cases } from "../cases.js";

function js31() {
  let view = document.getElementById("view");
  let c = cases[31];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------SPELLS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("p");
  g1.textContent = "ben zi bena, bluot zi bluoda.";
  g1.classList.add("spell");
  let g2 = document.createElement("p");
  g2.textContent = "ben zi bena, bluot zi bluoda.";
  let g3 = document.createElement("p");
  g3.textContent = "ben zi bena, bluot zi bluoda.";
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--evil");
  button.textContent = "📖";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghost = document.querySelector(".spell");
  document.querySelector(".button--evil").addEventListener("click", () => {
    ghost.parentElement.style.fontWeight = "bold";
  });
}

export { js31 };
