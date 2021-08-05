import { cases } from "../cases.js";

function js27() {
  let view = document.getElementById("view");
  let c = cases[27];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");

  let g1 = document.createElement("div");
  g1.textContent = "👻";
  let g2 = document.createElement("div");
  g2.textContent = "👹";
  let g3 = document.createElement("div");
  g3.textContent = "🤖";
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  view.appendChild(bunch);
  view.appendChild(hint);

  //---------------------------------APEAR
  let ghosts = document.querySelector(".div--icons");
  ghosts.style.display = "none";
  view.addEventListener("click", () => (ghosts.style.display = "block"));
}

export { js27 };
