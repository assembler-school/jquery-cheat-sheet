import { mainTemplate, specificTemplate } from "./mainTemplates.js";
import { vanillaObject } from "./vanillaCode.js";
import { jqueryTemplates } from "./jqueryCode.js";
import { commonTemplates } from "./commonCode.js";

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
  if (!document.getElementById("specific")) {
    let mainWrapper = document.getElementById("main-wrapper");

    let newSpecificTemplate = specificTemplate;
    mainWrapper.insertAdjacentHTML("beforeend", newSpecificTemplate);

    let mainNode = document.querySelector("#specific").content;
    let copyNode = document.importNode(mainNode, true);

    mainWrapper.appendChild(copyNode);
  }
}

// Choose the template to load from the chosen nav button
function selectPage(e) {
  let dataPage = e.target.dataset.page;
  if (dataPage == 0) {
    loadMainPageTemplate();
  }
  if (dataPage != 0) {
    loadLayout();
    loadVanillaContent(dataPage);
    loadJqueryContent(dataPage);
    loadCommonContent(dataPage);
    jqueryFunctions[1];
  }
}

function loadVanillaContent(page) {
  let vanilla = document.getElementById("vanilla");
  vanilla.innerHTML = "";

  let newTemplate = vanillaObject[page];
  vanilla.insertAdjacentHTML("beforeend", newTemplate);

  let mainNode = document.querySelector(
    `.vanillaCode[data-page="${page}"]`
  ).content;
  let copyNode = document.importNode(mainNode, true);

  vanilla.appendChild(copyNode);
}

function loadJqueryContent(page) {
  let jquery = document.getElementById("jquery");
  jquery.innerHTML = "";

  let newTemplate = jqueryTemplates[page];
  jquery.insertAdjacentHTML("beforeend", newTemplate);

  let mainNode = document.querySelector(
    `.jqueryCode[data-page="${page}"]`
  ).content;
  let copyNode = document.importNode(mainNode, true);

  jquery.appendChild(copyNode);
}

function loadCommonContent(page) {
  let common = document.getElementById("common");
  common.innerHTML = "";

  let newTemplate = commonTemplates[page];
  common.insertAdjacentHTML("beforeend", newTemplate);

  let mainNode = document.querySelector(
    `.commonCode[data-page="${page}"]`
  ).content;
  let copyNode = document.importNode(mainNode, true);

  common.appendChild(copyNode);
}
