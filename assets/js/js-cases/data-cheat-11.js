import { cases } from "../cases.js";

function js11() {
  let view = document.getElementById("view");
  let c = cases[11];
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

  //---------------------------------CHECKBOX
  let chckbx = document.createElement("input");
  chckbx.id = "weapon";
  let def = document.createAttribute("value");
  def.value = "Cross";
  let type = document.createAttribute("type");
  type.value = "checkbox";
  chckbx.setAttributeNode(type);
  chckbx.setAttributeNode(def);
  let button = document.createElement("label");
  let typebtn = document.createAttribute("for");
  typebtn.value = "weapon";
  button.setAttributeNode(typebtn);
  button.textContent = "✝️";

  view.appendChild(bunch);
  view.appendChild(chckbx);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------DISSAPEAR
  let ghosts = document.querySelector(".div--icons");
  document.querySelector("#weapon").addEventListener("change", (e) => {
    if (e.target.checked) {
      ghosts.style.display = "none";
    } else {
      ghosts.style.display = null;
    }
  });
}

export { js11 };
