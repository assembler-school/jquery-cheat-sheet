import { cases } from "../cases.js";

function jq40() {
  let clue = cases[40].hint;
  $("#view").addClass("view--0");

  $("#view").append();
  $("#view").append(
    $("<img>")
      .addClass("img--spell")
      .attr("src", "./assets/img/skull.svg")
      .css("opacity", "0")
  );
  $("#view").append(
    $("<button></button>")
      .text("😈 Start the ritual 😈")
      .addClass("button--evil")
  );

  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $("img").animate(
      {
        opacity: 1,
        width: "8rem",
      },
      2000,
      () => {
        $("#view").prepend($("<div></div>").addClass("div--icons"));
        $(".div--icons").append(
          $("<div></div>").text("👹").addClass("citizen")
        );
        $(".div--icons").append(
          $("<div></div>").text("👹").addClass("citizen")
        );
        $(".div--icons").append(
          $("<div></div>").text("👹").addClass("citizen")
        );
      }
    );
  });
}

export { jq40 };
