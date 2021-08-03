/*---------------------------------------------------------------------------------EVENTS------------------------------------------------------*/

let events = [
    "ready()",
    "click",
    "dbclick",
    "keypress",
    "mousemove",
    "change",
    "load",
    "error",
    "select",
    "submit",
    "option_change",
    "mouseover",
    "change_check",
    "clicked_element",
];

let eventBtn = $('<button class="events" id = "btn-events">EVENTS</button>');
$(".q-links").append(eventBtn);
eventBtn.on("click", () => {
    createEventNavBar();
    readyEvent();
    if (destroyFunctionNavBar) {
        destroyFunctionNavBar();
    }
});

/*create event nav bar*/

function createEventNavBar() {
    for (let i = 0; i < events.length; i++) {
        let navBar = $('<button class = "event-nav-bar nav-btn"> </button>');
        // navBar.attr("href", "#" + events[i]);
        navBar.attr("id", "ev-" + parseInt(i));
        navBar.text(events[i]);
        $("#nav-bar").append(navBar);
        navBar.css({ display: "flex" }, { "flex-direction": "column" });
    }
}

function destroyEventNavBar() {
    $(".event-nav-bar").remove();
}

/*-------------------------------------------------------FUNCTIONS------------------------------------------------------------------------------*/

let functions = [
    "create",
    "remove()",
    "append()",
    "prepend()",
    "after()",
    "before()",
    "clone()",
    "addClass()",
    "removeClass()",
    "toggleClass()",
    "add_attr_disabled",
    "remove_attr_disabled",
    "set_attr_data",
    "remove_attr_data",
    "hide()",
    "show()",
    "fadeIn()_fadeOut()",
    "each().css()",
    "parent()",
    "children()",
    "getByClass",
    "getById",
    "getAllByClass",
    "attr_selected",
    "first()",
    "input.value",
    "remove_all_selectors",
    "animate()",
];

let functionBtn = $(
    '<button class="functions" id = "btn-functions">FUNCTIONS</button>'
);
$(".q-links").append(functionBtn);
functionBtn.on("click", () => {
    createFunctionNavBar();
    if (destroyEventNavBar) {
        destroyEventNavBar();
    }
});

/*create function nav bar*/

function createFunctionNavBar() {
    for (let i = 0; i < functions.length; i++) {
        let navBar = $('<button class = "function-nav-bar nav-btn"> </button>');
        // navBar.attr("href", "#" + functions[i]);
        navBar.attr("id", "fc-" + parseInt(i));
        navBar.text(functions[i]);
        $("#nav-bar").append(navBar);
        navBar.css({ display: "flex" }, { "flex-direction": "column" });
    }
}

function destroyFunctionNavBar() {
    $(".function-nav-bar").remove();
}

/*-------------------------------------------------------Activate templates-------------------------------------------------------*/
let ready = `<template id="ready">
      <h2>
        When the HTML document has been loaded and you can manipulate it with
        JavaScript
      </h2>
      <h3>jQuery</h3>
      <code>
        $(document).ready(() => { console.log('Document is ready!'); });
      </code>

      <h3>Vanilla</h3>
      <code>
        document.addEventListener("load", () => { console.log("Document is
        ready!"); });
      </code>
      <h3>Sources:</h3>
      <ul>
      <li><a
        href="https://www.techiediaries.com/javascript/document-ready-vs-window-onload-vs-window-load/"
      >https://www.techiediaries.com/javascript/document-ready-vs-window-onload-vs-window-load/</a></li>
      <li><a href="https://www.youtube.com/watch?v=OFKDCJIgxUk">https://www.youtube.com/watch?v=OFKDCJIgxUk</a></li>
      <div class="vanilla">

      </div>
      <div class="query">

      </div>
      <script>
          $(document).ready(() => { console.log('Document is ready!'); });
          document.addEventListener("load", () => { console.log("Document is
        ready!"); });
      </script>
    </template>`;

function readyEvent() {
    let ele1 = document.getElementById("ev-0");
    ele1.addEventListener("click", () => {
        console.log(ele1);
        let container = document.querySelector(".content");
        container.insertAdjacentHTML("beforeend", ready);
        let readys = document.querySelector("#ready").content;
        let readysCopy = document.importNode(readys, true);
        container.appendChild(readysCopy);
    });
}

/*-------------------------------------------------------END OF NAV BAR-------------------------------------------------------*/