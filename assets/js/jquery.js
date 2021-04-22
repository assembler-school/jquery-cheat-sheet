/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { blankMacroOutput } from "./script.js";

console.log("jQuery JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroJquery = $("#macro-text");
let outputJquery = $("#output-panel");
let macroString;

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function htmlLoaded() {
  // Macro
  macroString = `// Loading html

$( document ).ready(function() {
  console.log("HTML file loaded!");
});
  `;
  macroJquery.text(macroString);

  // Output
  outputJquery.text(">   HTML file loaded!");
  // outputJquery.css("color", "grey");
}

//1
function clickedItem() {
  // Macro
  macroString = `// Clicked element
  
$(element).click(function(){
  $(this).text("Clicked!");
}`;

  macroJquery.text(macroString);

  // Output
  let newButton = $("<div>");
  newButton.addClass("example-button");
  newButton.text("Click me");
  newButton.click(function () {
    $(this).text("Clicked!");
  });
  outputJquery.append(newButton);
}

//2
function dblClickedItem() {
  // Macro
  macroString = `// Double clicked element
    
$(element).dblclick(function(){
  $(this).text("Clicked!");
}`;

  macroJquery.text(macroString);

  // Output
  let newButton = $("<div>");
  newButton.addClass("example-button");
  newButton.text("Double click me");
  newButton.dblclick(function () {
    $(this).text("Clicked!");
  });
  outputJquery.append(newButton);
}

//3
function keyPressed() {
  // Macro
  macroString = `// Return a message on a pressed key

$(document).keypress(function(){
  console.log("Key pressed!");
}`;

  macroJquery.text(macroString);

  // Output
  outputJquery.text("");
  let outputText = "Key pressed! ";
  $(document).keypress(function () {
    outputJquery.text(outputText + "\n");
    outputText += "Key pressed!";
  });
}

/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const jQueryExamples = [
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
];
