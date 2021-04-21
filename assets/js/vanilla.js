/*
 * EVENTS
 */

// click event
export function fnClick() {
  const btn = document.querySelector(".e0Js");
  btn.addEventListener("click", function (event) {
    alert("Js vanilla code");
  });
}

// click event
export function fnPressKey() {
  const btn = document.querySelector(".mdJs");
  btn.addEventListener("keypress", function (event) {
    alert("Js vanilla - you pressed: ", e.code);
  });
}
