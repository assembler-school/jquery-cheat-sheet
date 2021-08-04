import { cases } from "../cases.js";

function js7() {
  let view = document.getElementById("view");
  let c = cases[7];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  bunch.style.display = "none";
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
  let cross = document.createElement("img");
  cross.classList.add("img--spell");

  let spell = document.createElement("input");
  spell.classList.add("input");
  let def = document.createAttribute("value");
  def.value = "./assets/img/cross.svg";
  spell.setAttributeNode(def);

  view.appendChild(cross);
  view.appendChild(bunch);
  view.appendChild(spell);
  view.appendChild(hint);

  let input = document.querySelector(".input");
  let img = document.querySelector(".img--spell");
  img.src = input.getAttribute("value");

  //---------------------------------EVENT LISTENERS
  let ghosts = document.querySelector(".div--icons");

  input.addEventListener("input", () => {
    img.src = input.value;
  });
  img.addEventListener("error", () => {
    ghosts.style.display = "block";
  });
}

export { js7 };
