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
