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
  switch (tag) {
    case 0:
      break;
    //TODO
    default:
      break;
  }
}
function randomWait(min, max) {
  return Math.ceil(Math.random() * (max - min) + min);
}

/* 
Function to animate text in console.
*/
function typeLine(elem, line, index) {
  const CURSOR = "";
  index = index != null ? index : 0;
  content = elem.innerHTML.substring(0, elem.innerHTML.length - CURSOR.length);
  char = line.charAt(index);
  if (char === "$") {
  } else if (char === "~") {
    elem.innerHTML = content + "<br><br>" + ">" + CURSOR;
  } else {
    elem.innerHTML = content + char + CURSOR;
  }
  if (line.length > index) {
    setTimeout(function () {
      typeLine(elem, line, index + 1);
    }, randomWait(30, 35));
  } else {
    elem.innerHTML = elem.innerHTML.substring(
      0,
      elem.innerHTML.length - CURSOR.length
    );
  }
}
/* First run text in console */
elem = document.getElementById("console-text-input");
line =
  "Welcome to Mathias' jQuery Cheat Sheet~To watch it work, just click on a numbered item~";
typeLine(elem, line);
