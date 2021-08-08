let targetItems = document.querySelectorAll(".ul-action--list");
let modalClose = document.querySelector(".btn-modal--close");
let modalContainer = document.querySelector("#modal-bg");
let tagBody = document.querySelector(".body");
let selectJsBtn = document.querySelector("#btn1");
let selectJqBtn = document.querySelector("#btn2");
let screenJs = document.querySelector("#screenJS");
let screenJq = document.querySelector("#screenJQ");
let contentContainer = document.querySelector(".modal-content--container");
var clickedItem;

/* UL LI ITEMS */

let action1;

/* FUNCTION OPEN MODAL WHEN LI IS CLICKED IDENTIFYING WHICH LI ID WAS CLICKED ALSO */

targetItems.forEach((element) => {
  element.addEventListener("click", (e) => {
    if (e.target !== e.currentTarget) {
      modalContainer.style.display = "block";
      clickedItem = e.target.id;
      examples();
    } else if (e.target == e.currentTarget) {
      modalContainer.style.display = "none";
    }
    e.stopPropagation;
  });
});

/* FUNCTION CLOSE MODAL USING CLOSE ICON */

modalClose.addEventListener("click", () => {
  modalContainer.style.display = "none";
});

/* modalContainer.addEventListener('click', () => {
  if (e.target == contentContainer) {
    return null;
  } else {
    modalContainer.style.display = "none"
  }
}); */

/* FUNCTION DISPLAY SELECTED JAVASCRIPT OR JQUERY SCREEN IN MODAL */

selectJsBtn.addEventListener("click", () => {
  screenJs.style.display = "block";
  screenJq.style.display = "none";
});

selectJqBtn.addEventListener("click", () => {
  screenJs.style.display = "none";
  screenJq.style.display = "block";
});

/* JS EXAMPLES */

function examples() {
  switch (clickedItem) {
    case "act1":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      const paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 

      const element = document.getElementById("div1"); 
      element.appendChild(para); 
      &lt;/script&gt;
      </code>
      </pre>`;

      let btn1 = document.createElement("button");
      btn1.textContent = "Click me!";
      screenJs.appendChild(btn1);

      btn1.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent = "This is a new paragraph";

        screenJs.appendChild(paragraph);
      });

      screenJq.textContent = `$("container").append($("<div>", {id: "foo", "class": "a"}));`; //  first selector (container) is the one I want things appended to. The second is what I am creating and appending

      break;

    case "act2":
      screenJs.textContent = "Hello Marcel";

      break;

    default:
      screenJs.textContent = "That is not optionan option";
      break;
  }
  return clickedItem;
}

("Create an HTML element");

("Remove an HTML element");
("Append an HTML element");
("Prepend an HTML element");
("Create and add HTML element after an element");
("Create and add HTML element before an element");
("Clone an HTML element");
("Add class to HTML item");
("Remove class to HTML item");
("Toggle class of HTML item");
("Add disabled attribute to HTML button");
("Remove disabled attribute of HTML button");
("Set data-src attribute to img element");
("Remove data-src attribute of img element");
("Hide HTML element on click (display: none)");
("Show HTML element on click (display: block)");
("Fade in HTML element with jQuery");
("Fade out HTML element with jQuery");
("Animate item after 2s from initial page load");
