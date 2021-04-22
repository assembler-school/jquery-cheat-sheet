/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { removeEventJQuery } from "./script.js";

console.log("jQuery JS file loaded!");

/* -------------------------------------------------------------------------- */
/*                            GENERAL VARIABLES                            */
/* -------------------------------------------------------------------------- */
let macroJquery = $("#macro-text");
let outputJquery = $("#output-panel");
let macroString;
let examplesJquery = $(".example");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0
function htmlLoaded() {
  // Macro
  macroString = `// Loading html

$(document).ready(function() {
  console.log("HTML file loaded!");
});
  `;
  macroJquery.text(macroString);

  // Output
  outputJquery.text(">   HTML file loaded!");
  // outputJquery.css("color", "grey");
}

//1 ----------------------------------------------------------
function clickedItem() {
  // Macro
  macroString = `// Clicked element

$(element).click(function(){
  $(this).text("Clicked!");
};`;

  macroJquery.text(macroString);

  // Output
  let exampleButton = $("<div>");
  exampleButton.addClass("example-button");
  exampleButton.text("Click me");
  exampleButton.click(function () {
    $(this).text("Clicked!");
  });
  outputJquery.append(exampleButton);
}

//2 ----------------------------------------------------------
function dblClickedItem() {
  // Macro
  macroString = `// Double clicked element

$(element).dblclick(function(){
  $(this).text("Clicked!");
};`;

  macroJquery.text(macroString);

  // Output
  let exampleButton = $("<div>");
  exampleButton.addClass("example-button");
  exampleButton.text("Double click me");
  exampleButton.dblclick(function () {
    $(this).text("Clicked!");
  });
  outputJquery.append(exampleButton);
}

//3 ----------------------------------------------------------
function keyPressed() {
  // Macro
  macroString = `// Return a message on a pressed key

$(document).keypress(function(){
  console.log("Key pressed!");
};`;

  macroJquery.text(macroString);

  // Output
  outputJquery.text("");
  let outputText = "> Key pressed!\n";

  function keyPressedInside() {
    outputJquery.text(outputText);
    outputText += "> Key pressed!\n";
  }

  $(document).on("keypress", keyPressedInside);

  // Removing event listener if example is clicked
  removeEventJQuery(document, "keypress", keyPressedInside, ".example");
}

//4 ----------------------------------------------------------
function mouseMoved() {
  // Macro
  macroString = `// Show mouse movement

$(document).mousemove(function(e){
  console.log("Mouse at: ("
  + e.pageX+", "
  + e.pageX +")");
};`;

  macroJquery.text(macroString);

  // Output
  function mouseMoveInside(e) {
    outputJquery.text("> Mouse at: (" + e.pageX + ", " + e.pageY + ")");
  }

  $(document).on("mousemove", mouseMoveInside);
  // Removing event listener if example is clicked
  removeEventJQuery(document, "mousemove", mouseMoveInside, ".example");
}

//5 ----------------------------------------------------------
function changedInput() {
  // Macro
  macroString = `// Changed input behaviour

$("input").change(function(){
  $(this).css({
  "color": "yellow;
  "outline": "2px solid yellow";
  "backgroundColor": "black"
  })
};`;

  macroJquery.text(macroString);

  // Output
  let exampleInput = $("<input>");
  exampleInput.addClass("example-input");
  exampleInput.attr("type", "text");
  outputJquery.append(exampleInput).focus();

  $(".example-input").change(function () {
    $(this).css({
      color: "var(--accent-color)",
      outline: "2px solid var(--accent-color)",
      backgroundColor: "var(--dark-color",
    });
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
  // 4
  function () {
    mouseMoved();
  },
  // 5
  function () {
    changedInput();
  },
];
