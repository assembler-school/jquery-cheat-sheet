function vanillaResult(id) {
  $("#vanilla_result").html(id);
}

function jqueryResult(id) {
  $("#jquery_result").html(id);
}

$("#button_events").on("click", function () {
  $(".p_events").toggle();
  $(".p_functions").hide();
  $(".p_selectors").hide();
  vanillaResult("");
  jqueryResult("");
});

$("#button_functions").on("click", function () {
  $(".p_functions").toggle();
  $(".p_events").hide();
  $(".p_selectors").hide();
  vanillaResult("");
  jqueryResult("");
});

$("#button_selectors").on("click", function () {
  $(".p_selectors").toggle();
  $(".p_events").hide();
  $(".p_functions").hide();
  vanillaResult("");
  jqueryResult("");
});

//!Prueba para hacer una función que añada
// function addResult(param) {
//   document.querySelector(`"#${param}"`).addEventListener("click", function () {
//     vanillaResult("vanilla" + param);
//     jqueryResult("jquery" + param);
//   });
// }

$("#e1").on("click", function () {
  vanillaResult(vanillae1);
  jqueryResult(jquerye1);
});

$("#e2").on("click", function () {
  vanillaResult(vanillae2);
  jqueryResult(jquerye2);
});

$("#e3").on("click", function () {
  vanillaResult(vanillae3);
  jqueryResult(jquerye3);
});

$("#e4").on("click", function () {
  vanillaResult(vanillae4);
  jqueryResult(jquerye4);
});

$("#e5").on("click", function () {
  vanillaResult(vanillae5);
  jqueryResult(jquerye5);
});

$("#e6").on("click", function () {
  vanillaResult(vanillae6);
  jqueryResult(jquerye6);
});

$("#e7").on("click", function () {
  vanillaResult(vanillae7);
  jqueryResult(jquerye7);
});

$("#e8").on("click", function () {
  vanillaResult(vanillae8);
  jqueryResult(jquerye8);
});

$("#e9").on("click", function () {
  vanillaResult(vanillae9);
  jqueryResult(jquerye9);
});

$("#e10").on("click", function () {
  vanillaResult(vanillae10);
  jqueryResult(jquerye10);
});

$("#e11").on("click", function () {
  vanillaResult(vanillae11);
  jqueryResult(jquerye11);
});

$("#e12").on("click", function () {
  vanillaResult(vanillae12);
  jqueryResult(jquerye12);
});

$("#e13").on("click", function () {
  vanillaResult(vanillae13);
  jqueryResult(jquerye13);
});
