import { cases } from "../cases.js";

function jq29() {
  let clue = cases[29].hint;
  $("#view").addClass("view--0");

  $("#view").prepend($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $(".div--icons").append($("<div></div>").text("👹").addClass("citizen"));
  $("#view").append(
    $("<img>").addClass("img--spell").attr("src", "./assets/img/candle.svg")
  );
  $("#view").append(
    $("<button></button>")
      .text("✝️ You shall not win! ✝️")
      .addClass("button--good")
  );

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $("img").fadeOut(2000, () => {
      $(".div--icons").css("display", "none");
    });
  });
}

export { jq29 };
