let timeHideShow = 500;
let currentMenu = "none";

$("#events-quick").on("click", function () {
    showColumn("events");
    hideColumn("functions");
    hideColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#functions-quick, #selectors-quick").show(timeHideShow);
    currentMenu = "events";
});

$("#functions-quick").on("click", function () {
    hideColumn("events");
    showColumn("functions");
    hideColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#events-quick, #selectors-quick").show(timeHideShow);
    currentMenu = "functions";
});

$("#selectors-quick").on("click", function () {
    hideColumn("events");
    hideColumn("functions");
    showColumn("selectors");
    $("#events-quick, #functions-quick, #selectors-quick").hide();
    $("#events-quick, #functions-quick").show(timeHideShow);
    currentMenu = "selectors";
});

$("#events-column").on("click", function () {
    if(currentMenu != "events"){
        hideColumn("functions");
        hideColumn("selectors");
        showColumn("events");
        $("#functions-quick, #selectors-quick").toggle(timeHideShow);
        currentMenu = "events";
    }
});

$("#functions-column").on("click", function () {
    if(currentMenu != "functions"){
        hideColumn("events");
        hideColumn("selectors");
        showColumn("functions");
        $("#events-quick, #selectors-quick").toggle(timeHideShow);
        currentMenu = "functions";
    }
});

$("#selectors-column").on("click", function () {
    if(currentMenu != "selectors"){
        hideColumn("events");
        hideColumn("functions");
        showColumn("selectors");
        $("#events-quick, #functions-quick").toggle(timeHideShow);
        currentMenu = "selectors";
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