addNewTemplate("main", "e");

//Menu navigation
$("#aside-btn-one").click(() => {
  if ($("main").children().last().attr("id") === "main-e") {
    updateTemplate("main-e", "main", "f");
  }
});

$("#aside-btn-two").click(() => {
  if ($("main").children().last().attr("id") === "main-f") {
    updateTemplate("main-f", "main", "e");
  }
});
