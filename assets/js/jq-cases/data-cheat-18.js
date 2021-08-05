import { cases } from "../cases.js";

function jq18() {
  let clue = cases[18].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👷🏻‍♂️").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👩🏽‍⚖️").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👨🏻‍🌾").addClass("citizen"));

  $("#view").append(
    $("<button></button>")
      .text("🧬 Spread the virus 🧬")
      .addClass("button--evil")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".div--icons").before($("<div></div>").text("💉"));
    $(".citizen").text("🧟‍♂️");
  });
}

export { jq18 };
