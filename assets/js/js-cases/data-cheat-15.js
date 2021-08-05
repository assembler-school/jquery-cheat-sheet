import { cases } from "../cases.js";

function js15() {
  let view = document.getElementById("view");
  let c = cases[15];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------DEMONS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("div");
  g1.textContent = "🧛🏼‍♀️";
  g1.classList.add("vampire");
  let g2 = document.createElement("div");
  g2.textContent = "🧛🏼‍♀️";
  g2.classList.add("vampire");
  let g3 = document.createElement("div");
  g3.textContent = "🧛🏻‍♂️";
  g3.classList.add("vampire");
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------BLESSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "✝️ Abbandone this world! ✝️";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghosts = document.querySelector(".div--icons");
  document.querySelector(".button--good").addEventListener("click", () => {
    let garlic = document.createElement("div");
    garlic.textContent = "🧄";
    ghosts.appendChild(garlic);
    for (let v of document.querySelectorAll(".vampire")) {
      v.remove();
    }
  });
}

export { js15 };
