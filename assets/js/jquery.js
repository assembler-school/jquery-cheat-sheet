/* -------------------------------------------------------------------------- */
/*                               IMPORTS/EXPORTS                              */
/* -------------------------------------------------------------------------- */
import { removeEventJQuery } from "./script.js";

// console.log("jQuery JS file loaded!");

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

//8 ----------------------------------------------------------
function submittedForm() {
  // Macro
  macroString = `// Submitted form

$("form").on("submit", function(){
  console.log("Submitted form!")
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleForm = $("<form>");
    exampleForm.addClass("example-form");
    let exampleInput = $("<input>");
    exampleInput.addClass("example-input");
    exampleInput.attr("placeholder", "Text goes here");
    exampleInput.attr("required", "true");
    let exampleSubmit = $("<input>");
    exampleSubmit.addClass("example-submit");
    exampleSubmit.attr("type", "submit");
    exampleSubmit.text("Submit jquery!");

    exampleForm.append(exampleInput);
    exampleForm.append(exampleSubmit);

    function submittedFormInside() {
      console.log("Submitted form!");
    }

    $(exampleForm).on("submit", submittedFormInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleForm, "submit", submittedFormInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleForm);
  });
}

//9 ----------------------------------------------------------
function selectedOption() {
  // Macro
  macroString = `// Selected option

$("select").on("change", function(){
  console.log("Movie: " + $(this).value");
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleSelect = $("<select>");
    exampleSelect.addClass("example-select");

    let option1 = $("<option>");
    option1.text("The Life of Brian");
    option1.val(option1.text());

    let option2 = $("<option>");
    option2.text("Spamalot");
    option2.val(option2.text());

    let option3 = $("<option>");
    option3.text("The meaning of Life");
    option3.val(option3.text());

    exampleSelect.append(option1);
    exampleSelect.append(option2);
    exampleSelect.append(option3);

    let selected = $("<p>");

    function selectedOptionInside(event) {
      console.log("Movie: " + event.target.value);
      selected.text("\n> Movie: " + event.target.value);
    }

    $(exampleSelect).on("change", selectedOptionInside);
    // Removing event listener if example is clicked
    removeEventJQuery(
      exampleSelect,
      "change",
      selectedOptionInside,
      ".example"
    );

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleSelect);
    outputJquery.append(selected);
  });
}

//10 ----------------------------------------------------------
function mouseOver() {
  // Macro
  macroString = `// Mouse over element

element.on("mouseover", function(){
  $(this).text("Mouse over");
})

// Mouse out element

element.on("mouseout", function(){
  $(this).text("Mouse out");
})`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Mouse out");

    function mouseOverInside() {
      $(this).text("Mouse over");
    }

    function mouseOverInsideOut() {
      $(this).text("Mouse out");
    }

    exampleButton.on("mouseover", mouseOverInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "mouseover", mouseOverInside, ".example");

    exampleButton.on("mouseout", mouseOverInsideOut);
    // Removing event listener if example is clicked
    removeEventJQuery(
      exampleButton,
      "mouseout",
      mouseOverInsideOut,
      ".example"
    );

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleButton);
  });
}

//11 ----------------------------------------------------------
function checkBoxOnOff() {
  // Macro
  macroString = `// Checked unchecked checkbox

element.on("click", function(){
  if ($(this).prop("checked") == true){
    console.log("Welcome to the Ministry of Silly Walks!")
  else {
    console.log("How you dare?")
  };
})`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    // Checkbox wrapper
    let checkboxWrapper = $("<label>");
    checkboxWrapper.addClass("checkbox");

    // Hidden input + styled span
    let inputWrapper = $("<span>");
    inputWrapper.addClass("checkbox-input");

    let exampleInput = $("<input>");
    exampleInput.attr("type", "checkbox");
    exampleInput.attr("id", "exampleCheck");

    let exampleCheck = $("<span>");
    exampleCheck.addClass("checkbox-control");
    exampleCheck.addClass("example-checkbox");

    inputWrapper.append(exampleInput);
    inputWrapper.append(exampleCheck);

    let exampleLabel = $("<label>");
    exampleLabel.text("I am a Monty Python fan");
    exampleLabel.attr("for", "exampleCheck");
    exampleLabel.addClass("example-label");

    checkboxWrapper.append(inputWrapper);
    checkboxWrapper.append(exampleLabel);

    let exampleParagraph = $("<p>");

    function checkBoxOnOffInside(event) {
      if (event.target.checked == true) {
        exampleParagraph.text("\n> Welcome to the Ministry of Silly Walks!");
        console.log("I'm a fan");
      } else {
        exampleParagraph.text("\n> How you dare?");
        console.log("I'm not a fan");
      }
    }

    inputWrapper.on("click", checkBoxOnOffInside);
    // Removing event listener if example is clicked
    removeEventJQuery(inputWrapper, "click", checkBoxOnOffInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(checkboxWrapper);
    outputJquery.append(exampleParagraph);
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
  // 8
  function () {
    submittedForm();
  },
  // 9
  function () {
    selectedOption();
  },
  // 10
  function () {
    mouseOver();
  },
  // 11
  function () {
    checkBoxOnOff();
  },
];
