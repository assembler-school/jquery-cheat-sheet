import { cases } from "../cases.js";

function js0() {
  let view = document.getElementById("view");
  let c = cases[0];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------CITIZENS
  let citizens = document.createElement("div");
  citizens.textContent = "👨🏻‍✈️👩🏽‍💼👨🏻‍🔧🤵🏿";
  citizens.className = "div--icons";

  //---------------------------------ZOMBIES
  view.appendChild(citizens);
  view.appendChild(hint);

  let body = document.querySelector("#body");
  body.addEventListener(
    "load",
    setTimeout(function () {
      citizens.textContent = "🧟‍♂️🧟‍♀️🧟‍♂️🧟‍♀️";
    }),
    5000
  );
}

export { js0 };
