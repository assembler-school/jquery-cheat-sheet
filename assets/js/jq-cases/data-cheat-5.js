import { cases } from "../cases.js";

function jq5() {
  let clue = cases[5].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("🤖"));
  $("#view").append(
    $("<input value='ben zi bena, bluot zi bluoda.'></input>").addClass("input")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("input").on("input", () => {
    $(".div--icons").css("display", "none");
  });
}

export { jq5 };
