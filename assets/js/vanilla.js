'use strict';

/* ********************* EVENTS SECTION START ********************************/

//When the HTML document has been loaded and you can manipulate it with JavaScript
var htmlLoaded = false;
document.addEventListener("DOMContentLoaded", () => {
  htmlLoaded = true;
});
document.querySelector("#vanilla-event-01 button").addEventListener("click", (e) => {
  e.target.parentNode.querySelector(".result").innerText = htmlLoaded;
});

//When an HTML item has been clicked
document.querySelector("#vanilla-event-02 button").addEventListener("click", (e) => {
  e.target.innerText = "Button clicked!";
});

//When an HTML item has been double clicked
document.querySelector("#vanilla-event-03 button").addEventListener("dblclick", (e) => {
  e.target.innerText = "Button double clicked!";
});

//When the user presses a key on the keyboard
document.querySelector("#vanilla-event-04 button").addEventListener("click", (e) => {
  let $paragraph = e.target.nextSibling;
  e.target.disabled = true;
  e.target.innerText = "Now press any key";
  document.addEventListener("keydown", (e) => {
    $paragraph.innerText = e.key;
  });
});

//When the user moves the mouse cursor
document.querySelector("#vanilla-event-05 button").addEventListener("click", (e) => {
  let $paragraph = e.target.nextSibling;
  document.addEventListener("mousemove", (e) => {
    $paragraph.innerText = "pageX: " + e.pageX + " - pageY: " + e.pageY;
  });
});

//When the user changes a value of an text input
document.querySelector("#vanilla-event-06 input").addEventListener("input", (e) => {
  let $input = e.target.parentNode.querySelector("input");
  let $paragraph = document.querySelector("#vanilla-event-06 .exercise__try p");
  $paragraph.innerText = $input.value;
});

//When an image is loaded
var imgVanilla = false;
document.querySelector("#vanilla-event-07 img").addEventListener("load", () => {
  imgVanilla = true;
});
document.querySelector("#vanilla-event-07 button").addEventListener("click", (e) => {
  e.target.parentNode.querySelector("p").innerText = imgVanilla;
});

//When an image fails to load, (if you write an incorrect image url the loading of the image will fail)
var imgErrorVanilla = false;
document.querySelector("#vanilla-event-08 img").addEventListener("load", () => {
  imgErrorVanilla = true;
});
document.querySelector("#vanilla-event-08 button").addEventListener("click", (e) => {
  e.target.parentNode.querySelector("p").innerText = imgErrorVanilla;
});

//When a form is submitted
document.querySelector("#vanilla-event-09 form").addEventListener("submit", (e) => {
  e.preventDefault();
  e.target.parentNode.querySelector("p").innerText = "Form submitted!";
});

//When the user changes the option of a select element
document.querySelector("#vanilla-event-10 select").addEventListener("change", (e) => {
  let $paragraph = document.querySelector("#vanilla-event-10 .exercise__try p");
  $paragraph.innerText = "Selected " + e.target.value;
});

//When you position the mouse over an element
document.querySelector("#vanilla-event-11 button").addEventListener("mouseover", (e) => {
  e.target.innerText = "Mouse is over!";
});
document.querySelector("#vanilla-event-11 button").addEventListener("mouseleave", (e) => {
  e.target.innerText = "Mouse is out!";
});

//When a checkbox is checked or unchecked
document.querySelector("#vanilla-event-12 input").addEventListener("change", (e) => {
  if (e.target.checked) {
    e.target.nextSibling.innerText = "Checked";
  } else {
    e.target.nextSibling.innerText = "Not checked";
  }
});

//When a ul list item is clicked, show the item that was clicked
document.querySelector("#vanilla-event-13 ol").addEventListener("click", (e) => {
  let $paragraph = e.target.parentNode.parentNode.querySelector("p");
  $paragraph.innerText = e.target.innerText + " was clicked";
});

/* ********************* FUNCTIONS SECTION START ********************************/

//Create an HTML element with any text value
document.querySelector("#vanilla-function-01 button").addEventListener("click", () => {
  let $paragraph = document.createElement("p");
  $paragraph.innerText = "Hello World!";
  document
    .querySelector("#vanilla-function-01 .exercise__try")
    .appendChild($paragraph);
});

//Remove an HTML element with any text value
document.querySelector("#vanilla-function-02 button").addEventListener("click", () => {
  document
    .querySelector("#vanilla-function-02 .exercise__try p")
    .remove();
});

//Append an HTML element with any text value to a parent element
document.querySelector("#vanilla-function-03 button").addEventListener("click", () => {
  let $paragraph = document.createElement("p");
  $paragraph.innerText = "Hello World appended!";
  document
    .querySelector("#vanilla-function-03 .exercise__try")
    .appendChild($paragraph);
});

//Prepend an HTML element with any text value to a parent element
document.querySelector("#vanilla-function-04 button").addEventListener("click", (e) => {
  let $paragraph = document.createElement("p");
  $paragraph.innerText = "Hello World prepended!";
  e.target.parentNode.insertBefore($paragraph, e.target);
});

//Create and add an HTML element after another element
document.querySelector("#vanilla-function-05 button").addEventListener("click", (e) => {
  let $paragraph = document.createElement("p");
  $paragraph.innerText = "Added after!";
  let $reference = e.target.parentNode.querySelector("p");
  e.target.parentNode.insertBefore($paragraph, $reference.nextSibling);
});

//Create and add an HTML element after another element
document.querySelector("#vanilla-function-06 button").addEventListener("click", (e) => {
  let $paragraph = document.createElement("p");
  $paragraph.innerText = "Added before!";
  let $reference = e.target.parentNode.querySelector("p");
  e.target.parentNode.insertBefore($paragraph, $reference);
});

