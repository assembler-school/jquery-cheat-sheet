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

// change select event
export function fnChangeSelect() {
  const selector = document.getElementById("e9Js");
  selector.addEventListener("change", function (e) {
    let value = e.target.value;
    alert("You selected: " + value);
  });
}

// mouse over event
export function fnMouseOver() {
  const selector = document.getElementById("e10Js");
  selector.addEventListener("mouseover", function (e) {
    document.getElementById("e10Js").style.color = "red";
  });
}

// click event on checkbox
export function fnChecked() {
  const selector = document.getElementById("e11Js");
  selector.addEventListener("click", function (e) {
    let checkBox = document.getElementById("e11Js");
    let text = document.getElementById("e11JsDemo");

    if (checkBox.checked == true) {
      text.style.display = "block";
    } else {
      text.style.display = "none";
    }
  });
}

// event target
export function fnEventTarget() {
  const selector = document.getElementById("e12Js").children;

  for (const li of selector) {
    li.addEventListener("click", function (e) {
      alert(e.target.textContent);
    });
  }
}

/*
 * SECTION OF FUNCTIONS & SELECTORS
 */
export function fnCreate() {
  const selector = document.getElementById("f0Js");

  selector.addEventListener("click", function (e) {
    let para = document.createElement("P");
    para.innerText = "This is a paragraph.";
    document.getElementById("f0JsDemo").appendChild(para);
  });
}
