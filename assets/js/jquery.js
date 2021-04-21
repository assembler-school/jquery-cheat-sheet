/*
 * EVENTS
 */

// click event
export function fnClick() {
  $(".e1JQuery").on("click", function (event) {
    alert("jQuery code");
  });
}

// double click event
export function fnDblClick() {
  $(".e2JQuery").on("dblclick", function (event) {
    alert("jQuery - double click");
  });
}

// press key event
export function fnPressKey() {
  $("#e3JQuery").on("keypress", function (event) {
    $("#e3JQuery").css("backgroundColor", "blue");
  });
}
