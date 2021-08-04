import { cases } from "../cases.js";

function jq27() {
  let clue = cases[27].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("🤖"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".div--icons").css("display", "none");
  $("#view").on("click", () => {
    $(".div--icons").css("display", "block");
  });
}

export { jq27 };
