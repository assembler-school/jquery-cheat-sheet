/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { blankMacroOutput } from "./script.js";

console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function htmlLoaded() {
  // Macro
  macroTextVanilla.innerText = `// Loading an html

document.onload(function(){
  console.log("HTML file loaded!");
});`;

  // Output
  outputVanilla.innerHTML = "HTML file loaded!";
}

//1
function clickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Clicked element

element.onclick = function(){
  this.innerText = "Clicked!";
}`;

  // Output
  let newButton = document.createElement("div");
  newButton.setAttribute("class", "example-button");
  newButton.innerText = "Click me";
  newButton.onclick = function () {
    this.innerText = "Clicked!";
  };
  outputVanilla.appendChild(newButton);
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const vanillaExamples = [
  // 0
  function () {
    htmlLoaded();
  },
  // 1
  function () {
    clickedItem();
  },
];
