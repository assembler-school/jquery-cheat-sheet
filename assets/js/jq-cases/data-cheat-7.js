import { cases } from "../cases.js";

function jq7() {
  let clue = cases[7].hint;
  $("#view").addClass("view--0");
  $("#view").append(
    $("<img class='img--spell'>").attr("src", "./assets/img/cross.svg")
  );
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").css("display", "none");
  $("#view").append(
    $("<input value='./assets/img/cross.svg'></input>").addClass("input")
  );
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("input").on("input", () => {
    $(".img--spell").attr("src", $("input").val());
  });
  $(".img--spell").on("error", () => {
    $(".div--icons").css("display", "block");
  });
}

export { jq7 };
