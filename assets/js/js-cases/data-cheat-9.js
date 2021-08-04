import { cases } from "../cases.js";

function js9() {
  let view = document.getElementById("view");
  let c = cases[9];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");

  //---------------------------------SELECT
  let spell = document.createElement("select");
  spell.classList.add("button--evil");

  let option1 = document.createElement("option");
  let val = document.createAttribute("value");
  val.value = "ghost";
  option1.setAttributeNode(val);
  option1.textContent = "Ghost";
  let option2 = document.createElement("option");
  let val1 = document.createAttribute("value");
  val1.value = "demon";
  option2.setAttributeNode(val1);
  option2.textContent = "Demon";
  let option3 = document.createElement("option");
  let val2 = document.createAttribute("value");
  val2.value = "vampire";
  option3.setAttributeNode(val2);
  option3.textContent = "Vampire";
  let option4 = document.createElement("option");
  let val3 = document.createAttribute("value");
  val3.value = "robot";
  option4.setAttributeNode(val3);
  option4.textContent = "Robot";

  spell.appendChild(option1);
  spell.appendChild(option2);
  spell.appendChild(option3);
  spell.appendChild(option4);

  view.appendChild(bunch);
  view.appendChild(spell);
  view.appendChild(hint);

  //---------------------------------DISSAPEAR
  let ghosts = document.querySelector(".div--icons");
  document
    .querySelector(".button--evil")
    .addEventListener("change", function (e) {
      switch (e.target.value) {
        case "ghost":
          let g1 = document.createElement("div");
          g1.textContent = "👻";
          ghosts.appendChild(g1);
          break;
        case "demon":
          let g2 = document.createElement("div");
          g2.textContent = "👹";
          ghosts.appendChild(g2);
          break;
        case "vampire":
          let g3 = document.createElement("div");
          g3.textContent = "🧛🏻‍♂️";
          ghosts.appendChild(g3);
          break;
        case "robot":
          let g4 = document.createElement("div");
          g4.textContent = "🤖";
          ghosts.appendChild(g4);
          break;
        default:
          break;
      }
    });
}

export { js9 };
