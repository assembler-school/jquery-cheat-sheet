//Create an HTML element
document
  .querySelector("#Function1V button")
  .addEventListener("click", function () {
    let btn = document.createElement("button");
    btn.innerText = "This is a button";
    document.querySelector("#Function1V .demo").append(btn);
  });

//Remove an HTML element

document
  .querySelector("#Function2V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function2V .demo p");
    pElement.remove();
  });

// Append an HTML element

document
  .querySelector("#Function3V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    pElement.innerText = "This is a paragraph";
    document.querySelector("#Function3V .demo").append(pElement);
  });

//Prepend an HTML element

document
  .querySelector("#Function4V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function4V .demo");
    pElement.innerText = "This is a paragraph";
    parentElement.insertBefore(pElement, parentElement.firstChild);
  });

//Create + add an html element after another element

document
  .querySelector("#Function5V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function5V .demo");
    let previousElement = document.querySelector("#Function5V .demo p");
    pElement.innerText = "Im also a paragraph";
    parentElement.insertBefore(pElement, previousElement.nextSibling);
  });

//Create + add an html element before another element

document
  .querySelector("#Function6V button")
  .addEventListener("click", function () {
    let pElement = document.createElement("p");
    let parentElement = document.querySelector("#Function6V .demo");
    let lastElement = document.querySelector("#Function6V .demo p:last-child");
    pElement.innerText = "Im also a paragraph";
    parentElement.insertBefore(pElement, lastElement);
  });

//Clone an HTML element

document
  .querySelector("#Function7V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function7V .demo p");
    let clonedElement = pElement.cloneNode(true);
    pElement.parentElement.append(clonedElement);
  });

//Add a class to an HTML item

document
  .querySelector("#Function8V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function8V .demo p");
    pElement.classList.add("bgPastelBlue");
  });

//Remove a class to an HTML item

document
  .querySelector("#Function9V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function9V .demo p");
    pElement.classList.remove("bgPastelBlue");
  });

//Toggle a class to an HTML item

document
  .querySelector("#Function10V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function10V .demo p");
    pElement.classList.toggle("bgPastelBlue");
  });

//Add a disabled attribute to an HTML button

document
  .querySelector("#Function11V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function11V .demo button:last-child"
    );
    pElement.disabled = true;
  });

//Remove the disabled attribute to an HTML button

document
  .querySelector("#Function12V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function12V .demo button:last-child"
    );
    pElement.disabled = false;
  });

//Set a data-src attribute to a img element

document
  .querySelector("#Function13V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function13V .demo img");
    pElement.setAttribute("data-src", "example");
  });

//Remove the data-src attribute of the img element

document
  .querySelector("#Function14V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function14V .demo img");
    pElement.removeAttribute("data-src");
  });

//Hide an HTML element on click (display: none)

document
  .querySelector("#Function15V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector("#Function15V .demo button");
    pElement.style.display = "none";
  });

//Show an HTML element on click (display: block)

document
  .querySelector("#Function16V button")
  .addEventListener("click", function () {
    let pElement = document.querySelector(
      "#Function16V .demo button:last-child"
    );
    pElement.style.display = "block";
  });

//SELECTORS

//Iterate a collection of elements

document
  .querySelector("#Selector1V button")
  .addEventListener("click", function () {
    let pElements = document.querySelectorAll("#Selector1V .demo p");
    pElements.forEach((element) => {
      element.classList.add("bgPastelBlue");
    });
  });

//Get the parent element of a certain element

document
  .querySelector("#Selector2V button")
  .addEventListener("click", function () {
    let parentElement = document.querySelector(
      "#Selector2V .demo button"
    ).parentNode;
    parentElement.style.fontWeight = "bold";
  });

//Get the collection of children of a certain element

document
  .querySelector("#Selector3V button")
  .addEventListener("click", function () {
    let childElements = document.querySelector("#Selector3V .demo").children;
    for (let i = 0; i < childElements.length; i++) {
      childElements[i].style.fontWeight = "bold";
    }
  });

//Get all the elements that have a certain class

document
  .querySelector("#Selector4V button")
  .addEventListener("click", function () {
    let classElements = document.getElementsByClassName("selector4V");
    for (let i = 0; i < classElements.length; i++) {
      classElements[i].style.fontWeight = "bold";
    }
  });

//Get all the elements that have a certain class

document
  .querySelector("#Selector5V button")
  .addEventListener("click", function () {
    let pElement = document.getElementById("pSelect5V");
    pElement.style.fontWeight = "bold";
  });

//Get all the elements that have a certain class and property

document
  .querySelector("#Selector6V button")
  .addEventListener("click", function () {
    let elements = document.querySelectorAll(".selector6V");
    elements.forEach((element) => {
      if (element.style.display == "none") {
        element.style.display = "block";
        element.style.color = "blue";
      }
    });
  });

//Get the selected option of a select element

document
  .querySelector("#Selector7V button")
  .addEventListener("click", function () {
    let selectedOption = document.querySelector("#Selector7V select").value;
    document.querySelector("#Selector7V span").innerText = selectedOption;
  });

//Change the href attribute of the first element

document
  .querySelector("#Selector8V button")
  .addEventListener("click", function () {
    let links = document.querySelectorAll("#Selector8V a");
    links[0].href = "https://duckduckgo.com/";
  });

//Show the value of a first input on the page

document
  .querySelector("#Selector9V button")
  .addEventListener("click", function () {
    let input = document.querySelectorAll("#Selector9V input")[0].value;
    alert(input);
  });
