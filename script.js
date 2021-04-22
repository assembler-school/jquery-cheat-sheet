let timeHideShow = 500;
let currentMenu = "none";

$("#events-quick").on("click", function () {
    showColumn("events");
    hideColumn("functions");
    hideColumn("selectors");
});

$("#functions-quick").on("click", function () {
    hideColumn("events");
    showColumn("functions");
    hideColumn("selectors");
});

$("#selectors-quick").on("click", function () {
    hideColumn("events");
    hideColumn("functions");
    showColumn("selectors");
});

$("#events-column").on("click", function () {
    if(currentMenu != "events"){
        hideColumn("functions");
        hideColumn("selectors");
        showColumn("events");
        $("#functions-quick, #selectors-quick").toggle(500);
        currentMenu = "events";
    }
});

$("#functions-column").on("click", function () {
    if(currentMenu != "functions"){
        hideColumn("events");
        hideColumn("selectors");
        showColumn("functions");
        $("#events-quick, #selectors-quick").toggle(500);
        currentMenu = "functions";
    }
});

$("#selectors-column").on("click", function () {
    if(currentMenu != "selectors"){
        hideColumn("events");
        hideColumn("functions");
        showColumn("selectors");
        $("#events-quick, #functions-quick").toggle(500);
        currentMenu = "selectors";
    }
});

function showColumn(column){
    $("#" + column +"-column").show().animate({
             "width": "100%"
        }, timeHideShow);
}

function hideColumn(column){
    $("#" + column +"-column").show().animate({
        "width": "0%"
   }, timeHideShow);
}