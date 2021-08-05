import { cases } from "../cases.js";

function js25() {
  let view = document.getElementById("view");
  let c = cases[25];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------DEMONS
  let bunch = document.createElement("div");
  bunch.classList.add("div--icons");
  let g1 = document.createElement("div");
  g1.textContent = "👹";
  g1.classList.add("citizen");
  let g2 = document.createElement("div");
  g2.textContent = "👹";
  g2.classList.add("citizen");
  let g3 = document.createElement("div");
  g3.textContent = "👹";
  g3.classList.add("citizen");
  bunch.appendChild(g1);
  bunch.appendChild(g2);
  bunch.appendChild(g3);

  let book = document.createElement("img");
  book.classList.add("img--spell");
  book.src = "./assets/img/candle.svg";

  //---------------------------------CURSED BUTTON
  let button = document.createElement("button");
  button.classList.add("button--good");
  button.textContent = "✝️ Bless the place ✝️";

  view.appendChild(bunch);
  view.appendChild(book);
  view.appendChild(button);
  view.appendChild(hint);

  //---------------------------------BUTTON LISTENER
  let ghosts = document.querySelector(".div--icons");
  document.querySelector(".button--good").addEventListener("click", () => {
    let candle = document.querySelector(".img--spell");
    candle.src = "./assets/img/cross.svg";
    ghosts.style.display = "none";
  });
}

export { js25 };
