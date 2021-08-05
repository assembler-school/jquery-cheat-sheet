import { cases } from "../cases.js";

function js35() {
  let view = document.getElementById("view");
  let c = cases[35];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------SPELLS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  bunch.style.display = "none";
  let g1 = document.createElement("p");
  g1.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  g1.classList.add("prayer");
  let g2 = document.createElement("p");
  g2.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  g2.classList.add("prayer");
  let g3 = document.createElement("p");
  g3.textContent = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  g3.classList.add("prayer");
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "📕";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let bible = document.querySelector(".button--good");
  bible.addEventListener("click", () => {
    bible.textContent = "📖";
    let prayers = document.querySelectorAll(".prayer");
    document.querySelector(".div--icons").style.display = "block";
    for (let p of prayers) {
      p.style.color = "blue";
    }
  });
}

export { js35 };
