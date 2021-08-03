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
    // readyEventjQuery();
    eventConstructors(ready, "ev-0");
    eventConstructors(click, "ev-1");
    eventConstructors(dbClick, "ev-2");
    eventConstructors(keyPress, "ev-3");
    eventConstructors(mouseEvent, "ev-4");
    eventConstructors(changeInput, "ev-5");
    eventConstructors(loadImg, "ev-6");
    eventConstructors(errorImg, "ev-7");
    eventConstructors(submitted, "ev-8");
    eventConstructors(optionChange, "ev-9");
    eventConstructors(mouseOver, "ev-10");
    eventConstructors(changeCheck, "ev-11");
    eventConstructors(clickedElement, "ev-12");

    if (destroyFunctionNavBar && destroySelectorNavBar) {
        destroyFunctionNavBar();
        destroySelectorNavBar();
    }
});

/*create event nav bar*/

function createEventNavBar() {
    $("#nav-bar").html("");
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
    "animate()",
];

let functionBtn = $(
    '<button class="functions" id = "btn-functions">FUNCTIONS</button>'
);
$(".q-links").append(functionBtn);
functionBtn.on("click", () => {
    createFunctionNavBar();
    eventConstructors(createHtml, "fc-0");
    eventConstructors(removeHtml, "fc-1");
    eventConstructors(appendC, "fc-2");
    eventConstructors(prepend, "fc-3");
    eventConstructors(insertAfter, "fc-4");
    eventConstructors(insertBefore, "fc-5");
    eventConstructors(cloning, "fc-6");
    eventConstructors(addClass, "fc-7");
    eventConstructors(removeClass, "fc-8");
    eventConstructors(toggleClass, "fc-9");
    eventConstructors(addDisabled, "fc-10");
    eventConstructors(removeDisabled, "fc-11");
    eventConstructors(setDataAttr, "fc-12");
    eventConstructors(removeDataAttr, "fc-13");
    eventConstructors(hideEle, "fc-14");
    eventConstructors(showEle, "fc-15");
    eventConstructors(fadeInOut, "fc-16");
    eventConstructors(animaTe, "fc-17");
    if (destroyEventNavBar && destroySelectorNavBar) {
        destroyEventNavBar();
        destroySelectorNavBar();
    }
});

/*create function nav bar*/

function createFunctionNavBar() {
    $("#nav-bar").html("");
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

/*-------------------------------------------------------SELECTORS-----------------------------------------------------------------*/

let selectors = [
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
];

let selectorBtn = $(
    '<button class="selectors" id = "btn-selectors">SELECTORS</button>'
);
$(".q-links").append(selectorBtn);
selectorBtn.on("click", () => {
    createSelectorNavBar();
    eventConstructors(eachCss, "sc-0");
    eventConstructors(PaRent, "sc-1");
    eventConstructors(chiLd, "sc-2");
    eventConstructors(getByKlass, "sc-3");
    eventConstructors(getByYd, "sc-4");
    eventConstructors(allKlass, "sc-5");
    eventConstructors(attrSelect, "sc-6");
    eventConstructors(primaSelect, "sc-7");
    eventConstructors(inputValue, "sc-8");
    eventConstructors(removeAllSe, "sc-9");

    if (destroyEventNavBar && destroyFunctionNavBar) {
        destroyEventNavBar();
        destroyFunctionNavBar();
    }
});

/*create function nav bar*/

function createSelectorNavBar() {
    $("#nav-bar").html("");
    for (let i = 0; i < selectors.length; i++) {
        let navBar = $('<button class = "selector-nav-bar nav-btn"> </button>');
        // navBar.attr("href", "#" + selectors[i]);
        navBar.attr("id", "sc-" + parseInt(i));
        navBar.text(selectors[i]);
        $("#nav-bar").append(navBar);
        navBar.css({ display: "flex" }, { "flex-direction": "column" });
    }
}

function destroySelectorNavBar() {
    $(".selector-nav-bar").remove();
}

/*-------------------------------------------------------Activate templates-------------------------------------------------------*/

/*-------------------------------------------------------END OF NAV BAR-------------------------------------------------------*/

/*-------------------------------------------------------EVENTS-----------------------------------------------------------------*/
// function readyEventjQuery() {
//     $("#ev-0").on("click", () => {
//         $(document).on("load", () => {
//             alert("Document is jQ_ready!");
//         });
//     });
// }

// function activateEvent() {
//     console.log("Document is jQ_ready!");
//     if ($("#ev-1").length) {

//         $("#ev-1").on("click", () => {
//             clickEventjQuery();
//             clickEventJS();
//         });
//     }
// }

// function clickEventjQuery() {
//     $(".demo").html = "";
//     $(".question").html = "When an HTML item has been clicked";
//     $("jQuery").on("click", () => {
//             $(".jQuery").html = "jQuery";
//         }
//     }

function eventConstructors(x, y) {
    let ele1 = document.getElementById(y);
    ele1.addEventListener("click", () => {
        let container = document.querySelector(".content");
        container.innerHTML = "";
        container.insertAdjacentHTML("beforeend", x);
        let readys = document.querySelector("#ready").content;
        let readysCopy = document.importNode(readys, true);
        container.appendChild(readysCopy);
    });
}