//Collapsible credits https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_collapsible
//Search credits https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_filter_table
//Clipboard credits https://www.w3schools.com/howto/tryit.asp?filename=tryhow_js_copy_clipboard2

$(".collapsible").on("click", function () {
  $(this).toggleClass("active");
  let content = $(this).next();
  if (content.css("display") === "flex") {
    content.hide();
  } else {
    content.css("display", "flex");
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
      $(this).next().hide(); //Hides the collapsible
    }
  });
});

$("code").on("mouseenter", function () {
  $(this).append("<span id='clipboard'>Copy to clipboard</span>");
});

$("code").on("mouseout", function () {
  $(this).find("span").remove();
});

$("code").on("click", function () {
  navigator.clipboard.writeText($(this).text());
  $(this).find("span").text("Copied");
});

//Magic starts here

//Create an HTML element
$("#Function1Q button").on("click", function () {
  let btn = $("<button> This is a button </button>");
  $(this).parent().append(btn);
});

//Remove an HTML Element
$("#Function2Q button").on("click", function () {
  $(this).next().remove();
});

// Append an HTML element
$("#Function3Q button").on("click", function () {
  let pElement = $("<p> This is a paragraph </p>");
  $(this).parent().append(pElement);
});

// Prepend an HTML element
$("#Function4Q button").on("click", function () {
  let pElement = $("<p> This is a paragraph </p>");
  $(this).parent().prepend(pElement);
});

//Create + add an html element after another element
$("#Function5Q button").on("click", function () {
  let pElement = $("<p>Im also a paragraph</p>");
  $("#Function5Q button").next().after(pElement);
});

//Create + add an html element before another element
$("#Function6Q button").on("click", function () {
  let pElement = $("<p>Im also a paragraph</p>");
  $("#Function6Q .demo p").last().before(pElement);
});

//Clone an HTML element
$("#Function7Q button").on("click", function () {
  $("#Function7Q .demo p").first().clone().appendTo("#Function7Q .demo");
});

//Add a class to an HTML item
$("#Function8Q button").on("click", function () {
  $("#Function8Q .demo p").addClass("bgPastelBlue");
});

//Remove a class to an HTML item
$("#Function9Q button").on("click", function () {
  $("#Function9Q .demo p").removeClass("bgPastelBlue");
});

//Toggle a class to an HTML item
$("#Function10Q button").on("click", function () {
  $("#Function10Q .demo p").toggleClass("bgPastelBlue");
});

//Add a disabled attribute to an HTML button
$("#Function11Q button").on("click", function () {
  $("#Function11Q .demo button").last().prop("disabled", true);
});

//Remove the disabled attribute to an HTML button
$("#Function12Q button").on("click", function () {
  $("#Function12Q .demo button").last().prop("disabled", false);
});

//Set a data-src attribute to a img element
$("#Function13Q button").on("click", function () {
  $("#Function13Q .demo img").attr("data-src", "example");
});

//Remove the data-src attribute of the img element
$("#Function14Q button").on("click", function () {
  $("#Function14Q .demo img").removeAttr("data-src", "example");
});

//Hide an HTML element on click (display: none)
$("#Function15Q button").on("click", function () {
  $("#Function15Q .demo button").hide();
});

//Fade in an HTML element using jQuery
$("#Function17Q button").on("click", function () {
  $("#Function17Q .demo img").fadeIn();
});

//Fade out an HTML element using jQuery
$("#Function18Q button").on("click", function () {
  $("#Function18Q .demo img").fadeOut();
});

//Animate an item after 2s from the initial page load
$("#Function19Q button").on("click", function () {
  location.reload();
});

$(document).ready(function () {
  $(".sectionDiv").css("opacity", 0);
  setTimeout(() => {
    $(".sectionDiv").animate({ opacity: 1 }, 600);
  }, 600);
});

// SELECTORS

//Iterate a collection of elements
$("#Selector1Q button").on("click", function () {
  $("#Selector1Q .demo p").each(function (index, element) {
    $(element).addClass("bgPastelBlue");
  });
});
