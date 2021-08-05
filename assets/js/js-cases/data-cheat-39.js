import { cases } from "../cases.js";

function js39() {
  let view = document.getElementById("view");
  let c = cases[39];
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
  g2.textContent = "👻";
  let g3 = document.createElement("div");
  g3.textContent = "👻";
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "✝️ Vade Retro! ✝️";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------DISSAPEAR
  let ghosts = document.querySelector(".div--icons");
  // var node = document.getElementById('parent');
  // node.innerHTML = "";
  // var node= document.getElementById("parent");
  // while (node.firstChild) {
  // node.removeChild(myNode.firstChild);}
  document.querySelector(".button--good").addEventListener("click", () => {
    ghosts.innerHTML = "";
    while (ghosts.firstChild) {
      ghosts.removeChild(ghosts.firstChild);
    }
  });
}

export { js39 };
