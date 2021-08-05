$("img").on("error", (e) => {
  $("#result").html(`Failed image! ${e.type}`);
});
