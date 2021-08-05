import { cases } from "../cases.js";

function js13() {
  let view = document.getElementById("view");
  let c = cases[13];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------SPELL BUTTON
  let spell = document.createElement("button");
  spell.classList.add("button--evil");
  spell.textContent = "ben zi bena, bluot zi bluoda.";

  view.appendChild(spell);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  document.querySelector(".button--evil").addEventListener("click", () => {
    let bunch = document.createElement("div");
    bunch.classList.add("div--icons");
    let g1 = document.createElement("div");
    g1.textContent = "👹";
    let g2 = document.createElement("div");
    g2.textContent = "👹";
    let g3 = document.createElement("div");
    g3.textContent = "👹";
    bunch.appendChild(g1);
    bunch.appendChild(g2);
    bunch.appendChild(g3);
    view.insertAdjacentElement("afterbegin", bunch);
  });
}

export { js13 };
