// When the HTML document has been loaded and you can manipulate it with JavaScript
$("#ex1.article__content").ready(function () {
  $(".ex1jq").append($("<p>").text("The web is loaded!"));
});

// When an HTML item has been clicked
$("#events__section .article__ex--2jq button").on("click", function () {
  $(this).text("Well clicked, Sir");
  let timeOut2 = setTimeout(function () {
    $("#events__section .article__ex--2jq button").text("Click me!");
    clearTimeout(timeOut2);
  }, 3000);
});

//When an HTML item has been double clicked
$(".ex3jq__dot").on("dblclick", function () {
  $(this).next().text("That's right!");
});

$(".ex3jq__dot").on("click", function () {
  $(this).next().text("No!");
});

//When the user presses a key on the keyboard
$(document).on("keydown", function (e) {
  $(".ex4jq_p").text("What are you trying to say with '" + e.key + "'?");
});

//When the user moves the mouse cursor
$(".ex5").on("mousemove", function () {
  $(".ex5jq_p").text("Please stop moving...");
});

$(".ex5").on("mouseout", function () {
  $(".ex5jq_p").text("Stay out, don't mess arround again.");
});

//When the user changes a value of a text input
$(".ex6jq_input").on("input", function () {
  $(".ex6jq_p").text("Write it back!");
  if ($(this).val() === "Jeronimo!") {
    $(".ex6jq_p").text("Now better...");
  }
});

//When an image is loaded
$(".ex7").on("click", function () {
  if ($(".ex7").attr("display") != "none") {
    let timeOut7 = setTimeout(function () {
      $(".ex7jq_img").attr(
        "src",
        "https://images.unsplash.com/photo-1546419031-2f09ee2293d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
      );
      clearTimeout(timeOut7);
    }, 4000);
  }
});

$(".ex7jq_img").on("load", function () {
  $(".ex7jq_p").text("I've told you!");
});

//When an image fails to load
$(".ex8").on("click", function () {
  if ($(".ex8").attr("display") != "none") {
    let timeOut8 = setTimeout(function () {
      $(".ex8jq_img").attr("src", "ups");
      clearTimeout(timeOut8);
    }, 4000);
  }
});

$(".ex8jq_img").on("error", function () {
  $(".ex8jq_p").text("Noooooo...");
});

//When a form is submitted
$(".ex9jq_form").on("submit", function (e) {
  e.preventDefault();

  $(".ex9jq_p").text("Thank you for choosing jQuery");
});

// When the user changes the option of a select element
$("#ex10jq_colors").on("change", function () {
  $(".ex10jq_p").html("You like <div></div>");
  $(".ex10jq_p div").css("background-color", $("#ex10jq_colors").val());
});

// When you position the mouse over an element
$(".ex11jq_div").on("mouseover", function () {
  $(".ex11jq_div").css("color", "black");
});

$(".ex11jq_div").on("mouseout", function () {
  $(".ex11jq_div").css("color", "white");
});

// When a checkbox is checked or unchecked
$("#ex12jq_check").on("change", function () {
  $("#ex12jq_check:checked").val()
    ? $(".ex12jq_p").text("The box is unchecked.")
    : $(".ex12jq_p").text("The box is checked.");
});

// When a ul list item is clicked, show the item that was clicked
$(".ex13jq_li").on("click", function () {
  $(".ex13jq_li").css({
    "text-decoration": "line-through",
    "font-weight": "normal",
  });
  $(this).css({ "text-decoration": "none", "font-weight": "bold" });
});

// Create an HTML element with any text value
$(".ex14jq_btn").on("click", function () {
  $(".ex14jq").append($("p").text("Are you my mummy?"));
});

// Remove an HTML element with any text value
$(".ex15jq_btn").on("click", function () {
  $(".ex15jq_p").remove();
});

// Append an HTML element with any text value to a parent element
$(".ex16jq_btn").on("click", function () {
  $(".ex16jq").append($("<p>").text("Nothing special..."));
});

// Prepend an HTML element with any text value to a parent element
$(".ex17jq_btn").on("click", function () {
  $(".ex17jq").prepend($("<p>").text("Watch your back!"));
});

// Create and add an HTML element with any text value after another element
$(".ex18jq_btn").on("click", function () {
  $(".ex18jq_li").after($("<li>").text("Aha, you didn't expected me!"));
});

