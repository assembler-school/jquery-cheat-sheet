import { cases } from "../cases.js";

function jq11() {
  let clue = cases[11].hint;
  $("#view").addClass("view--0");
  $("#view").append($("<div></div>").addClass("div--icons"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));
  $(".div--icons").append($("<div></div>").text("👹"));

  let chckbx = $("<input></input>").attr("type", "checkbox");
  $(chckbx).attr("id", "weapon");

  $("#view").append(chckbx);
  $("#view").append($("<label></label>").attr("for", "weapon"));
  $("#view").append($("<div></div>").text(clue).addClass("hint"));

  $("#weapon").on("change", (e) => {
    if ($(e.target).attr("checked")) {
      $(".div--icons").css("display", "none");
    } else $(".div--icons").css("display", "block");
  });
}

export { jq11 };
