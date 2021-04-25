import * as jquery from "./modules/jquery.js";
import * as vanilla from "./modules/vanilla.js";

let timeHideShow = 500;
let currentMenu = "none";

const dataEvents = [
    { text: "HTML document loaded", function: jquery.HTMLLoaded},
    { text: "Element clicked", function: jquery.Click},
    { text: "Element double clicked", function: jquery.DoubleClick},
    { text: "Key pressed", function: jquery.KeyPressed},
    { text: "Mouse cursor moved", function: jquery.MouseMoved},
    { text: "Text input is changed", function: jquery.TextChanged},
    { text: "Image is loaded", function: jquery.ImgLoaded},
    { text: "Image load failed", function: jquery.ImgFailed},
    { text: "Form is submitted", function: jquery.FormSubmitted},
    { text: "Option in a select element is changed", function: jquery.OptionSelectChanged},
    { text: "Mouse is over an element", function: jquery.MouseOver},
    { text: "Checkbox is checked and unchecked", function: jquery.CheckboxChanged},
    { text: "Ul list item is shown", function: jquery.UlListItemClicked}
];

const dataFunctions = [
    { text: "Create an element", function: jquery.CreateElement},
    { text: "Remove an element", function: jquery.RemoveElement},
    { text: "Append an element", function: jquery.AppendElement},
    { text: "Prepend an element", function: jquery.PrependElement},
    { text: "Create an element after another one", function: jquery.CreateAfterElement},
    { text: "Create an element before another one", function: jquery.CreateBeforeElement},
    { text: "Clone an element within another one", function: jquery.CloneElement},
    { text: "Add a class to an element", function: jquery.AddClass},
    { text: "Remove a class of an element", function: jquery.RemoveClass},
    { text: "Toggle a class of an element", function: jquery.ToggleClass},
    { text: "Add a disabled attribute to a button", function: jquery.AddDisabled},
    { text: "Remove the disabled attribute of a button", function: jquery.RemoveDisabled},
    { text: "Set a data-src attribute to an image", function: jquery.SetDataSrc},
    { text: "Remove the data-src attribute of an image", function: jquery.RemoveDataSrc},
    { text: "Hide an element", function: jquery.HideElement},
    { text: "Show an element", function: jquery.ShowElement},
    { text: "Fade in a element", function: jquery.FadeInElement},
    { text: "Fade out an element", function: jquery.FadeOutElement},
    { text: "Iterate a collection of elements", function: jquery.IterateCollection},
    { text: "Change the href attribute of the first element", function: jquery.ChangeHref},
    { text: "Show an alert with the value of the first <input> of the page", function: jquery.AlertFirstInput},
    { text: "Remove all items from a specific selector", function: jquery.RemoveAllItems},
    { text: "Animate an item after 2 seconds", function: jquery.AnimateTwoSeconds}
];

const dataSelectors = [
    { text: "Get the parent element of a certain element", function: jquery.GetParent},
    { text: "Get the collection of children of a certain element", function: jquery.GetChildren},
    { text: "Get all the elements that have a certain class", function: jquery.GetElementsByClass},
    { text: "Get an item by id", function: jquery.GetElementById},
    { text: "Get all the elements that have a certain class and display property of none", function: jquery.GetElementsByClassAndNone},
    { text: "Get the options of a select element that are selected", function: jquery.GetOptionsOfElement}
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

    $("#events-column").append($("<div>").attr("id", "information-column"));
    $("#information-column").append($("<div>").addClass("title-data-column").text("Events"));
    $("#information-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataEvents.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataEvents[i].text).on("click", comparisonModalEvents);
        $("#data-column").append(element);
    }
}

function showContentFunctions(){
    $("#events-column, #functions-column, #selectors-column").empty();

    $("#functions-column").css({
        "align-items": "flex-start",
        "justify-content": "flex-start"
    });

    $("#functions-column").append($("<div>").attr("id", "information-column"));
    $("#information-column").append($("<div>").addClass("title-data-column").text("Functions"));
    $("#information-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataFunctions.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataFunctions[i].text).on("click", comparisonModalFunctions);
        $("#data-column").append(element);
    }
}

function showContentSelectors(){
    $("#events-column, #functions-column, #selectors-column").empty();

    $("#selectors-column").css({
        "align-items": "flex-start",
        "justify-content": "flex-start"
    });

    $("#selectors-column").append($("<div>").attr("id", "information-column"));
    $("#information-column").append($("<div>").addClass("title-data-column").text("Selectors"));
    $("#information-column").append($("<div>").attr("id", "data-column"));
    for (let i = 0; i < dataSelectors.length; i++) {
        let element = $("<div>").addClass("links-column").attr("id", i).text(dataSelectors[i].text).on("click", comparisonModalSelectors);
        $("#data-column").append(element);
    }
}

function comparisonModalEvents(){
    $(".modal-comparison").remove();
    let element = $("#template-comparison").contents().clone();
    $("#events-column").append(element);

    let id = $(this).attr("id");
    dataEvents[id].function();
}

function comparisonModalFunctions(){
    $(".modal-comparison").remove();
    let element = $("#template-comparison").contents().clone();
    $("#functions-column").append(element);

    let id = $(this).attr("id");
    dataFunctions[id].function();
}

function comparisonModalSelectors(){
    $(".modal-comparison").remove();
    let element = $("#template-comparison").contents().clone();
    $("#selectors-column").append(element);

    let id = $(this).attr("id");
    dataSelectors[id].function();
}