import { cases } from "../cases.js";

function js38() {
  let view = document.getElementById("view");
  let c = cases[38];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------INPUTS

  let spell = document.createElement("input");
  spell.classList.add("input--good");
  let def = document.createAttribute("value");
  def.value = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  spell.setAttributeNode(def);

  let spell1 = document.createElement("input");
  spell1.classList.add("input--good");
  let def1 = document.createAttribute("value");
  def1.value = "Pater Noster, qui es in caelis, sanctificetur nomen tuum.";
  spell1.setAttributeNode(def1);

  //---------------------------------BUTTON

  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "📕";

  view.appendChild(spell);
  view.appendChild(spell1);
  view.appendChild(button);
  view.appendChild(hint);

  let btn = document.querySelector(".button--good");
  let prayer = document.querySelector(".input--good");

  //---------------------------------EVENT LISTENERS

  btn.addEventListener("click", () => {
    alert(prayer.value);
  });
}

export { js38 };
