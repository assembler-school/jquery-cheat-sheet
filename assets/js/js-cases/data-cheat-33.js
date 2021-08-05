import { cases } from "../cases.js";

function js33() {
  let view = document.getElementById("view");
  let c = cases[33];
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
  g2.classList.add("spell");
  let g3 = document.createElement("p");
  g3.textContent = "ben zi bena, bluot zi bluoda.";
  g3.classList.add("spell");
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

  document.querySelector(".button--evil").addEventListener("click", () => {
    let spells = document.getElementsByClassName("spell");
    for (let s of spells) {
      s.style.fontWeight = "bold";
    }
  });
}

export { js33 };
