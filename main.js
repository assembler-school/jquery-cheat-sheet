import { eventData, functionData, effectTraversingData } from "/data.js"
import { jsDisplay } from "/js/vanilla.js";
import { jQueryDisplay } from "/js/jQuery.js";

// nav links
const navLinks = document.querySelectorAll(".navLinks li");
const homeSection = document.getElementById("home");
const eventSection = document.getElementById("event");
const functionSection = document.getElementById("functions");
const effectSection = document.getElementById("effects");

const eventTable = document.getElementById("eventTable");
const functionTable = document.getElementById("functionTable");

const sheetModal = document.getElementById("sheetModal");
const modalContent = document.querySelector(".modalContent");
const nameOfContent = document.querySelector(".nameOfContent");

// boxes to display each code
const codeWrapper = document.querySelectorAll(".codeWrapper");
const codeBoxes = document.querySelectorAll(".codeBox");



// when the user clicks the nav item, the item page is displayed.
navLinks.forEach((navLink, index) => {
  navLink.onclick = function () {
    switch (index) {
      case 1:
        homeSection.style.display = "none";
        functionSection.style.display = "none";
        effectSection.style.display = "none";
        eventSection.style.display = "block";
        modalContent.setAttribute("id", "eventModal");
        break;
      case 2:
        homeSection.style.display = "none";
        eventSection.style.display = "none";
        effectSection.style.display = "none";
        functionSection.style.display = "block";
        modalContent.setAttribute("id", "functionModal");
        break;
      case 3:
        functionSection.style.display = "none";
        homeSection.style.display = "none";
        eventSection.style.display = "none";
        effectSection.style.display = "block";
        modalContent.setAttribute("id", "selectorModal");
        break;

      default:
        homeSection.style.display = "block";
        functionSection.style.display = "none";
        effectSection.style.display = "none";
        eventSection.style.display = "none";
        break;
    }
  };
});

eventData.forEach((dataItem, index) => {
  eventTable.insertRow(
    -1
  ).innerHTML = `<td id="event${index}">${dataItem}</td>`;
  document.getElementById("event" + index).onclick = function () {
    sheetModal.style.display = "block";
    nameOfContent.textContent = dataItem;
    document.querySelector(".screen").setAttribute("id", "eventScreen" + index);
    codeBoxes.forEach((codeBox, i) => {
      codeBoxes[0].setAttribute("id", `jsEvent${index}`);
      codeBoxes[1].setAttribute("id", `jQueryEvent${index}`);
    });
    jsDisplay(index);
    jQueryDisplay(index);
  };
});

functionData.forEach((dataItem, index) => {
  functionTable.insertRow(
    -1
  ).innerHTML = `<td id="function${index}">${dataItem}</td>`;
  document.getElementById("function" + index).onclick = function () {
    sheetModal.style.display = "block";
    console.log(nameOfContent);
    nameOfContent.textContent = dataItem;
    document
      .querySelector(".screen")
      .setAttribute("id", "functionScreen" + index);

    codeBoxes.forEach((codeBox, i) => {
      codeBoxes[0].setAttribute("id", `jsFunc${index}`);
      codeBoxes[1].setAttribute("id", `jQueryFunc${index}`);
    });
    //console.log(document.getElementById(`"jsFunc${index}"`))
    jsDisplay(index);
    jQueryDisplay(index);
  };
});


effectTraversingData.forEach((dataItem, index) => {
  effectTable.insertRow(
    -1
  ).innerHTML = `<td id="effect${index}">${dataItem}</td>`;
  document.getElementById("effect" + index).onclick = function () {
    sheetModal.style.display = "block";
    console.log(nameOfContent);
    nameOfContent.textContent = dataItem;
    document
      .querySelector(".screen")
      .setAttribute("id", "effectScreen" + index);

    codeBoxes.forEach((codeBox, i) => {
      codeBoxes[0].setAttribute("id", `jsFunc${index}`);
      codeBoxes[1].setAttribute("id", `jQueryFunc${index}`);
    });
    //console.log(document.getElementById(`"jsFunc${index}"`))
    jsDisplay(index);
    jQueryDisplay(index);
  };
});




// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == sheetModal) {
    sheetModal.style.display = "none";
    document.querySelector(".screen").innerHTML = null;
  }
};
