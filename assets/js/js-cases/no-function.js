import { cases } from "../cases.js";

function jsNo40() {
  let view = document.getElementById("view");
  let c = cases[40];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------WARNING
  let warning = document.createElement("div");
  hint.textContent = "There is no equivalent function in JS";
  hint.className = "warning";

  view.appendChild(warning);
  view.appendChild(hint);
}

function jsNo28() {
  let view = document.getElementById("view");
  let c = cases[28];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------WARNING
  let warning = document.createElement("div");
  hint.textContent = "There is no equivalent function in JS";
  hint.className = "warning";

  view.appendChild(warning);
  view.appendChild(hint);
}

function jsNo29() {
  let view = document.getElementById("view");
  let c = cases[29];
  view.classList.add("view--0");

  //---------------------------------HINT
  let hint = document.createElement("div");
  hint.textContent = c.hint;
  hint.className = "hint";

  //---------------------------------WARNING
  let warning = document.createElement("div");
  hint.textContent = "There is no equivalent function in JS";
  hint.className = "warning";

  view.appendChild(warning);
  view.appendChild(hint);
}

export { jsNo40, jsNo28, jsNo29 };
