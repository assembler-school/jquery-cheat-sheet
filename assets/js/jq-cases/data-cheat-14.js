import { cases } from "../cases.js";

function jq14() {
  let clue = cases[14].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));

  $("#view").append(
    $("<h2></h2>").text("ben zi bena, bluot zi bluoda.").addClass("input")
  );
  $("#view").append(
    $("<button></button>")
      .text("✝️ Abbandone this world! ✝️")
      .addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".input").remove();
    $(".div--icons").css("display", "none");
  });
}

export { jq14 };
