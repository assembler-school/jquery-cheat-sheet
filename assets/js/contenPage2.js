import { wrapper } from "../main.js";
import { templateContent } from "../templates.js";
import { goToMain, goToCheatList, goToContent } from "../router.js";
import { cases } from "../cases.js";

function contentPage2() {
  //If the clicked element has not got the .case class, don't do anything
  if (!e.target.matches(".case")) return;

  goToContent();

  //TODO Delete all the previous event listeners

  //--------------------------------------TEMPLATE INJECTION

  wrapper.innerHTML = "";
  wrapper.insertAdjacentHTML("beforeend", templateContent);

  let usernameNode = document.getElementById("content").content;
  let copyNode = document.importNode(usernameNode, true);

  wrapper.innerHTML = "";

  wrapper.appendChild(copyNode);

  //--------------------------------------PAGE FILLED WITH CASE'S TRAITS

  // We need to clean the view section before injecting new elements
  let view = document.getElementById("view");
  let jsCheat = document.getElementById("JS-method");
  let jqCheat = document.getElementById("JQ-method");
  view.innerHTML = "";
  while (view.firstChild) {
    view.removeChild(view.firstChild);
  }

  cases.forEach((c) => {
    if (c.dataCheat == e.target.dataset.id) {
      //c.jqFunction();
      let id = c.dataCheat;
      document.getElementById("js-info").innerHTML = c.js;
      document.getElementById("jq-info").innerHTML = c.jq;
      c.jsFunction();
      document
        .getElementById("show-js")
        .addEventListener("click", function (c) {
          if (jqCheat.classList.contains("cheat--selected"))
            jqCheat.classList.remove("cheat--selected");
          jsCheat.classList.add("cheat--selected");
        });
      document
        .getElementById("show-jq")
        .addEventListener("click", function (c) {
          if (jsCheat.classList.contains("cheat--selected"))
            jsCheat.classList.remove("cheat--selected");
          jqCheat.classList.add("cheat--selected");
        });
    }
  });

  //--------------------------------------EVENT LISTENERS

  document.getElementById("go-home").addEventListener("click", goToMain);
  document.getElementById("go-list").addEventListener("click", goToCheatList);
}

export { contentPage2 };
