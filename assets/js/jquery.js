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
    exampleInput.attr("type", "Text goes here");

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

//12 ----------------------------------------------------------
function ulSelection() {
  // Macro
  macroString = `// Return li element

let liElements = $("li");

liElements.each(function(){
  $(this).on("click", function{
    console.log($(this).prop("outerHTML"));
  })
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleUL = $("<ul>");
    exampleUL.addClass("example-ul");

    let ulItem1 = $("<li>");
    ulItem1.text("Graham Chapman");
    let ulItem2 = $("<li>");
    ulItem2.text("Terry Jones");
    let ulItem3 = $("<li>");
    ulItem3.text("Terry Gilliam");
    let ulItem4 = $("<li>");
    ulItem4.text("Eric Idle");
    let ulItem5 = $("<li>");
    ulItem5.text("John Cleese");
    let ulItem6 = $("<li>");
    ulItem6.text("Michael Pallin");

    exampleUL.append(ulItem1);
    exampleUL.append(ulItem2);
    exampleUL.append(ulItem3);
    exampleUL.append(ulItem4);
    exampleUL.append(ulItem5);
    exampleUL.append(ulItem6);

    let exampleParagraph = $("<p>");

    function ulSelectionInside() {
      exampleParagraph.text("\n> " + $(this).prop("outerHTML"));
      console.log(this);
    }

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleUL);
    outputJquery.append(exampleParagraph);

    let liElements = $("li");
    liElements.each(function () {
      $(this).on("click", ulSelectionInside);
      // Removing event listener if example is clicked
      removeEventJQuery($(this), "click", ulSelectionInside, ".example");
    });
  });
}

// Functions
//13 ----------------------------------------------------------
function createHTML() {
  // Macro
  macroString = `// Create an html element

let container = $("<div>");

$(element).click(function(){
  let newElement = $("<p>");
  newElement.text("Element created");
  container.append(newElement);
};`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Create");
    exampleButton.css("marginBottom", "var(--margin)");

    function createHTMLInside() {
      let exampleParagraph = $("<p>");
      exampleParagraph.addClass("example-element");
      exampleParagraph.text("Element created");
      outputJquery.append(exampleParagraph);
      console.log("Element created in jQuery!");
    }

    exampleButton.on("click", createHTMLInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "click", createHTMLInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleButton);
  });
}

//14 ----------------------------------------------------------
function removeHTML() {
  // Macro
  macroString = `// Remove an html element

let container = $("<div>");
let child = $("#child");

$(element).click(function(){
  child.remove();
};`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Delete");
    exampleButton.css("marginBottom", "var(--margin)");

    let exampleParagraph = $("<p>");
    exampleParagraph.addClass("example-element");
    exampleParagraph.text("Element to remove");

    function deleteHTMLInside() {
      if (outputJquery.children(exampleParagraph)) {
        exampleParagraph.remove();
        console.log("Element deleted in jQuery!");
      } else {
        console.log("Element already removed");
      }
    }

    exampleButton.on("click", deleteHTMLInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "click", deleteHTMLInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleButton);
    outputJquery.append(exampleParagraph);
  });
}

//15 ----------------------------------------------------------
function appendElement() {
  // Macro
  macroString = `// Append an html element

let container = $("#parent");
let child = $("<div>");

// Appending the child after 2 seconds
setTimeout(function(){
  container.append(child);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleParent = $("<div>");
    exampleParent.addClass("example-parent");
    exampleParent.text("Parent");

    let exampleChild = $("<div>");
    exampleChild.addClass("example-child");
    exampleChild.text("Child");

    setTimeout(function () {
      let appendedChild = exampleChild.clone();
      appendedChild.addClass("example-appended-child");
      appendedChild.text("Appended child!");
      exampleParent.append(appendedChild);
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    exampleParent.append(exampleChild);
    outputJquery.append(exampleParent);
  });
}

//16 ----------------------------------------------------------
function prependElement() {
  // Macro
  macroString = `// Prepend an html element

let container = $("#parent");
let child = $("<div>");

// Prepending the child after 2 seconds
setTimeout(function(){
  container.prepend(child);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleParent = $("<div>");
    exampleParent.addClass("example-parent");
    exampleParent.text("Parent");

    let exampleChild = $("<div>");
    exampleChild.addClass("example-child");
    exampleChild.text("Child");

    setTimeout(function () {
      let appendedChild = exampleChild.clone();
      appendedChild.addClass("example-appended-child");
      appendedChild.text("Prepended child!");
      exampleChild.before(appendedChild);
      console.log("Done");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    exampleParent.append(exampleChild);
    outputJquery.append(exampleParent);
  });
}

//17 ----------------------------------------------------------
function addAfter() {
  // Macro
  macroString = `// Create & add element after

let container = $("#parent");
let child = $("<div>");

// Creating & adding element after 2 seconds
setTimeout(function(){
  container.children().eq(1).after(child);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleParent = $("<div>");
    exampleParent.addClass("example-parent");
    exampleParent.text("Parent");

    let exampleChild1 = $("<div>");
    exampleChild1.addClass("example-child");
    exampleChild1.text("Child 1");

    let exampleChild2 = $("<div>");
    exampleChild2.addClass("example-child");
    exampleChild2.text("Child 2");

    let exampleChild3 = $("<div>");
    exampleChild3.addClass("example-child");
    exampleChild3.text("Child 3");

    setTimeout(function () {
      let appendedChild = exampleChild1.clone();
      appendedChild.addClass("example-appended-child");
      appendedChild.text("Inserted after Child 2!");
      exampleChild2.after(appendedChild);
      console.log("Done");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    exampleParent.append(exampleChild1);
    exampleParent.append(exampleChild2);
    exampleParent.append(exampleChild3);
    outputJquery.append(exampleParent);
  });
}

//18 ----------------------------------------------------------
function addBefore() {
  // Macro
  macroString = `// Create & add element after

let container = $("#parent");
let child = $("<div>");

// Creating & adding element after 2 seconds
setTimeout(function(){
  container.children().eq(1).before(child);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleParent = $("<div>");
    exampleParent.addClass("example-parent");
    exampleParent.text("Parent");

    let exampleChild1 = $("<div>");
    exampleChild1.addClass("example-child");
    exampleChild1.text("Child 1");

    let exampleChild2 = $("<div>");
    exampleChild2.addClass("example-child");
    exampleChild2.text("Child 2");

    let exampleChild3 = $("<div>");
    exampleChild3.addClass("example-child");
    exampleChild3.text("Child 3");

    setTimeout(function () {
      let appendedChild = exampleChild1.clone();
      appendedChild.addClass("example-appended-child");
      appendedChild.text("Inserted before Child 2!");
      exampleChild2.before(appendedChild);
      console.log("Done");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    exampleParent.append(exampleChild1);
    exampleParent.append(exampleChild2);
    exampleParent.append(exampleChild3);
    outputJquery.append(exampleParent);
  });
}

//19 ----------------------------------------------------------
function cloneWithin() {
  // Macro
  macroString = `// Clone element within html element

let container1 = $("#parent1");
let container2 = $("#parent2");

// Cloning the element after 2 seconds
setTimeout(function(){
  let container3 = container2.clone()
  container3.appendTo(container1);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleParent1 = $("<div>");
    exampleParent1.addClass("example-parent");
    exampleParent1.text("Parent");

    let exampleParent2 = $("<div>");
    exampleParent2.addClass("example-appended-child");
    exampleParent2.css({
      padding: "calc(var(--margin) / 2)",
      "margin-top": "var(--margin)",
    });
    exampleParent2.text("Element to clone");

    setTimeout(function () {
      let clonedChild = exampleParent2.clone();
      clonedChild.addClass("example-appended-child");
      clonedChild.appendTo(exampleParent1);
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleParent1);
    outputJquery.append(exampleParent2);
  });
}

//20 ----------------------------------------------------------
function addedClass() {
  // Macro
  macroString = `// Add class to an html element

setTimeout(function(){
  element.addClass("newClass");
  console.log(element.prop("outerHTML");
}, 2000)`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleElement = $("<div>");
    exampleElement.addClass("example-element");
    exampleElement.text("Spam!");
    exampleElement.css("marginBottom", "var(--margin)");

    let exampleParagraph = $("<p>");
    exampleParagraph.text("Spam!");
    exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));

    setTimeout(function () {
      exampleParagraph.addClass("newClass");
      exampleParagraph.text("Spam!");
      exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleElement);
    outputJquery.append(exampleParagraph);
  });
}

//21 ----------------------------------------------------------
function removedClass() {
  // Macro
  macroString = `// Remove class to an html element

setTimeout(function(){
  element.removeClass("class2");
  console.log(element.prop("outerHTML");
}, 2000)`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleElement = $("<div>");
    exampleElement.addClass("example-element");
    exampleElement.text("Spam!");
    exampleElement.css("marginBottom", "var(--margin)");

    let exampleParagraph = $("<p>");
    exampleParagraph.text("Spam!");
    exampleParagraph.addClass("class1");
    exampleParagraph.addClass("class2");
    exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));

    setTimeout(function () {
      exampleParagraph.text("Spam!");
      exampleParagraph.removeClass("class2");
      exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleElement);
    outputJquery.append(exampleParagraph);
  });
}

//22 ----------------------------------------------------------
function toggledClass() {
  // Macro
  macroString = `// Toggle class to an html element

element.on("click", function(){
  this.toggleClass("toggledClass");
  console.log("Toggled class");
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Toggle class");
    exampleButton.css("marginBottom", "var(--margin)");

    let exampleParagraph = $("<div>");
    exampleParagraph.text("Toggle class");
    exampleParagraph.addClass("class1");
    exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));

    function toggledClassInside() {
      exampleParagraph.toggleClass("toggledClass");
      exampleParagraph.text("Toggle class");
      exampleParagraph.text("> " + exampleParagraph.prop("outerHTML"));
      console.log("Toggled class");
    }

    exampleButton.on("click", toggledClassInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "click", toggledClassInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleButton);
    outputJquery.append(exampleParagraph);
  });
}

//23 ----------------------------------------------------------
function addedDisable() {
  // Macro
  macroString = `// Add disable attribute

setTimeout(function(){
  element.prop("disabled", true);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleInput = $("<input>");
    exampleInput.addClass("example-input");
    exampleInput.attr("type", "text");
    exampleInput.attr("placeholder", "Text goes here");

    setTimeout(function () {
      exampleInput.prop("disabled", true);
      exampleInput.css("opacity", "50%");
      exampleInput.attr("placeholder", "Disabled");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleInput);
  });
}

//24 ----------------------------------------------------------
function removedDisable() {
  // Macro
  macroString = `// Remove disable attribute

element.prop("disabled", true);

setTimeout(function(){
  element.prop("disabled", false);
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleInput = $("<input>");
    exampleInput.addClass("example-input");
    exampleInput.attr("type", "text");
    exampleInput.prop("disabled", true);
    exampleInput.css("opacity", "50%");
    exampleInput.attr("placeholder", "Disabled");

    setTimeout(function () {
      exampleInput.prop("disabled", false);
      exampleInput.css("opacity", "100%");
      exampleInput.attr("placeholder", "Text goes here");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }
    outputJquery.append(exampleInput);
  });
}

//25 ----------------------------------------------------------
function setDataSrc() {
  // Macro
  macroString = `// Set data-src to img after 2 seconds

setTimeout(function(){
  $("img").attr("data-src", "addedDataSrc");
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleImage = $("<img>");
    exampleImage.addClass("example-image");
    exampleImage.css("width", "50%");
    exampleImage.attr("alt", "Monty Python");
    exampleImage.attr("src", "./assets/img/spamalot.jpg");

    let exampleParagraph = $("<div>");
    exampleParagraph.text("> " + exampleImage.prop("outerHTML"));

    setTimeout(function () {
      exampleImage.attr("data-src", "addedDataSrc");
      exampleParagraph.text("> " + exampleImage.prop("outerHTML"));
      console.log("Added data-src");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleImage);
    outputJquery.append(exampleParagraph);
  });
}

//26 ----------------------------------------------------------
function removeDataSrc() {
  // Macro
  macroString = `// Remove data-src to img after 2 seconds

setTimeout(function(){
  $("img").removeAttr("data-src");
}, 2000);`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleImage = $("<img>");
    exampleImage.addClass("example-image");
    exampleImage.css("width", "50%");
    exampleImage.attr("alt", "Monty Python");
    exampleImage.attr("src", "./assets/img/spamalot.jpg");
    exampleImage.attr("data-src", "removeDataSrc");

    let exampleParagraph = $("<div>");
    exampleParagraph.text("> " + exampleImage.prop("outerHTML"));

    setTimeout(function () {
      exampleImage.removeAttr("data-src");
      exampleParagraph.text("> " + exampleImage.prop("outerHTML"));
      console.log("Removed data-src");
    }, 2000);

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleImage);
    outputJquery.append(exampleParagraph);
  });
}

