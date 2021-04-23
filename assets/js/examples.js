//Functions & Selectors
//F1
function jsF1() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Hi buddy!");
  newDiv.appendChild(newContent);

  var currentDiv = document.querySelector("#r-f-1");
  currentDiv.appendChild(newDiv);
}

function jqueryF1() {
  $("#r-f-1").append($("<div>").text("Hi buddy!"));
}

//F2
function jsF2() {
  document.querySelector("#t-f-2").remove();
}

function jqueryF2() {
  $("#t-f-2").remove();
}

//F3 same as F1
function jqueryF3() {
  $("#r-f-3").append($("<div>").text(" -> Appended!"));
}

//F4
function jsF4() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Prepended! <- ");
  newDiv.appendChild(newContent);

  var currentDiv = document.querySelector("#r-f-4");
  currentDiv.prepend(newDiv);
}

function jqueryF4() {
  $("#r-f-4").prepend($("<div>").text("Prepended! <- "));
}

//F5
function jsF5() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode(" -> After");
  newDiv.appendChild(newContent);

  var currentDiv = document.querySelector("#r-f-5>div");
  currentDiv.after(newDiv);
}

function jqueryF5() {
  $("#r-f-5>div").after($("<div>").text(" -> After"));
}

//F6
function jsF6() {
  let newDiv = document.createElement("div");
  let newContent = document.createTextNode("Before <- ");
  newDiv.appendChild(newContent);

  var currentDiv = document.querySelector("#t-f-6");
  currentDiv.before(newDiv);
}

function jqueryF6() {
  $("#t-f-6").before($("<div>").text("Before <- "));
}

//F7
function jsF7() {
  let div = document.querySelector("#r-f-7>div");
  let newDiv = div.cloneNode(true);

  var currentDiv = document.querySelector("#r-f-7");
  currentDiv.append(newDiv);
}

function jqueryF7() {
  $("#t-f-7").clone().appendTo("#r-f-7");
}

//F8
function jsF8() {
  document.querySelector("#t-f-8").classList.add("t-f-8");
}

function jqueryF8() {
  $("#t-f-8").addClass("t-f-8");
}

//F9
function jsF9() {
  document.querySelector("#t-f-9").classList.remove("t-f-8");
}

function jqueryF9() {
  $("#t-f-9").removeClass("t-f-8");
}

//F10
function jsF10() {
  document.querySelector("#t-f-10").classList.toggle("t-f-8");
}

function jqueryF10() {
  $("#t-f-10").toggleClass("t-f-8");
}

//F11
function jsF11() {
  document.querySelector("#t-f-11").disabled = true;
}

function jqueryF11() {
  $("#t-f-11").prop("disabled", true);
}

//F12
function jsF12() {
  document.querySelector("#t-f-12").disabled = false;
}

function jqueryF12() {
  $("#t-f-12").prop("disabled", false);
}

//F13
function jsF13() {
  document.querySelector("#t-f-13").dataset.src = "image-url";
}

//TODO: No funciona Jquery
function jqueryF13() {
  $("#t-f-13").data(("src", "image-url"));
}

//F14
function jsF14() {
  delete document.querySelector("#t-f-14").dataset.src;
}

//TODO: No funciona Jquery
function jqueryF14() {
  $("#t-f-14").data(("src", "image-url"));
}

//F15
function jsF15() {
  document.querySelector("#t-f-15").style.display = "none";
}

function jqueryF15() {
  $("#t-f-15").css({ display: "none" });
}

//F16
function jsF16() {
  document.querySelector("#t-f-16").style.display = "block";
}

function jqueryF16() {
  $("#t-f-16").css({ display: "block" });
}

//F17
function jqueryF17() {
  $("#t-f-17").fadeIn(1000);
}

//F18
function jqueryF18() {
  $("#t-f-18").fadeOut(1000);
}

//F19
function jsF19() {
  let li = document.querySelectorAll("#r-f-19>ul>li");
  li.forEach((element) => {
    element.classList.add("t-f-19");
  });
}

function jqueryF19() {
  let li = $("#r-f-19>ul>li");
  li.each((i, element) => {
    $(element).addClass("t-f-19");
  });
}

//F20
function jsF20() {
  document.querySelector("#t-f-20").parentNode.style.fontWeight = "bold";
}

function jqueryF20() {
  $("#t-f-20").parent().css({ fontWeight: "bold" });
}

