import {
  mainTemplate,
  specificTemplate,
  commonTemplate,
} from "./mainTemplates.js";

import {
  vanillaChangeOption,
  vanillaChangeValue,
  vanillaChecked,
  vanillaClickEvent,
  vanillaCursorOverEvent,
  vanillaDoubleClick,
  vanillaImageFails,
  vanillaImageLoad,
  vanillaKeyPressEvent,
  vanillaMousePosition,
  vanillaSubmitEvent,
} from "./vanilla.js";
import {
  jqueryChangeOption,
  jqueryChangeValue,
  jqueryClickEvent,
  jqueryCursorOverEvent,
  jqueryDoubleClick,
  jqueryImageFails,
  jqueryImageLoad,
  jqueryKeyPressEvent,
  jqueryMousePosition,
  jquerySubmitEvent,
} from "./jquery.js";

loadMainPageTemplate();

function loadMainPageTemplate() {
  let body = document.querySelector("body");
  body.innerHTML = "";

  let mainTemplateCopy = mainTemplate;
  body.insertAdjacentHTML("beforeend", mainTemplateCopy);

  let mainNode = document.getElementById("main-template").content;
  let mainCopyNode = document.importNode(mainNode, true);

  body.lastChild.remove();
  body.appendChild(mainCopyNode);

  var navButtons = document.querySelectorAll(".nav-btn");
  navButtons.forEach((navButton) => {
    navButton.addEventListener("click", selectPage);
  });
}

// Create the web Layout
function loadLayout() {
  if (!document.querySelector(".specific")) {
    let mainWrapper = document.getElementById("main-wrapper");

    let newSpecificTemplate = specificTemplate;
    mainWrapper.insertAdjacentHTML("beforeend", newSpecificTemplate);

    let mainNode = document.querySelector("#specific").content;
    let copyNode = document.importNode(mainNode, true);

    document.querySelector("template").remove();
    mainWrapper.appendChild(copyNode);
  }
}

// Choose the template to load from the chosen nav button
function selectPage(e) {
  let dataPage = e.target.dataset.page;

  let title = e.target.textContent;
  if (dataPage == 0) {
    loadMainPageTemplate();
  }
  if (dataPage != 0) {
    loadContent(dataPage);
    printTitle(title);
  }
}

function loadCommonContent() {
  let common = document.getElementById("common");
  common.innerHTML = "";

  let newTemplate = commonTemplate;
  common.insertAdjacentHTML("beforeend", newTemplate);

  let mainNode = document.querySelector(".commonCode").content;
  let copyNode = document.importNode(mainNode, true);

  common.lastChild.remove();

  common.appendChild(copyNode);
}

function selectFunction(page) {
  switch (page) {
    case "1":
      vanillaClickEvent();
      jqueryClickEvent();
      break;

    case "2":
      vanillaDoubleClick();
      jqueryDoubleClick();
      break;

    case "3":
      function addEvent() {
        let v = false;
        let j = false;
        document.addEventListener("keydown", function test(e) {
          if (e.key == "v") {
            vanillaKeyPressEvent();
            v = true;
          } else if (e.key == "j") {
            jqueryKeyPressEvent();
            j = true;
          }
          if (j && v) {
            document.removeEventListener("keydown", test);
            console.log("DELETE KEY EVENT");
          }
        });
      }
      addEvent();
      break;
    case "4":
      vanillaCursorOverEvent();
      jqueryCursorOverEvent();
      break;
    case "5":
      vanillaChangeValue();
      jqueryChangeValue();
      break;

    case "6":
      vanillaImageLoad();
      jqueryImageLoad();
      break;

    case "7":
      vanillaImageFails();
      jqueryImageFails();
      break;

    case "8":
      vanillaSubmitEvent();
      jquerySubmitEvent();
      break;

    case "9":
      vanillaChangeOption();
      jqueryChangeOption();
      break;

    case "10":
      vanillaMousePosition();
      jqueryMousePosition();
      break;

    case "11":
      vanillaChecked();
      vanillaChecked();
      break;

    default:
      console.log("NOO");
      break;
  }
}

function printTitle(title) {
  document.querySelector("#title p").textContent = title;
}
/*
function clearEventListeners () {
  document
}
*/
function loadContent(dataPage) {
  loadMainPageTemplate();
  loadLayout();
  loadCommonContent();
  selectFunction(dataPage);
}

// Events on webpage load

/*
document.addEventListener("DOMContentLoaded", () => {
  alert("VANILLA LOADED");
});

$(window).on("load", () => {
  alert("JQUERY LOADED");
});
*/
