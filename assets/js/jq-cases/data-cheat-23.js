import { cases } from "../cases.js";

function jq23() {
  let clue = cases[23].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👨🏻‍🌾").addClass("input--good"));

  $("#view").append(
    $("<button id='blood'></button>")
      .text("🩸")
      .addClass("button--evil")
      .prop("disabled", true)
  );
  $("#view").append(
    $("<button></button>")
      .text("Drink the Blood!")
      .addClass("button--evil")
      .attr("id", "button")
  );

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("#blood").on("click", () => {
    $(".div--icons div")
      .text("🧛🏻‍♂️")
      .removeClass("input--good")
      .addClass("input");
  });
  $("#button").on("click", () => {
    $("#blood").prop("disabled", false);
  });
}

export { jq23 };
