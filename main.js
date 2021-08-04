let imageJS = document.createElement("img");
imageJS.src = "/assets/tickYellow.png";
imageJS.className = "sticker";

let imageJquery = document.createElement("img");
imageJquery.src = "/assets/tickBlue.png";
imageJquery.className = "sticker";

function vanillaResult(x) {
  $("#vanilla_result").html(x);
}

function jqueryResult(y) {
  $("#jquery_result").html(y);
}

function addExample(z) {
  $("#example").html(z);
}

$("#button_events").on("click", function () {
  $(".p_events").toggle();
  $(".p_functions").hide();
  $(".p_selectors").hide();
});

$("#button_functions").on("click", function () {
  $(".p_functions").toggle();
  $(".p_events").hide();
  $(".p_selectors").hide();
});

$("#button_selectors").on("click", function () {
  $(".p_selectors").toggle();
  $(".p_events").hide();
  $(".p_functions").hide();
});

//!Prueba para hacer una función que añada
// function addResult(id, param) {
  
//   document.getElementById(`"#${id}"`).addEventListener("click", function () {
//     vanillaResult("vanilla" + param);
//     jqueryResult("jquery" + param);
//   });
// }
// function listClickedColor(){
//   $(".pointer").removeClass("blue");
//   $(this).addClass("blue");
// }


//  function addResult(id, param1, param2){
//    $(id).on("click", function () {
//     $(".pointer").removeClass("blue");
//     $(this).addClass("blue");
//     console.log($(id));
//     $("#vanilla_result").html(param1);
//     $("#jquery_result").html(param2);
//    });
//   }

// for (let index = 0; index < 43; index++) {
//   let indextring = 2.toString();
//   addResult("#e" + 2 ,vanillae + 2, jquerye + 2)
// }



//EVENTS
$("#e1").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example1);
  vanillae1e();
  jquerye1e();
  vanillaResult(vanillae1);
  jqueryResult(jquerye1);
});

$("#e2").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example2);
  vanillae2e();
  jquerye2e();
  vanillaResult(vanillae2);
  jqueryResult(jquerye2);
});

$("#e3").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example3);
  vanillae3e();
  jquerye3e();
  vanillaResult(vanillae3);
  jqueryResult(jquerye3);
});

$("#e4").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example4);
  vanillae4e();
  jquerye4e();
  vanillaResult(vanillae4);
  jqueryResult(jquerye4);
});

$("#e5").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example5);
  vanillae5e();
  jquerye5e();
  vanillaResult(vanillae5);
  jqueryResult(jquerye5);
});

$("#e6").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example6);
  vanillae6e();
  jquerye6e();
  vanillaResult(vanillae6);
  jqueryResult(jquerye6);
});

$("#e7").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example7);
  vanillae7e();
  jquerye7e();
  vanillaResult(vanillae7);
  jqueryResult(jquerye7);
});

$("#e8").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example8);
  vanillae8e();
  jquerye8e();
  vanillaResult(vanillae8);
  jqueryResult(jquerye8);
});

$("#e9").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example9);
  vanillae9e();
  jquerye9e();
  vanillaResult(vanillae9);
  jqueryResult(jquerye9);
});

$("#e10").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example10);
  vanillae10e();
  jquerye10e();
  vanillaResult(vanillae10);
  jqueryResult(jquerye10);
});

$("#e11").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example11);
  vanillae11e();
  jquerye11e();
  vanillaResult(vanillae11);
  jqueryResult(jquerye11);
});

$("#e12").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example12);
  vanillae12e();
  jquerye12e();
  vanillaResult(vanillae12);
  jqueryResult(jquerye12);
});

$("#e13").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  addExample(example13);
  vanillae13e();
  jquerye13e();
  vanillaResult(vanillae13);
  jqueryResult(jquerye13);
});

//FUNCTIONS
$("#f1").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf1);
  jqueryResult(jqueryf1);
});

$("#f2").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf2);
  jqueryResult(jqueryf2);
});

$("#f3").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf3);
  jqueryResult(jqueryf3);
});

$("#f4").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf4);
  jqueryResult(jqueryf4);
});

$("#f5").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf5);
  jqueryResult(jqueryf5);
});

$("#f6").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf6);
  jqueryResult(jqueryf6);
});

$("#f7").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf7);
  jqueryResult(jqueryf7);
});

$("#f8").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf8);
  jqueryResult(jqueryf8);
});

$("#f9").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf9);
  jqueryResult(jqueryf9);
});

$("#f10").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf10);
  jqueryResult(jqueryf10);
});

$("#f11").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf11);
  jqueryResult(jqueryf11);
});

$("#f12").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf12);
  jqueryResult(jqueryf12);
});

$("#f13").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf13);
  jqueryResult(jqueryf13);
});

$("#f14").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillaf14);
  jqueryResult(jqueryf14);
});

//FUNCTIONS
$("#s1").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas1);
  jqueryResult(jquerys1);
});

$("#s2").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas2);
  jqueryResult(jquerys2);
});

$("#s3").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas3);
  jqueryResult(jquerys3);
});

$("#s4").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas4);
  jqueryResult(jquerys4);
});

$("#s5").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas5);
  jqueryResult(jquerys5);
});

$("#s6").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas6);
  jqueryResult(jquerys6);
});

$("#s7").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas7);
  jqueryResult(jquerys7);
});

$("#s8").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas8);
  jqueryResult(jquerys8);
});

$("#s9").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas9);
  jqueryResult(jquerys9);
});

$("#s10").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas10);
  jqueryResult(jquerys10);
});

$("#s11").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas11);
  jqueryResult(jquerys11);
});

$("#s12").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas12);
  jqueryResult(jquerys12);
});

$("#s13").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas13);
  jqueryResult(jquerys13);
});

$("#s14").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas14);
  jqueryResult(jquerys14);
});

$("#s15").on("click", function () {
  $(".pointer").removeClass("blue");
  $(this).addClass("blue");
  vanillaResult(vanillas15);
  jqueryResult(jquerys15);
});
