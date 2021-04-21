/*
 * SECTION OF EVENTS
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

// Mouse move event
export function fnMouseMove() {
  $("#e4JQuery").on("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    $("#e4JQueryDemo").html(coor);
  });
}

// on change event
export function fnOnChange() {
  $("#e5JQuery").on("change", function (e) {
    $(this).val($(this).val().toUpperCase());
  });
}

// on image loaded event
export function fnOnImgLoaded() {
  $("#e6JQuery").append($("<img>", { src: "./assets/img/assembler.png" }));
  $("img").on("load", function () {
    $("#e6JQueryDemo").text("Image loaded.");
  });
}

// on image loaded event
export function fnOnImgFailed() {
  $("#e7JQuery").append($("<img>", { src: "./assets/img/assemblers.png" }));
  $("img").on("error", function () {
    $("#e7JQueryDemo").text("Image failed.");
  });
}

// on form submit event
export function fnFormSubmit() {
  $("#e8JQuery").on("submit", function () {
    alert("The form was submitted");
  });
}

// change select event
export function fnChangeSelect() {
  $("#e9JQuery").on("change", function (e) {
    let value = e.target.value;
    alert("You selected: " + value);
  });
}
