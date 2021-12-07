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
  $(this).parent().append("<span id='clipboard'>Copy to clipboard</span>");
});

$("code").on("mouseout", function () {
  $(this).parent().find("span").remove();
});

$("code").on("click", function () {
  navigator.clipboard.writeText($(this).text());
  $(this).parent().find("span").text("Copied");
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

//Get the parent element of a certain element
$("#Selector2Q button").on("click", function () {
  $(this).parent().css("font-weight", "bold");
});

//Get the collection of children of a certain element
$("#Selector3Q button").on("click", function () {
  $(this).parent().children().css("font-weight", "bold");
});

//Get all the elements that have a certain class
$("#Selector4Q button").on("click", function () {
  $(".selector4Q").css("font-weight", "bold");
});

//Get an item by id
$("#Selector5Q button").on("click", function () {
  $("#pSelect5Q").css("font-weight", "bold");
});

//Get all the elements that have a certain class and property
$("#Selector6Q button").on("click", function () {
  $(".selector6Q:hidden").css({ display: "block", color: "blue" });
});

//Get the selected option of a select element
$("#Selector7Q button").on("click", function () {
  let selectedOption = $("#Selector7Q select").val();
  $("#Selector7Q span").text(selectedOption);
});

//Change the href attribute of the first element
$("#Selector8Q button").on("click", function () {
  $("#Selector8Q a:first").attr("href", "https://duckduckgo.com/");
});

//Show the value of a first input on the page
$("#Selector9Q button").on("click", function () {
  alert($("#Selector9Q input:first").val());
});

//Remove all items from a specific selector
$("#Selector10Q button").on("click", function () {
  $("#Selector10Q p").remove();
});

//EVENTS

//HTML document loaded
let domLoadedQ = false;
$(document).ready(function () {
  domLoadedQ = true;
});

$("#Event1Q button").on("click", function () {
  $("#Event1Q span").text(domLoadedQ);
});

//HTML element clicked
$("#Event2Q button").on("click", function () {
  $(this).text($(this).text() + " Clicked");
});

//HTML element clicked
$("#Event3Q button").on("dblclick", function () {
  $(this).text($(this).text() + " Double clicked");
});

//Key pressed on keyboard

$("#Event4Q button").on("click", function () {
  $(document).on("keydown", function keyboardQ(event) {
    $("#Event4Q span").text(event.key);
  });
});

//Mouse cursor moves
$("#Event5Q button").on("click", function () {
  $(document).on("mousemove", function (event) {
    $("#Event5Q span").text(event.pageX + ", " + event.pageY);
  });
});

//Value changed on text input
$("#Event6Q button").on("click", function () {
  $("#Event6Q input").on("input", function (event) {
    $("#Event6Q span").text(event.target.value);
  });
});

//Image loaded
let imgloadedQuery = false;
$("#Event7Q img")
  .on("load", function () {
    imgloadedQuery = true;
  })
  .attr("src", "https://via.placeholder.com/150");

$("#Event7Q button").on("click", function () {
  $("#Event7Q span").text(imgloadedQuery);
});

//Image load failed
let imgloadFailQuery = false;
$("#Event8Q img")
  .on("error", function () {
    imgloadedFailQuery = true;
  })
  .attr("src", "fail.jpg");

$("#Event8Q button").on("click", function () {
  $("#Event8Q span").text(imgloadedFailQuery);
});

//Form submited
$("#queryForm").on("submit", function (event) {
  event.preventDefault();
  $("#Event9Q span").text("Form Submited!");
});

//Option selected on select element
$("#Event10Q select").on("change", function () {
  $("#Event10Q span").text("Value is: " + $("#Event10Q select").val());
});

//When you position the mouse over an element
$("#Event11Q span").on("mouseover", function (event) {
  $(event.target).text("Mouse is over");
});
$("#Event11Q span").on("mouseleave", function (event) {
  $(event.target).text("Mouse is not over");
});

//Checkbox checked or unchecked
$("#Event12Q input").on("change", function (event) {
  if ($(event.target).is(":checked")) {
    $("#Event12Q span").text("Checked");
  } else {
    $("#Event12Q span").text("Unchecked");
  }
});

//Show the clicked item of an UL list
$("#Event13Q ol").on("click", function (event) {
  $("#Event13Q span").text("Value clicked: " + $(event.target).text());
});
