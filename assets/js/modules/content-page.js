import { wrapper } from "../main.js";
import { templateContent } from "../templates.js";
import { goToMain, goToCheatList } from "../router.js";
import { cases } from "../cases.js";

function contentPage(e) {
  //If the clicked element has not got the .case class, don't do anything
  if (!e.target.matches(".case")) return;

  //TODO Delete all the previous event listeners
  //   document.getElementById("go-home").removeEventListener("click", goToMain);
  //   document
  //     .getElementById("go-list")
  //     .removeEventListener("click", goToCheatList);
  //   document.getElementById("start").removeEventListener("click", goToContent);

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
  view.innerHTML = "";
  while (view.firstChild) {
    view.removeChild(view.firstChild);
  }

  cases.forEach((c) => {
    if (c.dataCheat == e.target.dataset.id) {
      document.getElementById("js-info").innerHTML = c.js;
      document.getElementById("jq-info").innerHTML = c.jq;
      c.jsFunction();
      document
        .getElementById("change-code")
        .addEventListener("click", jsOrJq(c.jsFunction, c.jqFunction));
    }
  });

  //--------------------------------------EVENT LISTENERS

  document.getElementById("go-home").addEventListener("click", goToMain);
  document.getElementById("go-list").addEventListener("click", goToCheatList);
}

//----------------------------------------------BUTTON JS/JQ

function jsOrJq(a, b) {
  let divs = document.querySelectorAll(".cheat");
  let btn = document.getElementById("change-code");

  //Change the class of the div selected
  for (let div of divs) {
    if (div.classList.contains("cheat--selected")) {
      div.classList.remove("cheat--selected");
    } else if (div.className !== "cheat--selected") {
      div.classList.add("cheat--selected");
    }
  }

  //Change the content of the button
  if (btn.value === "JQuery") {
    btn.textContent = "JavaScript";
    btn.value = "JavaScript";
    //a();
  } else if (btn.value === "JavaScript") {
    btn.textContent = "JQuery";
    btn.value = "JQuery";
    b();
  }
}

export { contentPage };
