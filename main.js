$("#button_events").on("click", function () {
  $(".p_events").toggle();
  $(".p_functions").hide();
  $(".p_selectors").hide();
});

$("#button_functions").on("click", function () {
  $(".p_functions").toggle();
  $(".p_events").hide();
  $(".p_selectors").hide();
});

$("#button_selectors").on("click", function () {
  $(".p_selectors").toggle();
  $(".p_events").hide();
  $(".p_functions").hide();
});

function vanillaResult(id) {
  $("#vanilla_result").html(id.html());
}

function jqueryResult(id) {
  $("#jquery_result").html(id.html());
}
