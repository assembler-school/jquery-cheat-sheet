//Create an HTML element
document
  .querySelector("#Function1V button")
  .addEventListener("click", function () {
    var btn = document.createElement("button");
    btn.innerText = "This is a button";
    document.querySelector("#Function1V .demo").append(btn);
  });

//Remove an HTML element

document
  .querySelector("#Function2V button")
  .addEventListener("click", function () {
    var pElement = document.querySelector("#Function2V .demo p");
    pElement.remove();
  });

// Append an HTML element

document
  .querySelector("#Function3V button")
  .addEventListener("click", function () {
    var pElement = document.createElement("p");
    pElement.innerText = "This is a paragraph";
    document.querySelector("#Function3V .demo").append(pElement);
  });

//Prepend an HTML element

document
  .querySelector("#Function4V button")
  .addEventListener("click", function () {
    var pElement = document.createElement("p");
    var parentElement = document.querySelector("#Function4V .demo");
    pElement.innerText = "This is a paragraph";
    parentElement.insertBefore(pElement, parentElement.firstChild);
  });

//Create + add an html element after another element

document
  .querySelector("#Function5V button")
  .addEventListener("click", function () {
    var pElement = document.createElement("p");
    var parentElement = document.querySelector("#Function5V .demo");
    var previousElement = document.querySelector("#Function5V .demo p");
    pElement.innerText = "Im also a paragraph element";
    parentElement.insertBefore(pElement, previousElement.nextSibling);
  });
