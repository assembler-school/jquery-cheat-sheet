import { cases } from "../cases.js";

function jq36() {
  let clue = cases[36].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));

  let form = $("<form></form>");
  let select = $("<select multiple></select>")
    .addClass("button--evil")
    .attr("multiple", true);
  $(form).append(
    $("<input value='😈'></input>").attr("type", "submit").addClass("input")
  );

  $(select).append($("<option></option>").attr("value", "ghost").text("Ghost"));
  $(select).append($("<option></option>").attr("value", "demon").text("Demon"));
  $(select).append(
    $("<option></option>").attr("value", "vampire").text("Vampire")
  );
  $(select).append($("<option></option>").attr("value", "robot").text("Robot"));

  $(form).append(select);
  $("#view").append(form);
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".input").on("click", (e) => {
    if ($(e.target.attr("selected"))) {
      switch ($(e.target).val()) {
        case "ghost":
          $(".div--icons").append($("<div></div>").text("👻"));
          break;
        case "demon":
          $(".div--icons").append($("<div></div>").text("👹"));
          break;
        case "vampire":
          $(".div--icons").append($("<div></div>").text("🧛🏻‍♂️"));
          break;
        case "robot":
          $(".div--icons").append($("<div></div>").text("🤖"));
          break;
      }
    }
  });
}

export { jq36 };
