let timeHideShow = 500;
let currentMenu = "none";

const dataEvents = [
    "HTML document loaded",
    "Element clicked",
    "Element double clicked",
    "Key pressed",
    "Mouse cursor moved",
    "Text input is changed",
    "Image is loaded",
    "Image load failed",
    "Form is submitted",
    "Option in a select element is changed",
    "Mouse is over an element",
    "Checkbox is checked and unchecked",
    "Ul list item is shown"
];

const dataFunctions = [
    "Create an element",
    "Remove an element",
    "Append an element",
    "Prepend an element",
    "Create an element after another one",
    "Create an element before another one",
    "Clone an element within another one",
    "Add a class to an element",
    "Remove a class of an element",
    "Toggle a class of an element",
    "Add a disabled attribute to a button",
    "Remove the disabled attribute of a button",
    "Set a data-src attribute to an image",
    "Remove the data-src attribute of an image",
    "Hide an element",
    "Show an element",
    "Fade in a element",
    "Fade out an element",
    "Iterate a collection of elements",
    "Change the href attribute of the first element",
    "Show an alert with the value of the first <input> of the page",
    "Remove all items from a specific selector",
    "Animate an item after 2 seconds"
];

const dataSelectors = [
    "Get the parent element of a certain element",
    "Get the collection of children of a certain element",
    "Get all the elements that have a certain class",
    "Get an item by id",
    "Get all the elements that have a certain class and display property of none",
    "Get the options of a select element that are selected"
];

$("#events-quick").on("click", function () {
    showColumn("events");
    hideColumn("functions");
    hideColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#functions-quick, #selectors-quick").show(timeHideShow);
    currentMenu = "events";
    showContentEvents();
});

$("#functions-quick").on("click", function () {
    hideColumn("events");
    showColumn("functions");
    hideColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#events-quick, #selectors-quick").show(timeHideShow);
    currentMenu = "functions";
    showContentFunctions();
});

$("#selectors-quick").on("click", function () {
    hideColumn("events");
    hideColumn("functions");
    showColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#events-quick, #functions-quick").show(timeHideShow);
    currentMenu = "selectors";
    showContentSelectors();
});

$("#events-column").on("click", function () {
    if(currentMenu != "events"){
        hideColumn("functions");
        hideColumn("selectors");
        showColumn("events");
        $("#functions-quick, #selectors-quick").toggle(timeHideShow);
        currentMenu = "events";
        showContentEvents();
    }
});

$("#functions-column").on("click", function () {
    if(currentMenu != "functions"){
        hideColumn("events");
        hideColumn("selectors");
        showColumn("functions");
        $("#events-quick, #selectors-quick").toggle(timeHideShow);
        currentMenu = "functions";
        showContentFunctions();
    }
});

$("#selectors-column").on("click", function () {
    if(currentMenu != "selectors"){
        hideColumn("events");
        hideColumn("functions");
        showColumn("selectors");
        $("#events-quick, #functions-quick").toggle(timeHideShow);
        currentMenu = "selectors";
        showContentSelectors();
    }
});

function showColumn(column){
    $("#" + column +"-column").animate({
        "width": "100%"
    }, timeHideShow);
}

function hideColumn(column){
    $("#" + column +"-column").animate({
        "width": "0%"
    }, timeHideShow);
}

function showContentEvents(){
    $("#events-column, #functions-column, #selectors-column").empty();

    $("#events-column").css({
        "align-items": "flex-start",
        "justify-content": "flex-start"
    });

    $("#events-column").append($("<div>").addClass("title-data-column").text("Events"));
    $("#events-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataEvents.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataEvents[i]).on("click", comparisonModalEvents);
        $("#data-column").append(element);
    }
}

function showContentFunctions(){
    $("#events-column, #functions-column, #selectors-column").empty();

    $("#functions-column").css({
        "align-items": "flex-start",
        "justify-content": "flex-start"
    });

    $("#functions-column").append($("<div>").addClass("title-data-column").text("Functions"));
    $("#functions-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataFunctions.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataFunctions[i]).on("click", comparisonModalFunctions);
        $("#data-column").append(element);
    }
}

function showContentSelectors(){
    $("#events-column, #functions-column, #selectors-column").empty();

    $("#selectors-column").css({
        "align-items": "flex-start",
        "justify-content": "flex-start"
    });

    $("#selectors-column").append($("<div>").addClass("title-data-column").text("Selectors"));
    $("#selectors-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataSelectors.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataSelectors[i]).on("click", comparisonModalSelectors);
        $("#data-column").append(element);
    }
}

function comparisonModalEvents(){
    console.log("Events:" + $(this).attr("id"));
}

function comparisonModalFunctions(){
    console.log("Functions:" + $(this).attr("id"));
}

function comparisonModalSelectors(){
    console.log("Selectors:" + $(this).attr("id"));
}