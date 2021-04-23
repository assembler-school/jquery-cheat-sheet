// When the HTML document has been loaded and you can manipulate it with JavaScript
$("#ex1.article__content").ready(function () {
  $(".ex1jq").append($("<p>").text("The web is loaded!"));
});

// When an HTML item has been clicked
$("#events__section .article__ex--2jq button").on("click", function () {
  $(this).text("Well clicked, Sir");
  let timeOut1 = setTimeout(function () {
    $("#events__section .article__ex--2jq button").text("Click me!");
    clearTimeout(timeOut1);
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
    setTimeout(function () {
      $(".ex7jq_img").attr(
        "src",
        "https://images.unsplash.com/photo-1546419031-2f09ee2293d8?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1502&q=80"
      );
    }, 4000);
  }
});

$(".ex7jq_img").on("load", function () {
  $(".ex7jq_p").text("I've told you!");
});

//When an image fails to load
$(".ex8").on("click", function () {
  if ($(".ex8").attr("display") != "none") {
    setTimeout(function () {
      $(".ex8jq_img").attr("src", "ups");
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