//27 ----------------------------------------------------------
function displayNone() {
  // Macro
  macroString = `// Hide element on click (display: none)

button.on("click", function(){
  element.css("display", "none");
});`;

  macroJquery.text(macroString);

  // Output
  runButtonJquery.click(function () {
    let exampleButton = $("<div>");
    exampleButton.addClass("example-button");
    exampleButton.text("Click to hide");

    let exampleChild = $("<div>");
    exampleChild.addClass("example-child");
    exampleChild.addClass("example-appended-child");
    exampleChild.css({ marginTop: "var(--margin)", width: "200px" });
    exampleChild.text("Hide me");

    function displayNoneInside() {
      exampleChild.css("display", "none");
    }

    exampleButton.on("click", displayNoneInside);
    // Removing event listener if example is clicked
    removeEventJQuery(exampleButton, "click", displayNoneInside, ".example");

    // Resetting output if it's filled
    if (outputJquery.children()) {
      outputJquery.html(null);
    }

    outputJquery.append(exampleButton);
    outputJquery.append(exampleChild);
  });
}
/* -------------------------------------------------------------------------- */
/*                             ARRAY OF FUNCTIONS                             */
/* -------------------------------------------------------------------------- */
export const jQueryExamples = [
  // Events

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
  // 12
  function () {
    ulSelection();
  },

  // Functions

  // 13
  function () {
    createHTML();
  },
  // 14
  function () {
    removeHTML();
  },
  // 15
  function () {
    appendElement();
  },
  // 16
  function () {
    prependElement();
  },
  // 17
  function () {
    addAfter();
  },
  // 18
  function () {
    addBefore();
  },
  // 19
  function () {
    cloneWithin();
  },
  // 20
  function () {
    addedClass();
  },
  // 21
  function () {
    removedClass();
  },
  // 22
  function () {
    toggledClass();
  },
  // 23
  function () {
    addedDisable();
  },
  // 24
  function () {
    removedDisable();
  },
  // 25
  function () {
    setDataSrc();
  },
  // 26
  function () {
    removeDataSrc();
  },
  // 27
  function () {
    displayNone();
  },
];
