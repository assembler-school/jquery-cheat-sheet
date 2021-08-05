import { cases } from "../cases.js";

function jq35() {
  let clue = cases[35].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append(
    $("<p></p>")
      .text("Pater Noster, qui es in caelis, sanctificetur nomen tuum.")
      .addClass("prayer")
      .css("display", "none")
  );
  $(".div--icons").append(
    $("<p></p>")
      .text("Pater Noster, qui es in caelis, sanctificetur nomen tuum.")
      .addClass("prayer")
      .css("display", "none")
  );
  $(".div--icons").append(
    $("<p></p>")
      .text("Pater Noster, qui es in caelis, sanctificetur nomen tuum.")
      .addClass("prayer")
      .css("display", "none")
  );

  $("#view").append($("<button></button>").text("📖").addClass("button--good"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $(".prayer").css("color", "blue");
    $(".prayer").css("display", "block");
  });
}

export { jq35 };
