/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { removeEventVanilla } from "./script.js";

console.log("Vanilla JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroTextVanilla = document.getElementById("macro-text");
let outputVanilla = document.getElementById("output-panel");

let examples = document.getElementsByClassName("example");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0 ----------------------------------------------------------
function htmlLoaded() {
  // Macro
  macroTextVanilla.innerText = `// Loading an html

document.onload(function(){
  console.log("HTML file loaded!");
});`;

  // Output
  outputVanilla.innerHTML = "> HTML file loaded!";
}

//1 ----------------------------------------------------------
function clickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Clicked element

element.onclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  let newButton = document.createElement("div");
  newButton.setAttribute("class", "example-button");
  newButton.innerText = "Click me";
  newButton.onclick = function () {
    this.innerText = "Clicked!";
  };
  outputVanilla.appendChild(newButton);
}

//2 ----------------------------------------------------------
function dblClickedItem() {
  // Macro
  macroTextVanilla.innerText = `// Double clicked element

element.ondblclick = function(){
  this.innerText = "Clicked!";
};`;

  // Output
  let newButton = document.createElement("div");
  newButton.setAttribute("class", "example-button");
  newButton.innerText = "Double click me";
  newButton.ondblclick = function () {
    this.innerText = "Clicked!";
  };
  outputVanilla.appendChild(newButton);
}

//3 ----------------------------------------------------------
function keyPressed() {
  // Macro
  macroTextVanilla.innerText = `// Return a message on a pressed key

element.onkeypress = function(){
  this.innerText = "Key pressed!";
};`;

  // Output
  outputVanilla.innerText = "";
  let outputText = "> Key pressed! \n";

  function keyPressedInside() {
    outputVanilla.innerText = outputText;
    outputText += "> Key pressed! \n";
  }
  document.addEventListener("keypress", keyPressedInside);
  // Removing event listener if example is clicked
  removeEventVanilla(document, "keypress", keyPressedInside, examples);
}

//4 ----------------------------------------------------------
function mouseMoved() {
  // Macro
  macroTextVanilla.innerText = `// Show mouse movement

document.onmousemove = function(e){
  console.log("> Mouse at:("
  + e.pageX + ", "
  + e.pageY + ")");
};`;

  // Output
  function mouseMoveInside(e) {
    outputVanilla.innerText = "> Mouse at: (" + e.pageX + ", " + e.pageY + ")";
  }
  document.addEventListener("mousemove", mouseMoveInside);
  // Removing event listener if example is clicked
  removeEventVanilla(document, "mousemove", mouseMoveInside, examples);
}

//5 ----------------------------------------------------------
function changedInput() {
  // Macro
  macroTextVanilla.innerText = `// Changed input behaviour

element.onchange = function(){
  this.style.color = "yellow";
  this.style.color = "2px solid yellow";
  this.style.color = "black";
};`;

  // Output
  let exampleInput = document.createElement("input");
  exampleInput.classList.add("example-input");
  exampleInput.setAttribute("type", "text");
  outputVanilla.appendChild(exampleInput);
  exampleInput.onchange = function () {
    (this.style.color = "var(--accent-color)"),
      (this.style.outline = "2px solid var(--accent-color)"),
      (this.style.backgroundColor = "var(--dark-color");
  };
}

//6 ----------------------------------------------------------
function loadedImage() {
  // Macro
  macroTextVanilla.innerText = `// Loaded image

element.onchange = function(){
  this.style.color = "yellow";
  this.style.color = "2px solid yellow";
  this.style.color = "black";
};`;

  // Output
  let exampleInput = document.createElement("input");
  exampleInput.classList.add("example-input");
  exampleInput.setAttribute("type", "text");
  outputVanilla.appendChild(exampleInput);
  exampleInput.onchange = function () {
    (this.style.color = "var(--accent-color)"),
      (this.style.outline = "2px solid var(--accent-color)"),
      (this.style.backgroundColor = "var(--dark-color");
  };
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
  // 2
  function () {
    dblClickedItem();
  },
  // 3
  function () {
    keyPressed();
  },
  // 4
  function () {
    mouseMoved();
  },
  // 5
  function () {
    changedInput();
  },
  // 6
  function () {
    loadedImage();
  },
];
