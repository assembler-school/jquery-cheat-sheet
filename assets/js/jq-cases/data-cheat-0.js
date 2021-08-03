import { cases } from "../cases.js";

function jq0() {
  let clue = cases[0].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div>👨🏻‍✈️👩🏽‍💼👨🏻‍🔧🤵🏿</div>").addClass("div--icons"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));
}

export { jq0 };
