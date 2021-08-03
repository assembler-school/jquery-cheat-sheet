import { cases } from "../cases.js";

function jq3() {
  let clue = cases[3].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("body").on("keydown", () => {
    $(".div--icons").css("display", "none");
  });
}

export { jq3 };
