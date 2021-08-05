import { cases } from "../cases.js";

function jq34() {
  let clue = cases[34].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append(
    $("<p></p>").text(
      "Pater Noster, qui es in caelis, sanctificetur nomen tuum."
    )
  );
  $(".div--icons").append(
    $("<p></p>").text(
      "Pater Noster, qui es in caelis, sanctificetur nomen tuum."
    )
  );
  $(".div--icons").append(
    $("<p></p>")
      .text("Pater Noster, qui es in caelis, sanctificetur nomen tuum.")
      .attr("id", "prayer")
  );

  $("#view").append($("<button></button>").text("📖").addClass("button--good"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--good").on("click", () => {
    $("#prayer").css("font-weight", "bold");
  });
}

export { jq34 };
