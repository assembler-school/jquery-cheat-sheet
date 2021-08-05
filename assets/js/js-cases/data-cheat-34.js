import { cases } from "../cases.js";

function js34() {
  let view = document.getElementById("view");
  let c = cases[34];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------SPELLS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("p");
  g1.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  let g2 = document.createElement("p");
  g2.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  g2.id = "prayer";
  let g3 = document.createElement("p");
  g3.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "📖";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER

  document.querySelector(".button--good").addEventListener("click", () => {
    let prayer = document.getElementById("prayer");
    prayer.style.fontWeight = "bold";
  });
}

export { js34 };
