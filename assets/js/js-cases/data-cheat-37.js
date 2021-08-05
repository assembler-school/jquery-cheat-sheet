import { cases } from "../cases.js";

function js37() {
  let view = document.getElementById("view");
  let c = cases[37];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------GHOSTS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("a");
  g1.textContent = "👹";
  g1.href = "#";
  g1.classList.add("a");
  let g2 = document.createElement("a");
  g2.textContent = "👹";
  g2.href = "#";
  g2.classList.add("a");
  let g3 = document.createElement("a");
  g3.textContent = "👹";
  g3.href = "#";
  g3.classList.add("a");
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  //---------------------------------HOLY CROSS

  let button = document.createElement("button");
  button.classList.add("button--evil");
  button.textContent = "😈";

  view.appendChild(bunch);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------EVENT LISTENERS
  let a = document.querySelector(".div--icons").firstChild;
  let btn = document.querySelector(".button--evil");
  btn.addEventListener("click", () => {
    console.log(a);
    a.href = "https://www.facebook.com/search/top?q=barack%20obama";
  });
}

export { js37 };