// Create and add an HTML element with any text value before another element
$(".ex19jq_btn").on("click", function () {
  $(".ex19jq_li").before($("<li>").text("It's a coding trick!"));
});

// Clone an HTML element within other element
$(".ex20jq_btn").on("click", function () {
  $(".ex20div_blue").append($("#stormtrooper_jq").clone());
});

// Add a class to an HTML item
$(".ex21jq_btn").on("click", function () {
  $(".ex21jq").addClass("ex21jq--change");
});

// Remove a class to an HTML item
$(".ex22jq_btn").on("click", function () {
  $("#ex22jq").removeClass("ex21jq--change");
});

// Toggle a class of an HTML item
$(".ex23jq_btn").on("click", function () {
  $("#ex23jq").toggleClass("ex23jq--change");
});

// Add a disabled attribute to an HTML button
$(".ex24jq_btn").on("click", function () {
  $(".ex24jq_btn").attr("disabled", "true");
});

// Remove the disabled attribute of an HTML button
$("#ex25jq_boss").on("click", function () {
  $(".ex25jq_btn").removeAttr("disabled");
  $(".ex25jq_btn").text("Working hard Sir");
});

// Set a data-src attribute to a img element
$(".ex26jq_btn").on("click", function () {
  $("#ex26jq").data("language", "Woof woof woof");
  $(".ex26jq_btn").text($("#ex26jq").data("language"));
});

// Remove the data-src attribute of the img element
$(".ex27jq_btn").on("click", function () {
  $("#ex27jq").removeAttr("data-language");
  $(".ex27jq_btn").text("");
});

// Hide an HTML element on click (display: none)
$(".ex28jq_btn").on("click", function () {
  $("#ex28jq").toggle();
});

// Show an HTML element on click (display: block)
$(".ex29jq_btn").on("click", function () {
  $("#ex29jq").toggle();
});

// Fade in an HTML element using jQuery
$(".ex30jq_btn").on("click", function () {
  $("#ex30jq").fadeIn(2000);
});

//Fade out an HTML element using jQuery
$(".ex31jq_btn").on("click", function () {
  $("#ex31jq").fadeOut(2000);
});

// Iterate a collection of elements and apply a change of style on them
$(".ex32jq_btn").on("click", function () {
  $("#ex32jq li").each(function (index, element) {
    $(element).css("font-weight", "bold");
  });
});

// Get the parent element of a certain element and change its font weight
$(".ex33jq_btn").on("click", function () {
  $(".ex33jq_btn").parent().css("font-weight", "bold");
});

// Get the collection of children of a certain element and change its font weight
$(".ex34jq_btn").on("click", function () {
  $("#ex34jq li").css("font-weight", "bold");
});

// Get all the elements that have a certain class and change their font weight
$(".ex35jq_btn").on("click", function () {
  $(".special35jq").css("font-weight", "bold");
});

// Get an item by id and change its font weight
$(".ex36jq_btn").on("click", function () {
  $("#impostor36jq").css("font-weight", "bold");
});

// Get all the elements that have a certain class and the display property of none and change their font color
$(".ex37jq_btn").on("click", function () {
  $(".ninja37jq[style='display: none;']").css("color", "red");
});

// Get the options of a select element that are selected (attribute selected)
$(".ex38jq_btn").on("click", function () {
  $("#ex38jq").text("Here is your " + $("#fruits38").val());
});

// Change the href attribute of the first <a> element (You have to create several <a> elements)
$(".ex39jq_btn").on("click", function () {
  $("#ex39jq a:first-child").attr("href", "https://youtu.be/Gc2u6AFImn8");
});

// Show an alert with the value of the first <input> of the page (Create an <input> element to test this case)
$(".ex40jq_btn").on("click", function () {
  alert($("#ex40jq > input").val());
});

// Remove all items from a specific selector
$(".ex41jq_btn").on("click", function () {
  $("#ex41jq li:nth-child(odd)").remove();
});

// Animate an item after 2 seconds from the initial page load
$("#ex42").on("click", function () {
  let timeOut42 = setTimeout(function () {
    console.log("hola");
    $("#ex42jq").animate({ width: "+=50px" });
    clearTimeout(timeOut42);
  }, 2000);
});
