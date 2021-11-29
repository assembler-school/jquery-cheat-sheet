import {events, functions} from "../js/variables.js";
import Sheet from "./sheet.js";

let section = $("<section></section>").addClass("events");

section.append($("<span></span>").text("- Events -").addClass("title"));
for(let i = 0; i < events.length; i++){
    section.append($("<span>" + events[i] + "</span>"));
    $("body").append(section);
}

section = $("<section></section>").addClass("functions");
section.append($("<span></span>").text("- Functions -").addClass("title"));
for(let i = 0; i < functions.length; i++){
    section.append($("<span>" + functions[i] + "</span>"));
    $("body").append(section);
}

$("span").on("click", createSheet);

function createSheet(e){
    $("span").removeClass("clicked");
    if($(".comparation").length > 0) $(".comparation")[0].remove();

    $(e.target).addClass("clicked");
    $("<div></div>").addClass("comparation").insertAfter(e.target);
    new Sheet(e.target.innerText, e.target.parentNode.className);
}