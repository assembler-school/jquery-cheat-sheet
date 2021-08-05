import { cases } from "../cases.js";

function jq8() {
  let clue = cases[8].hint;
  $("#view").addClass("view--0");
  $("#view").append(
    $("<div></div>").addClass("div--icons").css("display", "none")
  );
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));

  let form = $("<form id='form'></form>");

  $(form).append($("<input></input>").addClass("input").attr("type", "text"));
  $(form).append(
    $("<button></button>")
      .addClass("button--evil")
      .attr("type", "submit")
      .text("Submit Spell")
  );

  $("#view").append(form);
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(form).on("submit", (e) => {
    e.preventDefault();
    $(".div--icons").css("display", "block");
  });
}

export { jq8 };