//F21
function jsF21() {
  let li = document.querySelectorAll("#r-f-21>ul>li");
  li.forEach((element) => {
    element.style.fontWeight = "bold";
  });
}

function jqueryF21() {
  let li = $("#r-f-21>ul>li");
  li.each((i, element) => {
    $(element).css({ fontWeight: "bold" });
  });
}

//F22
function jsF22() {
  let li = document.querySelectorAll(".t-f-22");
  li.forEach((element) => {
    element.style.fontWeight = "bold";
  });
}

function jqueryF22() {
  let li = $(".t-f-22");
  li.each((i, element) => {
    $(element).css({ fontWeight: "bold" });
  });
}

//F23
function jsF23() {
  document.querySelector("#t-f-23").style.fontWeight = "bold";
}

function jqueryF23() {
  $("#t-f-23").css({ fontWeight: "bold" });
}

//F24
function jsF24() {
  let li = document.querySelectorAll(".t-f-24");
  li.forEach((element) => {
    if (element.style.display === "") {
      element.style.display = "inline-flex";
      element.style.color = "red";
    }
  });
}

function jqueryF24() {
  let li = $(".t-f-24");
  li.each((i, element) => {
    if ($(element).css("display") === "none") {
      $(element).css({ display: "inline-flex", color: "red" });
    }
  });
}

//TODO: F25 completo
//F25
function jsF25(event) {
  let select = document.querySelector("#t-f-25");
  alert(select.selectedIndex);
  event.preventDefault();
}

function jqueryF25(event) {
  let li = $(".t-f-24");
  li.each((i, element) => {
    if ($(element).css("display") === "none") {
      $(element).css({ display: "inline-flex", color: "red" });
    }
  });
}

//F26
function jsF26() {
  document.querySelector("#r-f-26").firstElementChild.href = "#";
}

function jqueryF26() {
  $("#r-f-26").children()[0].href = "#";
}

//F27
function jsF27() {
  alert(document.querySelector("#r-f-27>form>input").value);
}

function jqueryF27() {
  alert($("#r-f-27>form>input").val());
}

//F28
function jsF28() {
  let div = document.querySelectorAll("#r-f-28>div");
  div.forEach((element) => {
    element.remove();
  });
}

function jqueryF28() {
  $("#r-f-28>div").each((i, element) => {
    element.remove();
  });
}

//F29
function jsF29() {
  var id = null;
  var elem = document.getElementById("r-f-29");
  var pos = 0;
  clearInterval(id);
  id = setInterval(frame, 2);
  function frame() {
    if (pos == 50) {
      clearInterval(id);
    } else {
      pos++;
      elem.style.left = pos + "px";
    }
  }
}

function jqueryF29() {
  $("#r-f-29>div").animate(
    {
      left: "50px",
    },
    500
  );
}

//EVENETS
//E1
let domLoadedJs = false;
document.addEventListener("DOMContentLoaded", () => {
  domLoadedJs = true;
});
function jsE1() {
  if (domLoadedJs === true) {
    document.querySelector("#r-e-1>div").innerHTML =
      "DOM fully loaded and parsed";
  }
}

let domLoadedJquery = false;
if ($(document).ready()) {
  domLoadedJquery = true;
}
function jqueryE1() {
  if (domLoadedJquery === true) {
    $("#r-e-1>div").text("DOM fully loaded and parsed");
  }
}

//E2
function jsE2() {
  document.querySelector("#r-e-2>div").innerHTML = "Clicked";
}

function jqueryE2() {
  $("#r-e-2>div").text("Clicked");
}

//E3
function jsE3() {
  document.querySelector("#btn-e-3").addEventListener("dblclick", () => {
    document.querySelector("#r-e-3>div").innerHTML = "Double clicked";
  });
}

function jqueryE3() {
  $("#btn-e-3").dblclick(() => {
    $("#r-e-3>div").text("Double clicked");
  });
}

//E4
function jsE4() {
  document.addEventListener("keydown", () => {
    document.querySelector("#r-e-4>div").innerHTML = "Key pressed";
  });
}

function jqueryE4() {
  $(document).keydown(() => {
    $("#r-e-4>div").text("Key pressed");
  });
}

//E5
function jsE5() {
  document.addEventListener("mousemove", () => {
    document.querySelector("#r-e-5>div").innerHTML = "Mouse moved";
  });
}

function jqueryE5() {
  $(document).mousemove(() => {
    $("#r-e-5>div").text("Mouse moved");
  });
}

//E6
//TODO: E6 prueba completa
