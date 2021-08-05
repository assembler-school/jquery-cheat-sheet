import { cases } from "../cases.js";

function jq16() {
  let clue = cases[16].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("🧛🏼‍♀️").addClass("vampire"));
  $(".div--icons").append($("<div></div>").text("🧛🏼‍♀️").addClass("vampire"));
  $(".div--icons").append($("<div></div>").text("🧛🏻‍♂️").addClass("vampire"));

  $("#view").append(
    $("<button></button>")
      .text("✝️ Abbandone this world! ✝️")
      .addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".div--icons").prepend($("<div></div>").text("🧄"));
    $(".vampire").remove();
  });
}

export { jq16 };
