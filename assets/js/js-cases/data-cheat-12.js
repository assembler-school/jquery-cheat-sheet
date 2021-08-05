import { cases } from "../cases.js";

function js12() {
  let view = document.getElementById("view");
  let c = cases[12];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");

  //---------------------------------UNORDERED LIST
  let army = document.createElement("ul");
  army.classList.add("button--evil");

  let option1 = document.createElement("li");
  option1.textContent = "Ghost";
  let option2 = document.createElement("li");
  option2.textContent = "Demon";
  let option3 = document.createElement("li");
  option3.textContent = "Vampire";
  let option4 = document.createElement("li");
  option4.textContent = "Robot";

  army.appendChild(option1);
  army.appendChild(option2);
  army.appendChild(option3);
  army.appendChild(option4);

  view.appendChild(bunch);
  view.appendChild(army);
  view.appendChild(hint);

  //---------------------------------APPEAR
  let ghosts = document.querySelector(".div--icons");
  document.querySelector("ul").addEventListener("click", function (e) {
    switch (e.target.textContent) {
      case "Ghost":
        let g1 = document.createElement("div");
        g1.textContent = "👻";
        ghosts.appendChild(g1);
        break;
      case "Demon":
        let g2 = document.createElement("div");
        g2.textContent = "👹";
        ghosts.appendChild(g2);
        break;
      case "Vampire":
        let g3 = document.createElement("div");
        g3.textContent = "🧛🏻‍♂️";
        ghosts.appendChild(g3);
        break;
      case "Robot":
        let g4 = document.createElement("div");
        g4.textContent = "🤖";
        ghosts.appendChild(g4);
        break;
      default:
        break;
    }
  });
}

export { js12 };
