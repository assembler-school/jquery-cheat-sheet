/*
 * SECTION OF EVENTS
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

// Mouse move event
export function fnMouseMove() {
  const input = document.getElementById("e4Js");
  input.addEventListener("mousemove", function (e) {
    let x = e.clientX;
    let y = e.clientY;
    let coor = "Coordinates: (" + x + "," + y + ")";
    document.getElementById("e4JsDemo").innerHTML = coor;
  });
}

// on change event
export function fnOnChange() {
  const input = document.getElementById("e5Js");
  input.addEventListener("change", function (e) {
    let x = document.getElementById("e5Js");
    x.value = x.value.toUpperCase();
  });
}

// on image loaded event
export function fnOnImgLoaded() {
  let img1 = document.createElement("img");
  img1.src = "./assets/img/assembler.png";
  document.getElementById("e6Js").append(img1);
  img1.onload = function () {
    document.getElementById("e6JsDemo").textContent = "Image loaded.";
  };
}

// on image failed to load event
export function fnOnImgFailed() {
  let img1 = document.createElement("img");
  img1.src = "./assets/img/assemblers.png";
  document.getElementById("e7Js").append(img1);
  img1.onerror = function () {
    document.getElementById("e7JsDemo").textContent = "Image Failed.";
  };
}

// on form submit event
export function fnFormSubmit() {
  document.getElementById("e8Js").addEventListener("submit", function () {
    alert("The form was submitted");
  });
}
