/*
 * EVENTS
 */

// click event
export function fnClick() {
  const btn = document.querySelector(".e1Js");
  btn.addEventListener("click", function (event) {
    alert("Js vanilla code");
  });
}

// double click event
export function fnDblClick() {
  const btn = document.querySelector(".e2Js");
  btn.addEventListener("dblclick", function (event) {
    alert("Js vanilla - double click");
  });
}

// press key event
export function fnPressKey() {
  const input = document.getElementById("e3Js");
  input.addEventListener("keypress", function (event) {
    input.style.backgroundColor = "red";
  });
}
