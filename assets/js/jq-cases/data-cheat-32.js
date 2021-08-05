import { cases } from "../cases.js";

function jq32() {
  let clue = cases[32].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append(
    $("<p></p>").text("ben zi bena, bluot zi bluoda.").addClass("spell")
  );
  $(".div--icons").append($("<p></p>").text("ben zi bena, bluot zi bluoda."));
  $(".div--icons").append($("<p></p>").text("ben zi bena, bluot zi bluoda."));

  $("#view").append($("<button></button>").text("📖").addClass("button--evil"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".div--icons").children().css("font-weight", "bold");
  });
}

export { jq32 };
