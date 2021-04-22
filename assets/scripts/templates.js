function swapTemplate(template, parent) {
  $(parent).html("");
  let cloned = $(template).contents().clone(true);
  $(cloned).hide().appendTo($(parent));
  $(cloned).fadeIn(800);
}

$("#aside__events").on("click", function () {
  swapTemplate("#events", ".central");
  $(".aside__section").each(function () {
    $(this).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
});

$("#aside__functions").on("click", function () {
  swapTemplate("#functions", ".central");
  $(".aside__section").each(function () {
    $(this).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
});

$("#aside__selectors").on("click", function () {
  swapTemplate("#selectors", ".central");
  $(".aside__section").each(function (index, element) {
    $(element).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
});
