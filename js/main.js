import {
  mainTemplate,
  specificTemplate,
  commonTemplate,
} from "./mainTemplates.js";

import { htmlLoad } from "./vanilla.js";

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
      htmlLoad();
      break;

    default:
      console.log("NOO");
      break;
  }
}

function printTitle(title) {
  document.querySelector("#title p").textContent = title;
}

function loadContent(dataPage) {
  loadLayout();
  loadCommonContent(dataPage);
  selectFunction(dataPage);
}

// Events on webpage load
document.addEventListener("DOMContentLoaded", () => {
  alert("VANILLA LOADED");
});

$(window).on("load", () => {
  alert("JQUERY LOADED");
});
