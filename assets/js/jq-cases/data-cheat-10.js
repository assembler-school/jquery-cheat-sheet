import { cases } from "../cases.js";

function jq10() {
  let clue = cases[10].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("🤖"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".div--icons").on("mouseover", (event) => {
    $(event.target).css("display", "none");
  });
}

export { jq10 };
