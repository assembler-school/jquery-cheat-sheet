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

let eventBtn = $(
    '<button class="events main-btn" id = "btn-events">EVENTS</button>'
);
$(".navigation").prepend(eventBtn);
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
    '<button class="functions main-btn" id = "btn-functions">FUNCTIONS</button>'
);
$(".navigation").prepend(functionBtn);
functionBtn.on("click", () => {
    createFunctionNavBar();
    eventConstructors(createHtml, "fc-0", createVan, createjQ);
    eventConstructors(removeHtml, "fc-1", removeVan, removejQ);
    eventConstructors(appendC, "fc-2", appendVan, appendjQ);
    eventConstructors(prepend, "fc-3", prependVan, prependjQ);
    eventConstructors(insertAfter, "fc-4", afterVan, afterjQ);
    eventConstructors(insertBefore, "fc-5", beforeVan, beforejQ);
    eventConstructors(cloning, "fc-6", cloneVan, clonejQ);
    eventConstructors(addClass, "fc-7", addClassVan, addClassjQ);
    eventConstructors(removeClass, "fc-8", removeClassVan, removeClassjQ);
    eventConstructors(toggleClass, "fc-9", toggleClassVan, toggleClassjQ);
    eventConstructors(addDisabled, "fc-10", attrDisabledVan, attrDisabledjQ);
    eventConstructors(
        removeDisabled,
        "fc-11",
        removeAttrDisabledVan,
        removeAttrDisabledjQ
    );
    eventConstructors(setDataAttr, "fc-12", attrDataVan, attrDatajQ);
    eventConstructors(
        removeDataAttr,
        "fc-13",
        removeAttrDataVan,
        removeAttrDatajQ
    );
    eventConstructors(hideEle, "fc-14", hideVan, hidejQ);
    eventConstructors(showEle, "fc-15", showVan, showjQ);
    eventConstructors(fadeInOut, "fc-16", fadeInjQ, fadeOutjQ);
    eventConstructors(animaTe, "fc-17", animatejQ, animateVan);
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
    '<button class="selectors main-btn" id = "btn-selectors">SELECTORS</button>'
);
$(".navigation").prepend(selectorBtn);
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

/*-------------------------------------------------------END OF NAV BAR-------------------------------------------------------*/

/*!-------------------------------------------------------TEMPLATE ACTIVATOR-------------------------------------------------------*/

function eventConstructors(templates, ids, vanillaFunctions, jQueryFunctions) {
    let buttons = document.getElementById(ids);
    buttons.addEventListener("click", () => {
        let container = document.querySelector(".content");
        container.innerHTML = "";
        container.insertAdjacentHTML("beforeend", templates);
        let readys = document.querySelector("#ready").content;
        let readysCopy = document.importNode(readys, true);
        container.appendChild(readysCopy);
        vanillaFunctions();
        jQueryFunctions();
    });
}