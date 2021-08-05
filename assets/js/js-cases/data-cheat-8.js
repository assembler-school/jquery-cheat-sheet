import { cases } from "../cases.js";

function js8() {
  let view = document.getElementById("view");
  let c = cases[8];
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

  //---------------------------------FORM
  let form = document.createElement("form");
  form.id = "form";
  let spell = document.createElement("input");
  spell.classList.add("input");
  let def = document.createAttribute("value");
  def.value = "";
  let type = document.createAttribute("type");
  type.value = "text";
  spell.setAttributeNode(type);
  spell.setAttributeNode(def);
  let button = document.createElement("button");
  button.classList.add("button--evil");
  let typebtn = document.createAttribute("type");
  typebtn.value = "text";
  button.setAttributeNode(typebtn);
  button.textContent = "Submit Spell";
  form.appendChild(spell);
  form.appendChild(button);

  view.appendChild(bunch);
  view.appendChild(form);
  view.appendChild(hint);

  //---------------------------------DISSAPEAR
  let ghosts = document.querySelector(".div--icons");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    ghosts.style.display = "block";
  });
}

export { js8 };
