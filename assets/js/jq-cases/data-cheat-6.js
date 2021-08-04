import { cases } from "../cases.js";

function jq6() {
  let clue = cases[6].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $("#view").append(
    $("<button></button>").text("Summon Cross").addClass("button--good")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("button").on("click", () => {
    $("#view").prepend(
      $("<img>").attr("src", "./assets/img/cross.svg").addClass("img--spell")
    );
    $(".div--icons").css("display", "none");
  });
}

export { jq6 };
