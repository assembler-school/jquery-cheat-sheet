function vanillaResult(x) {
  $("#vanilla_result").html(x);
}

function jqueryResult(y) {
  $("#jquery_result").html(y);
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
// function addResult(id, param) {
  
//   document.getElementById(`"#${id}"`).addEventListener("click", function () {
//     vanillaResult("vanilla" + param);
//     jqueryResult("jquery" + param);
//   });
// }
//!PENDIENTE INTEGRAR
function listClickedColor(){
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
}

//EVENTS
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

//FUNCTIONS
$("#f1").on("click", function () {
  vanillaResult(vanillaf1);
  jqueryResult(jqueryf1);
});

$("#f2").on("click", function () {
  vanillaResult(vanillaf2);
  jqueryResult(jqueryf2);
});

$("#f3").on("click", function () {
  vanillaResult(vanillaf3);
  jqueryResult(jqueryf3);
});

$("#f4").on("click", function () {
  vanillaResult(vanillaf4);
  jqueryResult(jqueryf4);
});

$("#f5").on("click", function () {
  vanillaResult(vanillaf5);
  jqueryResult(jqueryf5);
});

$("#f6").on("click", function () {
  vanillaResult(vanillaf6);
  jqueryResult(jqueryf6);
});

$("#f7").on("click", function () {
  vanillaResult(vanillaf7);
  jqueryResult(jqueryf7);
});

$("#f8").on("click", function () {
  vanillaResult(vanillaf8);
  jqueryResult(jqueryf8);
});

$("#f9").on("click", function () {
  vanillaResult(vanillaf9);
  jqueryResult(jqueryf9);
});

$("#f10").on("click", function () {
  vanillaResult(vanillaf10);
  jqueryResult(jqueryf10);
});

$("#f11").on("click", function () {
  vanillaResult(vanillaf11);
  jqueryResult(jqueryf11);
});

$("#f12").on("click", function () {
  vanillaResult(vanillaf12);
  jqueryResult(jqueryf12);
});

$("#f13").on("click", function () {
  vanillaResult(vanillaf13);
  jqueryResult(jqueryf13);
});

$("#f14").on("click", function () {
  vanillaResult(vanillaf14);
  jqueryResult(jqueryf14);
});

//FUNCTIONS
$("#s1").on("click", function () {
  vanillaResult(vanillas1);
  jqueryResult(jquerys1);
});

$("#s2").on("click", function () {
  vanillaResult(vanillas2);
  jqueryResult(jquerys2);
});

$("#s3").on("click", function () {
  vanillaResult(vanillas3);
  jqueryResult(jquerys3);
});

$("#s4").on("click", function () {
  vanillaResult(vanillas4);
  jqueryResult(jquerys4);
});

$("#s5").on("click", function () {
  vanillaResult(vanillas5);
  jqueryResult(jquerys5);
});

$("#s6").on("click", function () {
  vanillaResult(vanillas6);
  jqueryResult(jquerys6);
});

$("#s7").on("click", function () {
  vanillaResult(vanillas7);
  jqueryResult(jquerys7);
});

$("#s8").on("click", function () {
  vanillaResult(vanillas8);
  jqueryResult(jquerys8);
});

$("#s9").on("click", function () {
  vanillaResult(vanillas9);
  jqueryResult(jquerys9);
});

$("#s10").on("click", function () {
  vanillaResult(vanillas10);
  jqueryResult(jquerys10);
});

$("#s11").on("click", function () {
  vanillaResult(vanillas11);
  jqueryResult(jquerys11);
});

$("#s12").on("click", function () {
  vanillaResult(vanillas12);
  jqueryResult(jquerys12);
});

$("#s13").on("click", function () {
  vanillaResult(vanillas13);
  jqueryResult(jquerys13);
});

$("#s14").on("click", function () {
  vanillaResult(vanillas14);
  jqueryResult(jquerys14);
});

$("#s15").on("click", function () {
  vanillaResult(vanillas15);
  jqueryResult(jquerys15);
});
