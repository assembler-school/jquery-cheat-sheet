import { cases } from "../cases.js";

function jq21() {
  let clue = cases[21].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👨🏻‍🌾").addClass("input--good"));

  $("#view").append($("<button></button>").text("🌕").addClass("button--evil"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".div--icons div").toggleClass("input--good");
    if ($(".div--icons div").hasClass("input--good")) {
      $(".div--icons div").text("👨🏻‍🌾");
    } else {
      $(".div--icons div").text("🐺");
    }
  });
}

export { jq21 };
