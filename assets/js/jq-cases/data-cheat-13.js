import { cases } from "../cases.js";

function jq13() {
  let clue = cases[13].hint;
  $("#view").addClass("view--0");

  $("#view").append(
    $("<button></button>")
      .text("ben zi bena, bluot zi bluoda.")
      .addClass("button--evil")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $("#view").prepend($("<div></div>").addClass("div--icons"));
    $(".div--icons").append($("<div></div>").text("👹"));
    $(".div--icons").append($("<div></div>").text("👹"));
    $(".div--icons").append($("<div></div>").text("👹"));
  });
}

export { jq13 };
