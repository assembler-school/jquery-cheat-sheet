import { mainTemplate, specificTemplate } from "./mainTemplates.js";

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
  console.log(document.querySelector(".nav-btn[data-page='1']").textContent);
}
loadMainPageTemplate();

function loadDivs() {
  if (!document.getElementById("specific")) {
    let mainWrapper = document.getElementById("main-wrapper");

    let newSpecificTemplate = specificTemplate;
    mainWrapper.insertAdjacentHTML("beforeend", newSpecificTemplate);

    let mainNode = document.querySelector("#specific").content;
    let copyNode = document.importNode(mainNode, true);

    mainWrapper.appendChild(copyNode);
  }
}

function selectPage(e) {
  let dataPage = e.target.dataset.page;
  if (dataPage == 0) {
    loadMainPageTemplate();
  }
  if (dataPage != 0) {
    loadDivs();
  }
}
