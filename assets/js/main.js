// Variables
const tecTitle = $("#tec-title");

let techName;

// Changes the title and modify the link's id.
$(".nav-btn").each(function (i) {
  $(this).on("click", function () {
    if (i === 0) {
      techName = "van";
      tecTitle.text("Vanilla JS Cheat Sheet");
      tecTitle.css("color", "var(--bg)");
      $(".nav-btn").last().removeClass("active");
      $(".nav-btn").first().toggleClass("active");
    } else if (i === 1) {
      techName = "jq";
      tecTitle.text("jQuery Cheat Sheet");
      tecTitle.css("color", "var(--bg)");
      $(".nav-btn").first().removeClass("active");
      $(".nav-btn").last().toggleClass("active");
    }
    changeTec(techName); // modify the links id.
  });
});

function changeTec(tech) {
  $(".exercise").each(function (i, e) {
    $(this).attr("id", tech + i);
  });
}

$(".exercise").each(function () {
  $(this).on("click", function () {
    if (techName === undefined) {
      tecTitle.text("Please, select a technology");
      tecTitle.css("color", "red");
    } else if (techName === "van") {
      vanillaJavaScript($(this).attr("id"));
    } else if (techName === "jq") {
      jQueryScript($(this).attr("id"));
    }
  });
});
