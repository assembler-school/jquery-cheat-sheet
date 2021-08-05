import { cases } from "../cases.js";

function js6() {
  let view = document.getElementById("view");
  let c = cases[6];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
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

  //---------------------------------HOLY CROSS
  let spell = document.createElement("button");
  spell.classList.add("button--good");
  spell.textContent = "Summon Cross";

  view.appendChild(bunch);
  view.appendChild(spell);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghosts = document.querySelector(".div--icons");
  spell.addEventListener("click", () => {
    let cross = document.createElement("img");
    cross.classList.add("img--spell");
    cross.src = "./assets/img/cross.svg";
    view.insertAdjacentElement("afterbegin", cross);
    cross.addEventListener("load", () => (ghosts.style.display = "none"));
  });
}

export { js6 };
