'use strict';

/* ********************* EVENTS SECTION START ********************************/

//When the HTML document has been loaded and you can manipulate it with JavaScript
var htmlLoaded = false;
$(document).ready(() => {
  // document.addEventListener("DOMContentLoaded", () => {
  htmlLoaded = true;
});
document.querySelector("#jquery-event-01 button").addEventListener("click", (e) => {
  $(e.target).parent().children(".result").text(htmlLoaded);
});

//When an HTML item has been clicked
document.querySelector("#jquery-event-02 button").addEventListener("click", (e) => {
  $(e.target).text("Button clicked!");
});

//When an HTML item has been double clicked
document.querySelector("#jquery-event-03 button").addEventListener("dblclick", (e) => {
  $(e.target).text("Button double clicked!");
});

//When the user presses a key on the keyboard
document.querySelector("#jquery-event-04 button").addEventListener("click", (e) => {
  let $paragraph = $(e.target).next();
  $(e.target).prop("disabled", "true");
  $(e.target).text("Now press any key");
  document.addEventListener("keydown", (e) => {
    $paragraph.text(e.key);
  });
});

//When the user moves the mouse cursor
document.querySelector("#jquery-event-05 button").addEventListener("click", (e) => {
  let $paragraph = $(e.target).next();
  document.addEventListener("mousemove", (e) => {
    $paragraph.text("pageX: " + e.pageX + " - pageY: " + e.pageY);
  });
});

//When the user changes a value of an text input
$("#jquery-event-06 input").on("input", (e) => {
  let $input = $(e.target).parent().children("input");
  let $paragraph = $("#jquery-event-06 .exercise__try p");
  $paragraph.text($input[0].value);
});

//When an image is loaded
var imgJquery = false;
$("#jquery-event-07 img").on("load", () => {
  imgJquery = true;
});
$("#jquery-event-07 button").on("click", (e) => {
  $(e.target).parent().children("p").text(imgJquery);
});

//When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
var imgErrorjquery = false;
$("#jquery-event-08 img").on("load", () => {
  imgErrorjquery = true;
});
$("#jquery-event-08 button").on("click", (e) => {
  $(e.target).parent().children("p").text(imgErrorjquery);
});

//When a form is submitted
$("#jquery-event-09 form").on("submit", (e) => {
  e.preventDefault();
  $(e.target).parent().children("p").text("Form submitted!");
});

//When the user changes the option of a select element
$("#jquery-event-10 select").on("change", (e) => {
  let $paragraph = $("#jquery-event-10 .exercise__try p");
  $paragraph.text("Selected " + e.target.value);
});

//When you position the mouse over an element
$("#jquery-event-11 button").on("mouseover", (e) => {
  $(e.target).text("Mouse is over!");
});
$("#jquery-event-11 button").on("mouseleave", (e) => {
  $(e.target).text("Mouse is out!");
});

//When a checkbox is checked or unchecked
$("#jquery-event-12 input").on("change", (e) => {
  if (e.target.checked) {
    $(e.target).next().text("Checked");
  } else {
    $(e.target).next().text("Not checked")
  }
});

//When a ul list item is clicked, show the item that was clicked
$("#jquery-event-13 ol").on("click", (e) => {
  let $paragraph = $(e.target).parent().parent().children("p");
  $paragraph.text(e.target.innerText + " was clicked");
});

/* ********************* FUNCTIONS SECTION START ********************************/

//Create an HTML element with any text value
$("#jquery-function-01 button").on("click", () => {
  // document.querySelector("#jquery-function-01 button").addEventListener("click", () => {
  let $paragraph = $("<p></p>").text("Hello World!");
  $("#jquery-function-01 .exercise__try").append($paragraph);
});

//Remove an HTML element with any text value
$("#jquery-function-02 button").on("click", () => {
  $("#jquery-function-02 .exercise__try p").remove();
});

//Append an HTML element with any text value to a parent element
$("#jquery-function-03 button").on("click", () => {
  let $paragraph = $("<p></p>").text("Hello World appended!");
  $("#jquery-function-03 .exercise__try").append($paragraph);
});

//Prepend an HTML element with any text value to a parent element
$("#jquery-function-04 button").on("click", (e) => {
  let $paragraph = $("<p></p>").text("Hello World prepended!");
  $(e.target).parent().prepend($paragraph);
});

//Create and add an HTML element after another element
$("#jquery-function-05 button").on("click", (e) => {
  // // let $paragraph = document.createElement("p");
  // // $paragraph.innerText = "Added after!";
  // let $paragraph = $("<p></p>").text("Added after!");
  // let $reference = $(e.target).parent().children("p").last();
  // // let $reference = e.target.parentNode.querySelector("p");
  // e.target.parentNode.insertBefore($paragraph, $reference.nextSibling);

  let $afterElement = $("<p>Added after!</p>");
  let $reference = $(e.target).next();
  $reference.after($afterElement);
});

