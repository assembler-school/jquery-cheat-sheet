import * as jquery from "./modules/jquery.js";
import * as vanilla from "./modules/vanilla.js";

let timeHideShow = 500;
let currentMenu = "none";

const dataEvents = [
    { text: "HTML document loaded", functionJquery: jquery.HTMLLoaded, functionVanilla: vanilla.HTMLLoaded},
    { text: "Element clicked", functionJquery: jquery.Click, functionVanilla: vanilla.Click},
    { text: "Element double clicked", functionJquery: jquery.DoubleClick, functionVanilla: vanilla.DoubleClick},
    { text: "Key pressed", functionJquery: jquery.KeyPressed, functionVanilla: vanilla.KeyPressed},
    { text: "Mouse cursor moved", functionJquery: jquery.MouseMoved, functionVanilla: vanilla.MouseMoved},
    { text: "Text input is changed", functionJquery: jquery.TextChanged, functionVanilla: vanilla.TextChanged},
    { text: "Image is loaded", functionJquery: jquery.ImgLoaded, functionVanilla: vanilla.ImgLoaded},
    { text: "Image load failed", functionJquery: jquery.ImgFailed, functionVanilla: vanilla.ImgFailed},
    { text: "Form is submitted", functionJquery: jquery.FormSubmitted, functionVanilla: vanilla.FormSubmitted},
    { text: "Option in a select element is changed", functionJquery: jquery.OptionSelectChanged, functionVanilla: vanilla.OptionSelectChanged},
    { text: "Mouse is over an element", functionJquery: jquery.MouseOver, functionVanilla: vanilla.MouseOver},
    { text: "Checkbox is checked and unchecked", functionJquery: jquery.CheckboxChanged, functionVanilla: vanilla.CheckboxChanged},
    { text: "Ul list item is shown", functionJquery: jquery.UlListItemClicked, functionVanilla: vanilla.UlListItemClicked}
];

const dataFunctions = [
    { text: "Create an element", functionJquery: jquery.CreateElement, functionVanilla: vanilla.CreateElement},
    { text: "Remove an element", functionJquery: jquery.RemoveElement, functionVanilla: vanilla.RemoveElement},
    { text: "Append an element", functionJquery: jquery.AppendElement, functionVanilla: vanilla.AppendElement},
    { text: "Prepend an element", functionJquery: jquery.PrependElement, functionVanilla: vanilla.PrependElement},
    { text: "Create an element after another one", functionJquery: jquery.CreateAfterElement, functionVanilla: vanilla.CreateAfterElement},
    { text: "Create an element before another one", functionJquery: jquery.CreateBeforeElement, functionVanilla: vanilla.CreateBeforeElement},
    { text: "Clone an element within another one", functionJquery: jquery.CloneElement, functionVanilla: vanilla.CloneElement},
    { text: "Add a class to an element", functionJquery: jquery.AddClass, functionVanilla: vanilla.AddClass},
    { text: "Remove a class of an element", functionJquery: jquery.RemoveClass, functionVanilla: vanilla.RemoveClass},
    { text: "Toggle a class of an element", functionJquery: jquery.ToggleClass, functionVanilla: vanilla.ToggleClass},
    { text: "Add a disabled attribute to a button", functionJquery: jquery.AddDisabled, functionVanilla: vanilla.AddDisabled},
    { text: "Remove the disabled attribute of a button", functionJquery: jquery.RemoveDisabled, functionVanilla: vanilla.RemoveDisabled},
    { text: "Set a data-src attribute to an image", functionJquery: jquery.SetDataSrc, functionVanilla: vanilla.SetDataSrc},
    { text: "Remove the data-src attribute of an image", functionJquery: jquery.RemoveDataSrc, functionVanilla: vanilla.RemoveDataSrc},
    { text: "Hide an element", functionJquery: jquery.HideElement, functionVanilla: vanilla.HideElement},
    { text: "Show an element", functionJquery: jquery.ShowElement, functionVanilla: vanilla.ShowElement},
    { text: "Fade in a element", functionJquery: jquery.FadeInElement, functionVanilla: vanilla.FadeInElement},
    { text: "Fade out an element", functionJquery: jquery.FadeOutElement, functionVanilla: vanilla.FadeOutElement},
    { text: "Iterate a collection of elements", functionJquery: jquery.IterateCollection, functionVanilla: vanilla.IterateCollection},
    { text: "Change the href attribute of the first element", functionJquery: jquery.ChangeHref, functionVanilla: vanilla.ChangeHref},
    { text: "Show an alert with the value of the first <input> of the page", functionJquery: jquery.AlertFirstInput, functionVanilla: vanilla.AlertFirstInput},
    { text: "Remove all items from a specific selector", functionJquery: jquery.RemoveAllItems, functionVanilla: vanilla.RemoveAllItems},
    { text: "Animate an item after 2 seconds", functionJquery: jquery.AnimateTwoSeconds, functionVanilla: vanilla.AnimateTwoSeconds}
];

const dataSelectors = [
    { text: "Get the parent element of a certain element", functionJquery: jquery.GetParent, functionVanilla: vanilla.GetParent},
    { text: "Get the collection of children of a certain element", functionJquery: jquery.GetChildren, functionVanilla: vanilla.GetChildren},
    { text: "Get all the elements that have a certain class", functionJquery: jquery.GetElementsByClass, functionVanilla: vanilla.GetElementsByClass},
    { text: "Get an item by id", functionJquery: jquery.GetElementById, functionVanilla: vanilla.GetElementById},
    { text: "Get the options of a select element that are selected", functionJquery: jquery.GetOptionsOfElement, functionVanilla: vanilla.GetOptionsOfElement}
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
        "justify-content": "flex-start",
        "cursor": "default"
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
        "justify-content": "flex-start",
        "cursor": "default"
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
        "justify-content": "flex-start",
        "cursor": "default"
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
    element.hide();
    $("#events-column").append(element);
    $("#events-column").contents().show(timeHideShow);

    $("#jquery-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataEvents[id].functionJquery();
    });

    $("#vanilla-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataEvents[id].functionVanilla();
    });

    let id = $(this).attr("id");
    dataEvents[id].functionJquery();
}

function comparisonModalFunctions(){
    $(".modal-comparison").remove();
    let element = $("#template-comparison").contents().clone();
    element.hide();
    $("#functions-column").append(element);
    $("#functions-column").contents().show(timeHideShow);

    $("#jquery-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataFunctions[id].functionJquery();
    });

    $("#vanilla-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataFunctions[id].functionVanilla();
    });

    let id = $(this).attr("id");
    dataFunctions[id].functionJquery();
}

function comparisonModalSelectors(){
    $(".modal-comparison").remove();
    let element = $("#template-comparison").contents().clone();
    element.hide();
    $("#selectors-column").append(element);
    $("#selectors-column").contents().show(timeHideShow);

    $("#jquery-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataSelectors[id].functionJquery();
    });

    $("#vanilla-option").on("click", function () {
        $("#code-modal, #html-modal").empty();
        dataSelectors[id].functionVanilla();
    });

    let id = $(this).attr("id");
    dataSelectors[id].functionJquery();
}