import { cases } from "../cases.js";

function jq24() {
  let clue = cases[24].hint;
  $("#view").addClass("view--0");
  $("#view").append(
    $("<div></div>").addClass("div--icons").css("display", "none")
  );
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));

  $("#view").append();
  $("#view").append($("<img>").addClass("img--spell"));
  $("#view").append(
    $("<button></button>")
      .text("😈 Start the ritual 😈")
      .addClass("button--evil")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".img--spell").attr("src", "./assets/img/candle.svg");
    $(".div--icons").css("display", "block");
  });
}

export { jq24 };
