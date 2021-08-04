import { cases } from "../cases.js";

function jq22() {
  let clue = cases[22].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👨🏻‍🌾").addClass("input--good"));

  $("#view").append($("<button></button>").text("🩸").addClass("button--evil"));
  $("#view").append($("<button></button>").text("✝️").addClass("button--good"));

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $(".div--icons div").text("🧛🏻‍♂️");
  });
  $(".button--good").on("click", () => {
    $(".button--evil").attr("disabled", "true");
  });
}

export { jq22 };
