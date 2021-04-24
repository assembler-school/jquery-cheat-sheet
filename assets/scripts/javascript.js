// When the HTML document has been loaded and you can manipulate it with JavaScript
document.addEventListener("DOMContentLoaded", function () {
  let div1 = document.querySelector(".ex1js");
  div1.innerHTML = "What the other text said...";
});

// When an HTML item has been clicked
let buttonEx1 = document.querySelector(".article__ex--2js button");
buttonEx1.addEventListener("click", function () {
  buttonEx1.innerHTML = "Well clicked, Sir";
  let tou1 = setTimeout(function () {
    buttonEx1.innerHTML = "Click me!";
    clearTimeout(tou1);
  }, 3000);
});

//When an HTML item has been double clicked
let doubleDot = document.querySelector(".ex3js__dot");
doubleDot.addEventListener("dblclick", function () {
  document.querySelector(".ex3js__p").innerHTML = "That's right!";
});

doubleDot.addEventListener("click", function () {
  document.querySelector(".ex3js__p").innerHTML = "No!";
});

//When the user presses a key on the keyboard
document.addEventListener("keydown", function (e) {
  document.querySelector(".ex4js_p").innerHTML =
    "What are you trying to say with '" + e.key + "'?";
});

//When the user moves the mouse cursor
document.querySelector(".ex5").addEventListener("mousemove", function () {
  document.querySelector(".ex5js_p").innerHTML = "I said still!!!";
});

document.querySelector(".ex5").addEventListener("mouseout", function () {
  document.querySelector(".ex5js_p").innerHTML = "Don't come again!";
});

//When the user changes a value of a text input
document.querySelector(".ex6js_input").addEventListener("input", function (e) {
  document.querySelector(".ex6js_p").innerHTML = "That's better!";
  if (e.target.value == "I'm a dumb text!") {
    document.querySelector(".ex6js_p").innerHTML = "Not this again...";
  }
});

//When an image is loaded
let image7 = document.querySelector(".ex7js_img");
let p7 = document.querySelector(".ex7js_p");

document.querySelector(".ex7").addEventListener("click", function () {
  if (document.querySelector(".ex8").style.display != "none") {
    let tou7 = setTimeout(function () {
      image7.setAttribute(
        "src",
        "https://images.unsplash.com/photo-1540573133985-87b6da6d54a9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1510&q=80"
      );
      clearTimeout(tou7);
    }, 4000);
  }
});

image7.addEventListener("load", function () {
  p7.innerHTML = "Surprise!";
});

//When an image fails to load
let image8 = document.querySelector(".ex8js_img");
let p8 = document.querySelector(".ex8js_p");

document.querySelector(".ex8").addEventListener("click", function () {
  if (document.querySelector(".ex8").style.display != "none") {
    let tou8 = setTimeout(function () {
      image8.setAttribute("src", "ups");
      clearTimeout(tou8);
    }, 4000);
  }
});

image8.addEventListener("error", function () {
  p8.innerHTML = "Oh no, what happened?";
});

//When a form is submitted
document.querySelector(".ex9js_form").addEventListener("submit", function (e) {
  e.preventDefault();

  document.querySelector(".ex9js_p").innerHTML =
    "Yes, we know jQuery is better.";
});

// When the user changes the option of a select element
let selection10 = document.getElementById("ex10js_colors");
selection10.addEventListener("change", function () {
  document.querySelector(".ex10js_p").innerHTML =
    "You like " + selection10.value;
});

// When you position the mouse over an element
document
  .querySelector(".ex11js_div")
  .addEventListener("mouseover", function () {
    document.querySelector(".ex11js_div").style.color = "black";
  });

document.querySelector(".ex11js_div").addEventListener("mouseout", function () {
  document.querySelector(".ex11js_div").style.color = "white";
});

// When a checkbox is checked or unchecked
let check12 = document.getElementById("ex12js_check");
let p12 = document.querySelector(".ex12js_p");
check12.addEventListener("change", function () {
  check12.checked
    ? (p12.innerHTML = "The box is checked.")
    : (p12.innerHTML = "The box is unchecked.");
});

// When a ul list item is clicked, show the item that was clicked
let li13 = document.querySelectorAll(".ex13js_li");
li13.forEach(function (li) {
  li.addEventListener("click", function (e) {
    li13.forEach((element) => {
      element.style.textDecoration = "line-through";
      element.style.fontWeight = "normal";
    });
    e.target.style.textDecoration = "none";
    e.target.style.fontWeight = "bold";
  });
});

