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

/* JS AND JQ 42 EXAMPLES FOR EACH (to inject in its screens respectvely) */

function examples() {
  switch (clickedItem) {
    case "act1":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
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
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
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
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn2 = document.createElement("button");
      btn2.textContent = "Click me!";
      screenJs.appendChild(btn2);
      btn2.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn2 = $('<input type="button" value="Press me, please ;)"/>');
      $btn2.appendTo($(screenJq));
      $btn2.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act3":
        screenJs.innerHTML = `<pre><code>
        &lt;script&gt;
        let paragraph = document.createElement("p"); 
        paragraph.textContent = "This is a new paragraph"; 
        let element = document.getElementById("#foo");
        element.appendChild(pararagraph); 
        &lt;/script&gt;
        </code>
        </pre>`;
        let btn3 = document.createElement("button");
        btn3.textContent = "Click me!";
        screenJs.appendChild(btn3);
        btn3.addEventListener("click", () => {
          const paragraph = document.createElement("p");
          paragraph.textContent =
            "This is a new paragraph.! You have just created a new element using Javascript.";
          screenJs.appendChild(paragraph);
        });
        screenJq.textContent = '';
        screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
        let $btn3 = $('<input type="button" value="Press me, please ;)"/>');
        $btn3.appendTo($(screenJq));
        $btn3.on("click", () => {
          $(screenJq).append(
            $(
              "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
            )
          );
        });
        break;
  
        case "act4":
          screenJs.innerHTML = `<pre><code>
          &lt;script&gt;
          let paragraph = document.createElement("p"); 
          paragraph.textContent = "This is a new paragraph"; 
          let element = document.getElementById("#foo");
          element.appendChild(pararagraph); 
          &lt;/script&gt;
          </code>
          </pre>`;
          let btn4 = document.createElement("button");
          btn4.textContent = "Click me!";
          screenJs.appendChild(btn4);
          btn4.addEventListener("click", () => {
            const paragraph = document.createElement("p");
            paragraph.textContent =
              "This is a new paragraph.! You have just created a new element using Javascript.";
            screenJs.appendChild(paragraph);
          });
          screenJq.textContent = '';
          screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
          let $btn4 = $('<input type="button" value="Press me, please ;)"/>');
          $btn4.appendTo($(screenJq));
          $btn4.on("click", () => {
            $(screenJq).append(
              $(
                "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
              )
            );
          });
          break;

          case "act5":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn5 = document.createElement("button");
      btn5.textContent = "Click me!";
      screenJs.appendChild(btn5);
      btn5.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn5 = $('<input type="button" value="Press me, please ;)"/>');
      $btn5.appendTo($(screenJq));
      $btn5.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act6":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn6 = document.createElement("button");
      btn6.textContent = "Click me!";
      screenJs.appendChild(btn6);
      btn6.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn6 = $('<input type="button" value="Press me, please ;)"/>');
      $btn6.appendTo($(screenJq));
      $btn6.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act7":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn7 = document.createElement("button");
      btn7.textContent = "Click me!";
      screenJs.appendChild(btn7);
      btn7.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn7 = $('<input type="button" value="Press me, please ;)"/>');
      $btn7.appendTo($(screenJq));
      $btn7.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act8":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn8 = document.createElement("button");
      btn8.textContent = "Click me!";
      screenJs.appendChild(btn8);
      btn8.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn8 = $('<input type="button" value="Press me, please ;)"/>');
      $btn8.appendTo($(screenJq));
      $btn8.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act9":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn9 = document.createElement("button");
      btn9.textContent = "Click me!";
      screenJs.appendChild(btn9);
      btn9.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn9 = $('<input type="button" value="Press me, please ;)"/>');
      $btn9.appendTo($(screenJq));
      $btn9.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act10":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn10 = document.createElement("button");
      btn10.textContent = "Click me!";
      screenJs.appendChild(btn10);
      btn10.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn10 = $('<input type="button" value="Press me, please ;)"/>');
      $btn10.appendTo($(screenJq));
      $btn10.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act11":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn11 = document.createElement("button");
      btn11.textContent = "Click me!";
      screenJs.appendChild(btn11);
      btn11.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn11 = $('<input type="button" value="Press me, please ;)"/>');
      $btn11.appendTo($(screenJq));
      $btn11.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act12":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn12 = document.createElement("button");
      btn12.textContent = "Click me!";
      screenJs.appendChild(btn12);
      btn12.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn12 = $('<input type="button" value="Press me, please ;)"/>');
      $btn12.appendTo($(screenJq));
      $btn12.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act13":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn14 = document.createElement("button");
      btn13.textContent = "Click me!";
      screenJs.appendChild(btn13);
      btn13.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn13 = $('<input type="button" value="Press me, please ;)"/>');
      $btn13.appendTo($(screenJq));
      $btn13.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act14":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn14= document.createElement("button");
      btn14.textContent = "Click me!";
      screenJs.appendChild(btn14);
      btn14.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn14 = $('<input type="button" value="Press me, please ;)"/>');
      $btn14.appendTo($(screenJq));
      $btn14.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act15":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn15 = document.createElement("button");
      btn15.textContent = "Click me!";
      screenJs.appendChild(btn15);
      btn15.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn15 = $('<input type="button" value="Press me, please ;)"/>');
      $btn15.appendTo($(screenJq));
      $btn15.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act16":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn16 = document.createElement("button");
      btn16.textContent = "Click me!";
      screenJs.appendChild(btn16);
      btn16.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn16 = $('<input type="button" value="Press me, please ;)"/>');
      $btn16.appendTo($(screenJq));
      $btn16.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act17":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn17 = document.createElement("button");
      btn17.textContent = "Click me!";
      screenJs.appendChild(btn17);
      btn17.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn17 = $('<input type="button" value="Press me, please ;)"/>');
      $btn17.appendTo($(screenJq));
      $btn17.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act18":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn18 = document.createElement("button");
      btn18.textContent = "Click me!";
      screenJs.appendChild(btn18);
      btn18.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn18 = $('<input type="button" value="Press me, please ;)"/>');
      $btn18.appendTo($(screenJq));
      $btn18.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act19":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn19 = document.createElement("button");
      btn19.textContent = "Click me!";
      screenJs.appendChild(btn19);
      btn19.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn19 = $('<input type="button" value="Press me, please ;)"/>');
      $btn19.appendTo($(screenJq));
      $btn19.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act20":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn20 = document.createElement("button");
      btn20.textContent = "Click me!";
      screenJs.appendChild(btn20);
      btn20.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn20 = $('<input type="button" value="Press me, please ;)"/>');
      $btn20.appendTo($(screenJq));
      $btn20.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act21":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn21 = document.createElement("button");
      btn21.textContent = "Click me!";
      screenJs.appendChild(btn21);
      btn21.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn21 = $('<input type="button" value="Press me, please ;)"/>');
      $btn21.appendTo($(screenJq));
      $btn21.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act22":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn22 = document.createElement("button");
      btn22.textContent = "Click me!";
      screenJs.appendChild(btn22);
      btn22.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn22 = $('<input type="button" value="Press me, please ;)"/>');
      $btn22.appendTo($(screenJq));
      $btn22.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act23":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn23 = document.createElement("button");
      btn23.textContent = "Click me!";
      screenJs.appendChild(btn23);
      btn23.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn23 = $('<input type="button" value="Press me, please ;)"/>');
      $btn23.appendTo($(screenJq));
      $btn23.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act24":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn24 = document.createElement("button");
      btn24.textContent = "Click me!";
      screenJs.appendChild(btn24);
      btn24.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn24 = $('<input type="button" value="Press me, please ;)"/>');
      $btn24.appendTo($(screenJq));
      $btn24.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act25":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn25 = document.createElement("button");
      btn25.textContent = "Click me!";
      screenJs.appendChild(btn25);
      btn25.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn25 = $('<input type="button" value="Press me, please ;)"/>');
      $btn25.appendTo($(screenJq));
      $btn25.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act26":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn26 = document.createElement("button");
      btn26.textContent = "Click me!";
      screenJs.appendChild(btn26);
      btn26.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn26 = $('<input type="button" value="Press me, please ;)"/>');
      $btn26.appendTo($(screenJq));
      $btn26.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act27":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn27 = document.createElement("button");
      btn27.textContent = "Click me!";
      screenJs.appendChild(btn27);
      btn27.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn27 = $('<input type="button" value="Press me, please ;)"/>');
      $btn27.appendTo($(screenJq));
      $btn27.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act28":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn28 = document.createElement("button");
      btn28.textContent = "Click me!";
      screenJs.appendChild(btn28);
      btn28.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn28 = $('<input type="button" value="Press me, please ;)"/>');
      $btn28.appendTo($(screenJq));
      $btn28.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act29":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn29 = document.createElement("button");
      btn29.textContent = "Click me!";
      screenJs.appendChild(btn29);
      btn29.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn29 = $('<input type="button" value="Press me, please ;)"/>');
      $btn29.appendTo($(screenJq));
      $btn29.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act30":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn30 = document.createElement("button");
      btn30.textContent = "Click me!";
      screenJs.appendChild(btn30);
      btn30.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn30 = $('<input type="button" value="Press me, please ;)"/>');
      $btn30.appendTo($(screenJq));
      $btn30.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act31":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn31 = document.createElement("button");
      btn31.textContent = "Click me!";
      screenJs.appendChild(btn31);
      btn31.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn31 = $('<input type="button" value="Press me, please ;)"/>');
      $btn31.appendTo($(screenJq));
      $btn31.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act32":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn32 = document.createElement("button");
      btn32.textContent = "Click me!";
      screenJs.appendChild(btn32);
      btn32.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn32 = $('<input type="button" value="Press me, please ;)"/>');
      $btn32.appendTo($(screenJq));
      $btn32.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act33":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn2 = document.createElement("button");
      btn2.textContent = "Click me!";
      screenJs.appendChild(btn2);
      btn2.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn2 = $('<input type="button" value="Press me, please ;)"/>');
      $btn2.appendTo($(screenJq));
      $btn2.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act34":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn34 = document.createElement("button");
      btn34.textContent = "Click me!";
      screenJs.appendChild(btn34);
      btn34.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn34 = $('<input type="button" value="Press me, please ;)"/>');
      $btn34.appendTo($(screenJq));
      $btn34.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act35":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn35 = document.createElement("button");
      btn35.textContent = "Click me!";
      screenJs.appendChild(btn35);
      btn35.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn35 = $('<input type="button" value="Press me, please ;)"/>');
      $btn35.appendTo($(screenJq));
      $btn35.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act36":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn36 = document.createElement("button");
      btn36.textContent = "Click me!";
      screenJs.appendChild(btn36);
      btn36.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn36 = $('<input type="button" value="Press me, please ;)"/>');
      $btn36.appendTo($(screenJq));
      $btn36.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act37":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn37 = document.createElement("button");
      btn37.textContent = "Click me!";
      screenJs.appendChild(btn37);
      btn37.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn37 = $('<input type="button" value="Press me, please ;)"/>');
      $btn37.appendTo($(screenJq));
      $btn37.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act38":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn38 = document.createElement("button");
      btn38.textContent = "Click me!";
      screenJs.appendChild(btn38);
      btn38.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn38 = $('<input type="button" value="Press me, please ;)"/>');
      $btn38.appendTo($(screenJq));
      $btn38.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act39":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn39 = document.createElement("button");
      btn39.textContent = "Click me!";
      screenJs.appendChild(btn39);
      btn39.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn39 = $('<input type="button" value="Press me, please ;)"/>');
      $btn39.appendTo($(screenJq));
      $btn39.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act40":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn40 = document.createElement("button");
      btn40.textContent = "Click me!";
      screenJs.appendChild(btn40);
      btn40.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn40 = $('<input type="button" value="Press me, please ;)"/>');
      $btn40.appendTo($(screenJq));
      $btn40.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act41":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn41 = document.createElement("button");
      btn41.textContent = "Click me!";
      screenJs.appendChild(btn41);
      btn41.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn41 = $('<input type="button" value="Press me, please ;)"/>');
      $btn41.appendTo($(screenJq));
      $btn41.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

      case "act42":
      screenJs.innerHTML = `<pre><code>
      &lt;script&gt;
      let paragraph = document.createElement("p"); 
      paragraph.textContent = "This is a new paragraph"; 
      let element = document.getElementById("#foo");
      element.appendChild(pararagraph); 
      &lt;/script&gt;
      </code>
      </pre>`;
      let btn42 = document.createElement("button");
      btn42.textContent = "Click me!";
      screenJs.appendChild(btn42);
      btn42.addEventListener("click", () => {
        const paragraph = document.createElement("p");
        paragraph.textContent =
          "This is a new paragraph.! You have just created a new element using Javascript.";
        screenJs.appendChild(paragraph);
      });
      screenJq.textContent = '';
      screenJq.textContent = `$('container').append($('<p>This is a new paragraph! You have just created a new element using Javascript.</p>)';`;
      let $btn42 = $('<input type="button" value="Press me, please ;)"/>');
      $btn42.appendTo($(screenJq));
      $btn42.on("click", () => {
        $(screenJq).append(
          $(
            "<p>This is a new paragraph! You have just created a new element using Javascript.</p>"
          )
        );
      });
      break;

    default:
      break;
  };
  return clickedItem;
};

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
