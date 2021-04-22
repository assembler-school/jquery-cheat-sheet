import * as jqueryScripts from "./jqueryScript.js";
import * as vanillaScripts from "./vanillaScript.js";
var consoleIsWriting = false;

// Functions to run on start
addTag();
/*
Function to add tags to all clickable elements
*/
function addTag() {
  $(".count").each(function (index, element) {
    $(element).attr("tag", index).on("click", clickOnTag);
  });
}
/* 
Function to open list items
*/
function clickOnTag(event) {
  console.log($(event.target).attr("tag")); //TODO
  const tag = $(event.target).attr("tag");
  if (!consoleIsWriting) {
    jqueryScripts.jqueryListItems(tag);
    vanillaScripts.vanillaListItems(tag);
  }
}

function randomWait(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
/* 
Function to animate text in console.
*/
export function typeLine(line, index) {
  consoleIsWriting = true;
  const elem = document.getElementById("console-text-input");
  const CURSOR = "";
  index = index != null ? index : 0;
  let content = elem.innerHTML.substring(
    0,
    elem.innerHTML.length - CURSOR.length
  );
  let char = line.charAt(index);
  if (char === "$") {
  } else if (char === "~") {
    elem.innerHTML = content + "<br><br>" + ">" + CURSOR;
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  } else {
    elem.innerHTML = content + char + CURSOR;
  }
  if (line.length > index) {
    setTimeout(function () {
      typeLine(line, index + 1);
    }, randomWait(30, 35));
  } else {
    elem.innerHTML = elem.innerHTML.substring(
      0,
      elem.innerHTML.length - CURSOR.length
    );
    consoleIsWriting = false;
  }
}
/* First run text in console */
function firstRun() {
  const line =
    "Welcome to Mathias' jQuery Cheat Sheet~To watch it work, just click on a numbered item~";
  typeLine(line);
}
firstRun();
