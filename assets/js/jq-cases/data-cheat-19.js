import { cases } from "../cases.js";

function jq19() {
  let clue = cases[19].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👷🏻‍♂️").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👩🏽‍⚖️").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👨🏻‍🌾").addClass("citizen"));

  $("#view").append();
  $("#view").append($("<div></div>").text("💉").addClass("vaccine"));
  $("#view").append(
    $("<button></button>")
      .text("🧬 Spread the virus 🧬")
      .addClass("button--evil")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".vaccine").clone().appendTo(".div--icons");
    $(".citizen").text("🧟‍♂️");
  });
}

export { jq19 };
