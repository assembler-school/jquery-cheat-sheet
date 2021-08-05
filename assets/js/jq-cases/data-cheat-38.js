import { cases } from "../cases.js";

function jq38() {
  let clue = cases[38].hint;
  $("#view").addClass("view--0");

  $("#view").append(
    $("<input>")
      .addClass("input--good")
      .attr("value", "Pater Noster, qui es in caelis")
  );
  $("#view").append(
    $("<input>")
      .addClass("input--good")
      .attr("value", "Sanctificetur nomen tuum.")
  );
  $("#view").append($("<button></button>").text("📖").addClass("button--good"));

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("button").on("click", () => {
    alert($("input").attr("value"));
  });
}

export { jq38 };
