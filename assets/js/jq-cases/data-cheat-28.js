import { cases } from "../cases.js";

function jq28() {
  let clue = cases[28].hint;
  $("#view").addClass("view--0");

  $("#view").append();
  $("#view").append(
    $("<img>")
      .addClass("img--spell")
      .attr("src", "./assets/img/candle.svg")
      .css("display", "none")
  );
  $("#view").append(
    $("<button></button>")
      .text("😈 Start the ritual 😈")
      .addClass("button--evil")
  );

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $("img").fadeIn(2000, () => {
      $("#view").prepend($("<div></div>").addClass("div--icons"));
      $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
      $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
      $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
    });
  });
}

export { jq28 };