//Create and add an HTML element after another element
$("#jquery-function-06 button").on("click", (e) => {
  // let $paragraph = document.createElement("p");
  // $paragraph.innerText = "Added before!";
  let $paragraph = $("<p></p>").text("Added before!");
  let $reference = $(e.target).parent().children("p").last();
  // let $reference = e.target.parentNode.querySelector("p");
  // e.target.parentNode.insertBefore($paragraph, $reference);
  $($reference).insertBefore($paragraph);
});

//Clone an HTML element
$("#jquery-function-07 button").on("click", (e) => {
  let $paragraph = $(e.target).parent().children("p").last();
  let $clone = $paragraph.clone();
  $(e.target).parent().append($clone);
});

//Add a class to an HTML item
$("#jquery-function-08 button").on("click", (e) => {
  let $paragraph = $(e.target).parent().children("p");
  $paragraph.addClass("color-red");
});

//Remove a class to an HTML item
$("#jquery-function-09 button").on("click", (e) => {
  let $paragraph = $(e.target).parent().children("p");
  $paragraph.removeClass("color-red");
});

//Toggle a class to an HTML item
$("#jquery-function-10 button").on("click", (e) => {
  let $paragraph = $(e.target).parent().children("p");
  $paragraph.toggleClass("color-red");
});

//Add a disabled attribute to an HTML button
$("#jquery-function-11 button").on("click", (e) => {
  $(e.target).next().prop("disabled", "true");
});

//Remove a disabled attribute to an HTML button
$("#jquery-function-12 button").on("click", (e) => {
  $(e.target).next().prop("disabled", false);
});

//Set a data-src attribute to a img element
$("#jquery-function-13 button").on("click", (e) => {
  $(e.target).parent().children("img").attr("data-src", "img-function-13");
});

//Remove a data-src attribute to a img element
$("#jquery-function-14 button").on("click", (e) => {
  $(e.target).parent().children("img").removeAttr("data-src");
});

//Hide an HTML element on click (display: none)
$("#jquery-function-15 button").on("click", (e) => {
  $(e.target).next().css("display", "none");
});

//Show an HTML element on click (display: block)
$("#jquery-function-16 button").on("click", (e) => {
  $(e.target).parent().children("p").css("display", "block");
});

//Fade in an HTML element using jQuery
$("#jquery-function-17 button").on("click", (e) => {
  $(e.target).parent().children("img").fadeIn("slow");
});

//Fade out an HTML element using jQuery
$("#jquery-function-18 button").on("click", (e) => {
  $(e.target).parent().children("img").fadeOut("slow");
});

//Animate an item after 2s from the initial page load
$("#jquery-function-19 button").on("click", () => {
  location.reload(true);
});

/* ********************* SELECTORS SECTION START ********************************/

//Iterate a collection of elements
$("#jquery-selector-01 button").on("click", (e) => {
  let $paragraphs = $(e.target).parent().children("p");
  $paragraphs.each((index, element) => {
    $(element)
      .text($(element).text() + " iterated!")
      .addClass("color-red");
  });
});

//Iterate a collection of elements
$("#jquery-selector-02 button").on("click", (e) => {
  $(e.target).parent().css("fontWeight", "bold");
});

//Get the collection of children of a certain element
$("#jquery-selector-03 button").on("click", (e) => {
  let $children = $(e.target).next().children("p");
  $children.each((index, element) => {
    $(element).css("fontWeight", "bold");
  });
});

//Get all the elements that have a certain class and change their font weight
$("#jquery-selector-04 button").on("click", () => {
  let $elements = document.getElementsByClassName("selector-04-example");
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].style.fontWeight = "bold";
  }
});

//Get an item by id and change its font weight
$("#jquery-selector-05 button").on("click", () => {
  $("#selector-05-example").css("fontWeight", "bold");
});

//Get all the elements that have a certain class and the display property of none and change their font color
$("#jquery-selector-06 button").on("click", () => {
  $(".selector-06-example:hidden").css({ display: "block", color: "#DB4437" });
});

//Get the options of a select element that are selected (attribute selected)
$("#jquery-selector-07 select").on("change", () => {
  let $selectValue = $("#jquery-selector-07 select").val();
  let $paragraph = $("#jquery-selector-07 .exercise__try p");
  $paragraph.text("Selected " + $selectValue);
});

//Change the href attribute of the first <a> element (You have to create several <a> elements)
$("#jquery-selector-08 button").on("click", (e) => {
  let $anchors = $(e.target).parent().children("a");
  $anchors[0].href = "http://blank.html";
});

//Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
$("#jquery-selector-09 button").on("click", (e) => {
  let $inputValue = $(e.target).parent().children("input")[0].value;
  alert($inputValue);
});

//Remove all items from a specific selector
$("#jquery-selector-10 button").on("click", (e) => {
  let $elements = $(e.target).parent().children("p");
  $elements.each((index, element) => {
    element.remove();
  })
});