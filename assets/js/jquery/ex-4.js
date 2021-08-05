$(document).on("keydown", (e) => {
  $("#key").html(`You have pressed <b>${e.key.toUpperCase()}</b>`);
});
