import {
  mainTemplate,
  specificTemplate,
  commonTemplate,
} from "./mainTemplates.js";

import {
  vanillaAddClass,
  vanillaAddDisabled,
  vanillaAnimate,
  vanillaAppend,
  vanillaChangeHref,
  vanillaChangeOption,
  vanillaChangeValue,
  vanillaChecked,
  vanillaClassElements,
  vanillaClickEvent,
  vanillaClone,
  vanillaCreateAfter,
  vanillaCreateBefore,
  vanillaCreateHTML,
  vanillaCursorOverEvent,
  vanillaDataSrc,
  vanillaDisplayElements,
  vanillaDoubleClick,
  vanillaFadeIn,
  vanillaFadeOut,
  vanillaGetChildren,
  vanillaGetOptions,
  vanillaGetParent,
  vanillaHide,
  vanillaImageFails,
  vanillaImageLoad,
  vanillaInputAlert,
  vanillaItemId,
  vanillaIterateElements,
  vanillaKeyPressEvent,
  vanillaLiClicked,
  vanillaMousePosition,
  vanillaPrepend,
  vanillaRemove,
  vanillaRemoveClass,
  vanillaRemoveDisabled,
  vanillaRemoveItems,
  vanillaRemoveSrc,
  vanillaShow,
  vanillaSubmitEvent,
  vanillaToggle,
} from "./vanilla.js";
import {
  jqueryAddClass,
  jqueryAddDisabled,
  jqueryAnimate,
  jqueryAppend,
  jqueryChangeHref,
  jqueryChangeOption,
  jqueryChangeValue,
  jqueryChecked,
  jqueryClassElements,
  jqueryClickEvent,
  jqueryClone,
  jqueryCreateAfter,
  jqueryCreateBefore,
  jqueryCreateHTML,
  jqueryCursorOverEvent,
  jqueryDataSrc,
  jqueryDisplayElements,
  jqueryDoubleClick,
  jqueryFadeIn,
  jqueryFadeOut,
  jqueryGetChildren,
  jqueryGetOptions,
  jqueryGetParent,
  jqueryHide,
  jqueryImageFails,
  jqueryImageLoad,
  jqueryInputAlert,
  jqueryItemId,
  jqueryIterateElements,
  jqueryKeyPressEvent,
  jqueryLiClicked,
  jqueryMousePosition,
  jqueryPrepend,
  jqueryRemove,
  jqueryRemoveClass,
  jqueryRemoveDisabled,
  jqueryRemoveItems,
  jqueryRemoveSrc,
  jqueryShow,
  jquerySubmitEvent,
  jqueryToggle,
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

        document.addEventListener("keypress", function listener(e) {
          if (e.key == "v") {
            vanillaKeyPressEvent();
            v = true;
          } else if (e.key == "j") {
            jqueryKeyPressEvent();
            j = true;
          }
          if (j && v) {
            document.removeEventListener("keypress", listener);
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
      jqueryChecked();
      break;

    case "12":
      vanillaLiClicked();
      jqueryLiClicked();
      break;

    case "13":
      vanillaCreateHTML();
      jqueryCreateHTML();
      break;

    case "14":
      vanillaRemove();
      jqueryRemove();
      break;

    case "15":
      vanillaAppend();
      jqueryAppend();
      break;

    case "16":
      vanillaPrepend();
      jqueryPrepend();
      break;

    case "17":
      vanillaCreateAfter();
      jqueryCreateAfter();
      break;

    case "18":
      vanillaCreateBefore();
      jqueryCreateBefore();
      break;

    case "19":
      vanillaClone();
      jqueryClone();
      break;

    case "20":
      vanillaAddClass();
      jqueryAddClass();
      break;

    case "21":
      vanillaRemoveClass();
      jqueryRemoveClass();
      break;

    case "22":
      vanillaToggle();
      jqueryToggle();
      break;

    case "23":
      vanillaAddDisabled();
      jqueryAddDisabled();
      break;

    case "24":
      vanillaRemoveDisabled();
      jqueryRemoveDisabled();
      break;

    case "25":
      vanillaDataSrc();
      jqueryDataSrc();
      break;

    case "26":
      vanillaRemoveSrc();
      jqueryRemoveSrc();
      break;

    case "27":
      vanillaHide();
      jqueryHide();
      break;

    case "28":
      vanillaShow();
      jqueryShow();
      break;

    case "29":
      vanillaFadeIn();
      jqueryFadeIn();
      break;

    case "30":
      vanillaFadeOut();
      jqueryFadeOut();
      break;

    case "31":
      vanillaIterateElements();
      jqueryIterateElements();
      break;

    case "32":
      vanillaGetParent();
      jqueryGetParent();
      break;

    case "33":
      vanillaGetChildren();
      jqueryGetChildren();
      break;

    case "34":
      vanillaClassElements();
      jqueryClassElements();
      break;

    case "35":
      vanillaItemId();
      jqueryItemId();
      break;

    case "36":
      vanillaDisplayElements();
      jqueryDisplayElements();
      break;

    case "37":
      vanillaGetOptions();
      jqueryGetOptions();
      break;

    case "38":
      vanillaChangeHref();
      jqueryChangeHref();
      break;

    case "39":
      vanillaInputAlert();
      jqueryInputAlert();
      break;

    case "40":
      vanillaRemoveItems();
      jqueryRemoveItems();
      break;

    case "41":
      vanillaAnimate();
      jqueryAnimate();
      break;

    default:
      console.log("ERROR");
      break;
  }
}

function printTitle(title) {
  document.querySelector("#title p").textContent = title;
}

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
