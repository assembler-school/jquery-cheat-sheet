import { cases } from "../cases.js";

function js14() {
  let view = document.getElementById("view");
  let c = cases[14];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------DEMONS
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

  //---------------------------------BLESSED BUTTON
  let spell = document.createElement("h2");
  spell.classList.add("input");
  spell.textContent = "ben zi bena, bluot zi bluoda.";

  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "✝️ Abbandone this world! ✝️";

  view.appendChild(bunch);
  view.appendChild(spell);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghosts = document.querySelector(".div--icons");
  document.querySelector(".button--good").addEventListener("click", () => {
    document.querySelector(".input").remove();
    ghosts.style.display = "none";
  });
}

export { js14 };
