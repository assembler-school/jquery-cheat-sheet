function jqueryClickEvent() {
  $("#jquery").on("click", () => {
    $("#jquery").text("CLICKED JQUERY");
  });
}

function jqueryDoubleClick() {
  $("#jquery").on("dblclick", () => {
    $("#jquery").text("DOUBLE CLICKED JQUERY");
  });
}

function jqueryKeyPressEvent() {
  $("#jquery").text("JQUERY KEY PRESSED");
}

function jqueryCursorOverEvent() {
  $("#jquery").on("mouseover", () => {
    $("#jquery").css("border", "2px solid red");
  });
}

function jqueryChangeValue() {
  let count = 0;
  $("#jquery").append("<input type='text'>");
  $("#jquery input").on("change", () => {
    count++;
    $("#jquery > p").text("Changed " + count + " times");
  });
}

function jqueryImageLoad() {
  $("#jquery").append(
    "<img src='https://www.imghoteles.com/wp-content/uploads/sites/1709/nggallery/desktop-pics/fott1.jpg'>"
  );
  $("#jquery img").on("load", () => {
    $("#jquery > p").text("JQUERY IMG LOADED");
  });
}

function jqueryImageFails() {
  $("#jquery").append("<img src=''>");
  $("#jquery img").on("error", () => {
    $("#jquery > p").text("JQUERY IMG FAILS TO LOAD");
  });
}

function jquerySubmitEvent() {}

function jqueryChangeOption() {}

function jqueryMousePosition() {}

function jqueryChecked() {}

export {
  jqueryClickEvent,
  jqueryDoubleClick,
  jqueryKeyPressEvent,
  jqueryCursorOverEvent,
  jqueryChangeValue,
  jqueryImageLoad,
  jqueryImageFails,
  jquerySubmitEvent,
  jqueryChangeOption,
  jqueryMousePosition,
  jqueryChecked,
};
