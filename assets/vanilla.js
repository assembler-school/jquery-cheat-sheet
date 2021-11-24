//Create an HTML element
document
  .querySelector("#Function1V button")
  .addEventListener("click", function () {
    var btn = document.createElement("button");
    btn.innerText = "This is a button";
    document.querySelector("#Function1V .demo").append(btn);
  });

//Remove an HTML element
