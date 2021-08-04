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

// Create the web Layout
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

// Create the layout for exercise title
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

// Choose the exercises to load from the chosen nav button
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

// Create the layout for jQuery and vanilla exercises
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

// Depending on the clicked element of the navigation bar, we call a different function for vanilla and jQuery
function selectFunction(page) {
  switch (page) {
    case "1":
      vanillaClickEvent();
      vanillaFunctionString(vanillaClickEvent);
      jqueryClickEvent();
      jqueryFunctionString(jqueryClickEvent);
      break;

    case "2":
      vanillaDoubleClick();
      vanillaFunctionString(vanillaDoubleClick);
      jqueryDoubleClick();
      jqueryFunctionString(jqueryDoubleClick);
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
      vanillaFunctionString(vanillaCursorOverEvent);
      jqueryCursorOverEvent();
      jqueryFunctionString(jqueryCursorOverEvent);
      break;
    case "5":
      vanillaChangeValue();
      vanillaFunctionString(vanillaChangeValue);
      jqueryChangeValue();
      jqueryFunctionString(jqueryChangeValue);
      break;

    case "6":
      vanillaImageLoad();
      vanillaFunctionString(vanillaImageLoad);
      jqueryImageLoad();
      jqueryFunctionString(jqueryImageLoad);
      break;

    case "7":
      vanillaImageFails();
      vanillaFunctionString(vanillaImageFails);
      jqueryImageFails();
      jqueryFunctionString(jqueryImageFails);
      break;

    case "8":
      vanillaSubmitEvent();
      vanillaFunctionString(vanillaSubmitEvent);
      jquerySubmitEvent();
      jqueryFunctionString(jquerySubmitEvent);
      break;

    case "9":
      vanillaChangeOption();
      vanillaFunctionString(vanillaChangeOption);
      jqueryChangeOption();
      jqueryFunctionString(jqueryChangeOption);
      break;

    case "10":
      vanillaMousePosition();
      vanillaFunctionString(vanillaMousePosition);
      jqueryMousePosition();
      jqueryFunctionString(jqueryMousePosition);
      break;

    case "11":
      vanillaChecked();
      vanillaFunctionString(vanillaChecked);
      jqueryChecked();
      jqueryFunctionString(jqueryChecked);
      break;

    case "12":
      vanillaLiClicked();
      vanillaFunctionString(vanillaLiClicked);
      jqueryLiClicked();
      jqueryFunctionString(jqueryLiClicked);
      break;

    case "13":
      vanillaCreateHTML();
      vanillaFunctionString(vanillaCreateHTML);
      jqueryCreateHTML();
      jqueryFunctionString(jqueryCreateHTML);
      break;

    case "14":
      vanillaRemove();
      vanillaFunctionString(vanillaRemove);
      jqueryRemove();
      jqueryFunctionString(jqueryRemove);
      break;

    case "15":
      vanillaAppend();
      vanillaFunctionString(vanillaAppend);
      jqueryAppend();
      jqueryFunctionString(jqueryAppend);
      break;

    case "16":
      vanillaPrepend();
      vanillaFunctionString(vanillaPrepend);
      jqueryPrepend();
      jqueryFunctionString(jqueryPrepend);
      break;

    case "17":
      vanillaCreateAfter();
      vanillaFunctionString(vanillaCreateAfter);
      jqueryCreateAfter();
      jqueryFunctionString(jqueryCreateAfter);
      break;

    case "18":
      vanillaCreateBefore();
      vanillaFunctionString(vanillaCreateBefore);
      jqueryCreateBefore();
      jqueryFunctionString(jqueryCreateBefore);
      break;

    case "19":
      vanillaClone();
      vanillaFunctionString(vanillaClone);
      jqueryClone();
      jqueryFunctionString(jqueryClone);
      break;

    case "20":
      vanillaAddClass();
      vanillaFunctionString(vanillaAddClass);
      jqueryAddClass();
      jqueryFunctionString(jqueryAddClass);
      break;

    case "21":
      vanillaRemoveClass();
      vanillaFunctionString(vanillaRemoveClass);
      jqueryRemoveClass();
      jqueryFunctionString(jqueryRemoveClass);
      break;

    case "22":
      vanillaToggle();
      vanillaFunctionString(vanillaToggle);
      jqueryToggle();
      jqueryFunctionString(jqueryToggle);
      break;

    case "23":
      vanillaAddDisabled();
      vanillaFunctionString(vanillaAddDisabled);
      jqueryAddDisabled();
      jqueryFunctionString(jqueryAddDisabled);
      break;

    case "24":
      vanillaRemoveDisabled();
      vanillaFunctionString(vanillaRemoveDisabled);
      jqueryRemoveDisabled();
      jqueryFunctionString(jqueryRemoveDisabled);
      break;

    case "25":
      vanillaDataSrc();
      vanillaFunctionString(vanillaDataSrc);
      jqueryDataSrc();
      jqueryFunctionString(jqueryDataSrc);
      break;

    case "26":
      vanillaRemoveSrc();
      vanillaFunctionString(vanillaRemoveSrc);
      jqueryRemoveSrc();
      jqueryFunctionString(jqueryRemoveSrc);
      break;

    case "27":
      vanillaHide();
      vanillaFunctionString(vanillaHide);
      jqueryHide();
      jqueryFunctionString(jqueryHide);
      break;

    case "28":
      vanillaShow();
      vanillaFunctionString(vanillaShow);
      jqueryShow();
      jqueryFunctionString(jqueryShow);
      break;

    case "29":
      vanillaFadeIn();
      vanillaFunctionString(vanillaFadeIn);
      jqueryFadeIn();
      jqueryFunctionString(jqueryFadeIn);
      break;

    case "30":
      vanillaFadeOut();
      vanillaFunctionString(vanillaFadeOut);
      jqueryFadeOut();
      jqueryFunctionString(jqueryFadeOut);
      break;

    case "31":
      vanillaIterateElements();
      vanillaFunctionString(vanillaIterateElements);
      jqueryIterateElements();
      jqueryFunctionString(jqueryIterateElements);
      break;

    case "32":
      vanillaGetParent();
      vanillaFunctionString(vanillaGetParent);
      jqueryGetParent();
      jqueryFunctionString(jqueryGetParent);
      break;

    case "33":
      vanillaGetChildren();
      vanillaFunctionString(vanillaGetChildren);
      jqueryGetChildren();
      jqueryFunctionString(jqueryGetChildren);
      break;

    case "34":
      vanillaClassElements();
      vanillaFunctionString(vanillaClassElements);
      jqueryClassElements();
      jqueryFunctionString(jqueryClassElements);
      break;

    case "35":
      vanillaItemId();
      vanillaFunctionString(vanillaItemId);
      jqueryItemId();
      jqueryFunctionString(jqueryItemId);
      break;

    case "36":
      vanillaDisplayElements();
      vanillaFunctionString(vanillaDisplayElements);
      jqueryDisplayElements();
      jqueryFunctionString(jqueryDisplayElements);
      break;

    case "37":
      vanillaGetOptions();
      vanillaFunctionString(vanillaGetOptions);
      jqueryGetOptions();
      jqueryFunctionString(jqueryGetOptions);
      break;

    case "38":
      vanillaChangeHref();
      vanillaFunctionString(vanillaChangeHref);
      jqueryChangeHref();
      jqueryFunctionString(jqueryChangeHref);
      break;

    case "39":
      vanillaInputAlert();
      vanillaFunctionString(vanillaInputAlert);
      jqueryInputAlert();
      jqueryFunctionString(jqueryInputAlert);
      break;

    case "40":
      vanillaRemoveItems();
      vanillaFunctionString(vanillaRemoveItems);
      jqueryRemoveItems();
      jqueryFunctionString(jqueryRemoveItems);
      break;

    case "41":
      vanillaAnimate();
      jqueryAnimate();
      jqueryFunctionString(jqueryAnimate);
      vanillaFunctionString(vanillaAnimate);
      break;

    default:
      console.log("ERROR");
      break;
  }
}

// Print the title of the selected page
function printTitle(title) {
  document.querySelector("#title p").textContent = title;
}

// Loaded content
function loadContent(dataPage) {
  loadMainPageTemplate();
  loadLayout();
  loadCommonContent();
  selectFunction(dataPage);
}

function vanillaFunctionString(func) {
  let funcString = func.toString();
  console.log(funcString);
  $(".vanilla-code p").text(funcString);
}

function jqueryFunctionString(func) {
  let funcString = func.toString();
  console.log(funcString);
  $(".jquery-code p").text(funcString);
}

// Events on webpage load
document.addEventListener("DOMContentLoaded", () => {
  console.log("VANILLA LOADED");
});

$(window).on("load", () => {
  console.log("JQUERY LOADED");
});
