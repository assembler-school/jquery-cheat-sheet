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
let runButtonJquery = $("#run-button");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
// Events

//0 ----------------------------------------------------------
function htmlLoaded() {
  // Macro
  macroString = `// Loading an html file

$(document).ready(function(){
  console.log("HTML file loaded!");
});
  `;
  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    outputJquery.text("> HTML file loaded!");
    console.log("HTML file loaded!");
  });
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
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Click me");

    function clickedItemInside(event) {
      $(this).text("Clicked!");
    }

    exampleButton.on("click", clickedItemInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "click", clickedItemInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleButton);
  });
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
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Double click me");

    function dblClickItemInside(event) {
      $(this).text("Clicked!");
    }

    exampleButton.on("dblclick", dblClickItemInside);
    // Removing event listener if example is clicked
    removeEventJQuery(
      exampleButton,
      "dblclick",
      dblClickItemInside,
      ".example"
    );

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleButton);
  });
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
  runButtonJquery.click(function () {
    outputJquery.text("");
    let outputText = "> Key pressed!\n";

    function keyPressedInside() {
      outputJquery.text(outputText);
      outputText += "> Key pressed!\n";
    }

    $(document).on("keypress", keyPressedInside);
    // Removing event listener if example is clicked
    removeEventJQuery(document, "keypress", keyPressedInside, ".example");
  });
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
  runButtonJquery.click(function () {
    function mouseMovedInside(e) {
      outputJquery.text("> Mouse at: (" + e.pageX + ", " + e.pageY + ")");
    }

    $(document).on("mousemove", mouseMovedInside);
    // Removing event listener if example is clicked
    removeEventJQuery(document, "mousemove", mouseMovedInside, ".example");
  });
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
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleInput = $("<input>");
    exampleInput.addClass("example-input");
    exampleInput.attr("type", "text");

    function changedInputInside(event) {
      $(this).css({
        color: "var(--accent-color)",
        outline: "2px solid var(--accent-color)",
        backgroundColor: "var(--dark-color",
      });
      console.log($(this));
    }

    exampleInput.on("change", changedInputInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleInput, "change", changedInputInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleInput);
  });
}

//6 ----------------------------------------------------------
function loadedImage() {
  // Macro
  macroString = `// Loaded image

$("img").load(function(){
  $(this).css({
  "color": "yellow;
  "outline": "2px solid yellow";
  "backgroundColor": "black"
  })
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleImage = $("<img>");
    exampleImage.addClass("example-image");
    exampleImage.attr("alt", "Monty Python");
    exampleImage.attr("src", "./assets/img/montypython.jpg");

    function loadedImageInside() {
      console.log("Image loaded!");
    }

    $(exampleImage).on("ready", loadedImageInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleImage, "ready", loadedImageInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleImage);
    outputJquery.append("\n\n> Image loaded!");
  });
}

//7 ----------------------------------------------------------
function errorImage() {
  // Macro
  macroString = `// Not loaded image

$("img").on("error", function(){
  console.log("Image not loaded!")
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleImage = $("<img>");
    exampleImage.addClass("example-image");
    exampleImage.attr("alt", "Monty Python");
    exampleImage.attr("src", "./assets/img/montypythonerror.jpg");

    function errorImageInside() {
      console.log("Image not loaded!");
    }

    $(exampleImage).on("error", errorImageInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleImage, "error", errorImageInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleImage);
    outputJquery.append("\n\n> Image not loaded!");
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
  }, // 6
  function () {
    loadedImage();
  },
  // 7
  function () {
    errorImage();
  },
];
