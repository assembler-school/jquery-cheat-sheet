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

// mouse over event
export function fnMouseOver() {
  $("#e10JQuery").on("mouseover", function (e) {
    $(this).css("color", "red");
  });
}

// mouse over event
export function fnChecked() {
  $("#e11JQuery").on("click", function (e) {
    let checkBox = $("#e11JQuery");
    let text = $("#e11JQueryDemo");

    if (checkBox.prop("checked")) {
      text.css("display", "block");
    } else {
      text.css("display", "none");
    }
  });
}

// event target
export function fnEventTarget() {
  $("#e12JQuery")
    .children()
    .on("click", function (e) {
      alert($(this).text());
    });
}

/*
 * SECTION OF FUNCTIONS & SELECTORS
 */
export function fnCreate() {
  $("#f0JQuery").on("click", function (e) {
    let para = $("<p>", { text: "This is a paragraph." });
    //or
    // let para = $("<p>").text("This is a paragraph.");
    $("#f0JQueryDemo").append(para);
  });
}

export function fnRemove() {
  $("#f1JQuery").on("click", function (e) {
    $("#f1JQueryDemo").remove();
  });
}

export function fnAppend() {
  $("#f2JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f2JQueryDemo").append(para);
  });
}

export function fnPrepend() {
  $("#f3JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click Me!" });
    $("#f3JQueryDemo").prepend(para);
  });
}

export function fnAfter() {
  $("#f4JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f4JQueryDemo").after(para);
  });
}

export function fnBefore() {
  $("#f5JQuery").on("click", function (e) {
    let para = $("<button>", { text: "Click" });
    $(".f5JQueryDemo").before(para);
  });
}

export function fnClone() {
  $("#f6JQuery").on("click", function (e) {
    let cln = $("#f6JQueryDemo").clone();
    $("#f6JQueryDemo").after(cln);
  });
}

export function fnAddClass() {
  $("#f7JQuery").on("click", function (e) {
    let cln = $("#f7JQueryDemo").addClass("red-text");
  });
}

export function fnRemoveClass() {
  $("#f8JQuery").on("click", function (e) {
    let cln = $("#f8JQueryDemo").removeClass("red-text");
  });
}

export function fnToggleClass() {
  $("#f9JQuery").on("click", function (e) {
    let cln = $("#f9JQueryDemo").toggleClass("red-text");
  });
}
