function loadArticles() {
  $(".article__title").on("click", function () {
    $(this).next().toggleClass("article__content--hidden");
  });
}

loadArticles();

function swapSection(selectedSection) {
  $("section").each(function (index, element) {
    if ($(element).attr("class") != "section--hide") {
      $(element).addClass("section--hide");
    }
  });
  $(selectedSection).removeClass("section--hide");
}

$("#aside__events").on("click", function () {
  $(".aside__section").each(function () {
    $(this).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
  swapSection("#events__section");
});

$("#aside__functions").on("click", function () {
  $(".aside__section").each(function () {
    $(this).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
  swapSection("#functions__section");
});

$("#aside__selectors").on("click", function () {
  $(".aside__section").each(function (index, element) {
    $(element).removeClass("aside__section--active");
  });
  $(this).addClass("aside__section--active");
  swapSection("#selectors_section");
});
