import { cases } from "../cases.js";

function jq20() {
  let clue = cases[20].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));

  $("#view").append();
  $("#view").append($("<div></div>").text("📖").addClass("input"));
  $("#view").append(
    $("<button></button>").text("✝️ Bless the book ✝️").addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".input").removeClass("input");
    $(".citizen").text("👨🏻‍🌾");
  });
}

export { jq20 };
