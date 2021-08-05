import { cases } from "../cases.js";

function jq39() {
  let clue = cases[39].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));
  $(".div--icons").append($("<div></div>").text("👻"));

  $("#view").append(
    $("<button></button>").text("✝️ Vade Retro! ✝️").addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".div--icons").empty();
  });
}

export { jq39 };
