import { cases } from "../cases.js";

function jq37() {
  let clue = cases[37].hint;
  $("#view").addClass("view--0");

  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<a></a>").text("👹").attr("href", "#"));
  $(".div--icons").append($("<a></a>").text("👹").attr("href", "#"));
  $(".div--icons").append($("<a></a>").text("👹").attr("href", "#"));

  $("#view").append($("<button></button>").text("😈").addClass("button--evil"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $(".button--evil").on("click", () => {
    $("a:first-of-type").attr(
      "href",
      "https://www.facebook.com/search/top?q=barack%20obama"
    );
  });
}

export { jq37 };
