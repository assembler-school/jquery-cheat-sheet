import { cases } from "../cases.js";

function jq25() {
  let clue = cases[25].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));

  $("#view").append();
  $("#view").append(
    $("<img>").addClass("img--spell").attr("src", "./assets/img/candle.svg")
  );
  $("#view").append(
    $("<button></button>")
      .text("✝️ Bless the place ✝️")
      .addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".img--spell").attr("src", "./assets/img/cross.svg");
    $(".div--icons").css("display", "none");
  });
}

export { jq25 };
