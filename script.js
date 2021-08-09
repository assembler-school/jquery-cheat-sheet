let targetItems = document.querySelectorAll(".ul-action--list");
let modalClose = document.querySelector(".btn-modal--close");
let modalContainer = document.querySelector("#modal-bg");
let tagBody = document.querySelector(".body");
let selectJsBtn = document.querySelector("#btnJS1");
let selectJqBtn = document.querySelector("#btnJQ1");
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

/* FUNCTION CLOSE MODAL CLIKING IN THE BACKGROUND */

document.addEventListener('click', (e) => {
  if (e.target == modalContainer) {
    modalContainer.style.display = "none"
  }
});

/* FUNCTION DISPLAY SELECTED JAVASCRIPT OR JQUERY SCREEN IN MODAL */

selectJsBtn.addEventListener("click", () => {
  screenJs.style.display = "block";
  screenJq.style.display = "none";
});

selectJqBtn.addEventListener("click", () => {
  screenJs.style.display = "none";
  screenJq.style.display = "block";
});

/* JS AND JQ 42 EXAMPLES FOR EACH (to inject in its screens respectvely) */

function examples() {
  switch (clickedItem) {
    case "act1":
      screenJq.textContent = "";
      screenJs.innerHTIML = "";
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "Hi, I am a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn1 = document.createElement("button");
      btn1.textContent = "Click me!";
      screenJs.appendChild(btn1);
      btn1.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph you have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });

      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn1 = $('<input type="button" value="Press me, please ;)"/>');
      $btn1.appendTo($(screenJq));
      $btn1.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });

      break;


    case "act2":
      screenJq.textContent = "";
      screenJs.innerHTIML = "";
      screenJs.innerHTML = `<pre><code>&lt;script&gt;let removedElement = document.getElementById("foo");removedElement.remove();&lt;/script&gt;</code></pre>`;
      let btn2 = document.createElement("button");
      btn2.textContent = "Click me to remove paragraph!";
      screenJs.appendChild(btn2);
      const paragraph = document.createElement("p");
      paragraph.textContent = "This is the paragraph you will remove using Javascript.";
      screenJs.appendChild(paragraph);
      btn2.addEventListener("click", () => {
        paragraph.remove();
      });

      screenJq.textContent = `$("#foo").remove();`;
      let $btn2 = $(
        '<input type="button" value="Click me to remove the paragraph";)"/>'
      );
      $btn2.appendTo($(screenJq));
      $(screenJq).append($("<p id='removedP'>This is a paragraph you will remove using jQuery</p>"));
      $btn2.on("click", () => {
        $('p').remove('');
      });
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
