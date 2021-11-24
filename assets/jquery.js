//Collapsible credits https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
//Search credits https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table

$(".collapsible").on("click", function () {
  $(this).toggleClass("active");
  let content = $(this).next();
  if (content.css("display") === "block") {
    content.hide();
  } else {
    content.show();
  }
});

$("#searchBox").on("keyup", function () {
  console.log($(this).val().toUpperCase());
  let input = $(this).val().toUpperCase();
  $(".collapsible").each(function (index, element) {
    console.log($(this).text().toUpperCase());
    if ($(this).text().toUpperCase().indexOf(input) > -1) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});

//Magic starts here

//Create an HTML element
$("#Function1Q button").on("click", function () {
  var btn = $("<button> This is a button </button>");
  $(this).parent().append(btn);
});

//Remove an HTML Element