// Create an HTML element with any text value
document.querySelector(".ex14js_btn").addEventListener("click", function () {
  let secondP = document.createElement("p");
  document.querySelector(".ex14js").append((secondP.innerHTML = "It's alive!"));
});

// Remove an HTML element with any text value
document.querySelector(".ex15js_btn").addEventListener("click", function () {
  if (document.querySelector(".ex15js_p")) {
    document.querySelector(".ex15js_p").remove();
  }
});

// Append an HTML element with any text value to a parent element
document.querySelector(".ex16js_btn").addEventListener("click", function () {
  let ex16p = document.createElement("p");
  ex16p.innerHTML = "Three? Three is a crowd!";
  document.querySelector(".ex16js").append(ex16p);
});

// Prepend an HTML element with any text value to a parent element
document.querySelector(".ex17js_btn").addEventListener("click", function () {
  let ex17p = document.createElement("p");
  ex17p.innerHTML = "Behind you!";
  document.querySelector(".ex17js").prepend(ex17p);
});

// Create and add an HTML element with any text value after another element
document.querySelector(".ex18js_btn").addEventListener("click", function () {
  let ex18li = document.createElement("li");
  ex18li.innerHTML = "Ducks don't produce echo!";
  document
    .querySelector(".ex18js_li")
    .insertAdjacentElement("afterend", ex18li);
});

// Create and add an HTML element with any text value before another element
document.querySelector(".ex19js_btn").addEventListener("click", function () {
  let ex19li = document.createElement("li");
  ex19li.innerHTML = "ECHO";
  document
    .querySelector(".ex19js_li")
    .insertAdjacentElement("beforebegin", ex19li);
});

// Clone an HTML element within other element
document.querySelector(".ex20js_btn").addEventListener("click", function () {
  let jedi = document.getElementById("jedi_js").cloneNode(true);
  document.querySelector(".ex20js_blue").append(jedi);
});

// Add a class to an HTML item
document.querySelector(".ex21js_btn").addEventListener("click", function () {
  document.querySelector(".ex21js").classList.add("ex21js--change");
});

// Remove a class to an HTML item
document.querySelector(".ex22js_btn").addEventListener("click", function () {
  document.getElementById("ex22js").classList.remove("ex21js--change");
});

// Toggle a class of an HTML item
document.querySelector(".ex23js_btn").addEventListener("click", function () {
  document.getElementById("ex23js").classList.toggle("ex23js--change");
});

// Add a disabled attribute to an HTML button
let button24 = document.querySelector(".ex24js_btn");
button24.addEventListener("click", function () {
  button24.setAttribute("disabled", "true");
});

// Remove the disabled attribute of an HTML button
let button25 = document.querySelector(".ex25js_btn");
document.getElementById("ex25js_boss").addEventListener("click", function () {
  button25.removeAttribute("disabled");
  button25.innerHTML = "I was doing something!";
});

// Set a data-src attribute to a img element
document.querySelector(".ex26js_btn").addEventListener("click", function () {
  let img26 = document.getElementById("ex26js");
  img26.setAttribute("data-japanese", "凄い");
  document.querySelector(".ex26js_btn").innerHTML = img26.dataset.japanese;
});

// Remove the data-src attribute of the img element
document.querySelector(".ex27js_btn").addEventListener("click", function () {
  document.getElementById("ex27js").removeAttribute("data-japanese");
  document.querySelector(".ex27js_btn").innerHTML = "";
});

// Hide an HTML element on click (display: none)
document.querySelector(".ex28js_btn").addEventListener("click", function () {
  document.getElementById("ex28js").style.display = "none";
});

// Show an HTML element on click (display: block)
document.querySelector(".ex29js_btn").addEventListener("click", function () {
  document.getElementById("ex29js").style.display = "block";
});

// Fade in an HTML element using jQuery
document.querySelector(".ex30js_btn").addEventListener("click", function () {
  document.getElementById("ex30js").style.transition = "opacity 5s";
  document.getElementById("ex30js").style.opacity = "1";
});

//Fade out an HTML element using jQuery
document.querySelector(".ex31js_btn").addEventListener("click", function () {
  document.getElementById("ex31js").style.transition = "opacity 5s";
  document.getElementById("ex31js").style.opacity = "0";
});
