import { cases } from "../cases.js";

function jq9() {
  let clue = cases[9].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));

  let select = $("<select></select>").addClass("button--evil ");

  $(select).append($("<option></option>").attr("value", "ghost").text("Ghost"));
  $(select).append($("<option></option>").attr("value", "demon").text("Demon"));
  $(select).append(
    $("<option></option>").attr("value", "vampire").text("Vampire")
  );
  $(select).append($("<option></option>").attr("value", "robot").text("Robot"));

  $("#view").append(select);
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("change", (e) => {
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
  });
}

export { jq9 };
