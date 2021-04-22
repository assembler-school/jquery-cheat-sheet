// GLOBAL DEFINITIONS
var consoleIsWriting = false;

// Functions to run on start
addTag();
firstRun();
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
  const tag = parseInt($(event.target).attr("tag"));
  if (!consoleIsWriting) {
    const line1 = jqueryListItems(tag);
    const line2 = vanillaListItems(tag);
    typeLine(line1 + "~" + line2, 0, tag);
  }
}

function randomWait(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}
/* 
Function to animate text in console.
*/
function typeLine(line, index, tag) {
  console.log(tag);
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
    //char for italic element keyword
    elem.innerHTML = content + "<i>jQueryElement</i>" + CURSOR;
  } else if (char === "ç") {
    elem.innerHTML = content + "<i>Element</i>" + CURSOR;
  } else if (char === "~") {
    elem.innerHTML = content + "<br><br>" + ">" + CURSOR;
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  } else if (char === "¡") {
    elem.innerHTML =
      content +
      "<p onclick='tryIt(" +
      tag +
      ")'>------+<br> |TRY IT|<br> +------+<br><p>" +
      ">" +
      CURSOR;
    elem.scrollTop = elem.scrollHeight - elem.clientHeight;
  } else {
    elem.innerHTML = content + char + CURSOR;
  }
  if (line.length > index) {
    setTimeout(function () {
      typeLine(line, index + 1, tag);
    }, randomWait(5, 10)); //TODO change time to slower
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
function tryIt(tag) {
  console.log("ejecutando prueba, tag: " + tag);
}
