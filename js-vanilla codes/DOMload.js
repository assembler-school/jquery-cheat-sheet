document.addEventListener('DOMContentLoaded', (event) => {
    alert("DOM fully loaded using JS Vanilla");
  });

  
  function addTemplate(){
    let clone = document.importNode(template, true);

    document.getElementById("modal-container").innerHTML=""
    document.getElementById("modal-container").appendChild(clone)

    document.getElementById("close-btn").addEventListener("click", closeButton)
}

  var template = document.getElementById("template").content;
  let buttonClick = document.createElement("BUTTON");
  let instruction = document.createElement("P");
  let jsCode = document.getElementById("js-code");
  let workPlace = document.getElementById("working-place");
  let comment = document.createElement("p")

  instruction.classList.add("instruction");
  comment.classList.add("comment");
  buttonClick.classList.add("click_Btn");