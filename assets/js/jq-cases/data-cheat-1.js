import { cases } from "../cases.js";

function jq1() {
  let clue = cases[1].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".div--icons").on("click", (event) => {
    $(event.target).css("display", "none");
  });
}

export { jq1 };
