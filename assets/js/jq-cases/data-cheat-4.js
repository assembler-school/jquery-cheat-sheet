import { cases } from "../cases.js";

function jq4() {
  let clue = cases[4].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("🤖"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".div--icons").on("mousemove", (event) => {
    $(event.target).css("display", "none");
  });
}

export { jq4 };
