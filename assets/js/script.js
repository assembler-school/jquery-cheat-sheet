/* -------------------------------------------------------------------------- */
/*                              GENERAL VARIABLES                             */
/* -------------------------------------------------------------------------- */
let events = [
  "Loaded document",
  "Element clicked",
  "Element double clicked",
  "Key pressed",
  "Moved mouse",
  "Text input changed",
  "Loaded image",
  "Failed image",
  "Submitted form",
  "Changed option in select elment",
  "Mouse over",
  "Checked/Unchecked",
  "Clicked ul item",
];

let functions = [
  "Create html element with text value",
  "Remove html element with text value",
  "Append html element to a parent",
  "Prepend html element to a parent",
  "Create & add after",
  "Create & add before",
  "Clone element within other element",
  "Add class",
  "Remove class",
  "Toggle class",
  "Add disabled attribute",
  "Remove disabled attribute",
  "Set data-src to image",
  "Remove data-src to image",
  "Hide element on click",
  "Show element on click",
  "Fade in element",
  "Fade out element",
  "Iterate & style elements in collection",
];

let selectors = [
  "Get parent & change font weight",
  "Get children collection & change font weight",
  "Get elements by class & change font weight",
  "Get item by id & change font weight",
  "Get elements by class & display none & change their font color",
  "Get selected options of a select element",
  "Change href attribute of the first <a>",
  "Show an alert with the value of the first input",
  "Remove all items of a selector",
  "Animate an item after 2 seconds",
];

let categoryTitles = document.querySelectorAll(".category");
let eventsContainer = $("#events-examples");
let functionsContainer = $("#functions-examples");
let selectorsContainer = $("#selectors-examples");

/* -------------------------------------------------------------------------- */
/*                                  FUNCTIONS                                 */
/* -------------------------------------------------------------------------- */
function setExamples(container, array) {
  for (let e of array) {
    // Creating the div
    let newExample = $("<div>");
    newExample.addClass("example");
    newExample.html(e);
    // Adding examples in container
    $(container).append(newExample);
  }
}

function showContainer(title) {
  $(title).click(function () {
    // Get the element that is displayed
    $(".displayed").toggleClass("displayed");

    $(this).next().addClass("displayed");
  });
}

function arrowTranslation(arrow, container) {
  $(arrow).click(function () {
    if ($(arrow).hasClass("up-arrrow")) {
      $(container).css("transform", "translateY(300px)");
    } else {
      $(container).css("transform", "translateY(-310px)");
    }
  });
}

arrowTranslation($(".down-arrow-events"), $("#events-examples"));

// Appending examples
setExamples(eventsContainer, events);
setExamples(functionsContainer, functions);
setExamples(selectorsContainer, selectors);

// Assigning display container to three titles
for (var t = 0; t <= categoryTitles.length; t++) {
  showContainer(categoryTitles[t]);
  console.log(t);
}