//Clone an HTML element
document.querySelector("#vanilla-function-07 button").addEventListener("click", (e) => {
  let $paragraph = e.target.parentNode.querySelector("p");
  let $clone = $paragraph.cloneNode(true);
  e.target.parentNode.appendChild($clone);
});

//Add a class to an HTML item
document.querySelector("#vanilla-function-08 button").addEventListener("click", (e) => {
  let $paragraph = e.target.parentNode.querySelector("p");
  $paragraph.classList.add("color-red");
});

//Remove a class to an HTML item
document.querySelector("#vanilla-function-09 button").addEventListener("click", (e) => {
  let $paragraph = e.target.parentNode.querySelector("p");
  $paragraph.classList.remove("color-red");
});

//Toggle a class to an HTML item
document.querySelector("#vanilla-function-10 button").addEventListener("click", (e) => {
  let $paragraph = e.target.parentNode.querySelector("p");
  $paragraph.classList.toggle("color-red");
});

//Add a disabled attribute to an HTML button
document.querySelector("#vanilla-function-11 button").addEventListener("click", (e) => {
  e.target.nextSibling.disabled = true;
});

//Remove a disabled attribute to an HTML button
document.querySelector("#vanilla-function-12 button").addEventListener("click", (e) => {
  e.target.nextSibling.disabled = false;
});

//Set a data-src attribute to a img element
document.querySelector("#vanilla-function-13 button").addEventListener("click", (e) => {
  e.target.parentNode
    .querySelector("img")
    .setAttribute("data-src", "img-function-13");
});

//Remove a data-src attribute to a img element
document.querySelector("#vanilla-function-14 button").addEventListener("click", (e) => {
  e.target.parentNode
    .querySelector("img")
    .removeAttribute("data-src");
});

//Hide an HTML element on click (display: none)
document.querySelector("#vanilla-function-15 button").addEventListener("click", (e) => {
  e.target.nextSibling.style.display = "none";
});

//Show an HTML element on click (display: block)
document.querySelector("#vanilla-function-16 button").addEventListener("click", (e) => {
  e.target.parentNode.querySelector("p").style.display = "block";
});

//Fade in an HTML element using jQuery
document.querySelector("#vanilla-function-17 button").addEventListener("click", (e) => {
  let imgFadeIn = e.target.parentNode.querySelector("img");
  fadeIn(imgFadeIn, 600);
});

//Fade out an HTML element using jQuery
document.querySelector("#vanilla-function-18 button").addEventListener("click", (e) => {
  let imgFadeOut = e.target.parentNode.querySelector("img");
  fadeIn(imgFadeOut, 600);
});

//Animate an item after 2s from the initial page load
document.querySelector("#vanilla-function-19 button").addEventListener("click", () => {
  location.reload(true);
});
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(() => {
    switchStyles();
  }, 2000);
});

/* ********************* SELECTORS SECTION START ********************************/

//Iterate a collection of elements
document.querySelector("#vanilla-selector-01 button").addEventListener("click", (e) => {
  let $paragraphs = e.target.parentNode.querySelectorAll("p");
  for (let i = 0; i < $paragraphs.length; i++) {
    $paragraphs[i].innerText = $paragraphs[i].innerText + " iterated!";
    $paragraphs[i].classList.add("color-red");
  }
});

//Iterate a collection of elements
document.querySelector("#vanilla-selector-02 button").addEventListener("click", (e) => {
  e.target.parentNode.style.fontWeight = "bold";
});

//Get the collection of children of a certain element
document.querySelector("#vanilla-selector-03 button").addEventListener("click", (e) => {
  let $children = e.target.nextSibling.childNodes;
  for (let i = 0; i < $children.length; i++) {
    $children[i].style.fontWeight = "bold";
  }
});

//Get all the elements that have a certain class and change their font weight
document.querySelector("#vanilla-selector-04 button").addEventListener("click", () => {
  let $elements = document.getElementsByClassName("selector-04-example");
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].style.fontWeight = "bold";
  }
});

//Get an item by id and change its font weight
document.querySelector("#vanilla-selector-05 button").addEventListener("click", () => {
  document.getElementById("selector-05-example").style.fontWeight = "bold";
});

//Get all the elements that have a certain class and the display property of none and change their font color
document.querySelector("#vanilla-selector-06 button").addEventListener("click", () => {
  document.querySelectorAll(".selector-06-example").forEach((element) => {
    if (element.style.display == "none") {
      element.style.display = "block";
      element.style.color = "#DB4437";
    }
  });
});

//Get the options of a select element that are selected (attribute selected)
document.querySelector("#vanilla-selector-07 select").addEventListener("change", (e) => {
  let $selectValue = document.querySelector("#vanilla-selector-07 select").value;
  let $paragraph = document.querySelector("#vanilla-selector-07 .exercise__try p");
  $paragraph.innerText = "Selected " + $selectValue;
});

//Change the href attribute of the first <a> element (You have to create several <a> elements)
document.querySelector("#vanilla-selector-08 button").addEventListener("click", (e) => {
  let $anchors = e.target.parentNode.getElementsByTagName("a");
  $anchors[0].href = "http://blank.html";
});

//Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
document.querySelector("#vanilla-selector-09 button").addEventListener("click", (e) => {
  let $inputValue = e.target.parentNode.querySelectorAll("input")[0].value;
  alert($inputValue);
});

//Remove all items from a specific selector
document.querySelector("#vanilla-selector-10 button").addEventListener("click", (e) => {
  let $elements = e.target.parentNode.querySelectorAll("p");
  for (let i = 0; i < $elements.length; i++) {
    $elements[i].remove();
  }
});