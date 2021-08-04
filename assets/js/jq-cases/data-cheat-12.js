import { cases } from "../cases.js";

function jq12() {
  let clue = cases[12].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));

  let ul = $("<ul></ul>").addClass("button--evil");

  $(ul).append($("<li></li>").text("Ghost"));
  $(ul).append($("<li></li>").text("Demon"));
  $(ul).append($("<li></li>").text("Vampire"));
  $(ul).append($("<li></li>").text("Robot"));

  $("#view").append(ul);
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("ul").on("click", (e) => {
    console.log($(e.target).text());
    switch ($(e.target).text()) {
      case "Ghost":
        $(".div--icons").append($("<div></div>").text("👻"));
        break;
      case "Demon":
        $(".div--icons").append($("<div></div>").text("👹"));
        break;
      case "Vampire":
        $(".div--icons").append($("<div></div>").text("🧛🏻‍♂️"));
        break;
      case "Robot":
        $(".div--icons").append($("<div></div>").text("🤖"));
        break;
    }
  });
}

export { jq12 };
