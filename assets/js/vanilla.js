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

export function fnRemove() {
  const selector = document.getElementById("f1Js");

  selector.addEventListener("click", function (e) {
    document.getElementById("f1JsDemo").remove();
  });
}

export function fnPrepend() {
  const selector = document.getElementById("f3Js");

  selector.addEventListener("click", function (e) {
    let para = document.createElement("button");
    para.innerText = "Click Me!";
    document.getElementById("f3JsDemo").prepend(para);
  });
}

export function fnAfter() {
  const selector = document.getElementById("f4Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll(".f4JsDemo");

    para.forEach((element) => {
      let btn = document.createElement("button");
      btn.textContent = "Click";
      element.insertAdjacentElement("afterend", btn);
    });
  });
}

export function fnBefore() {
  const selector = document.getElementById("f5Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll(".f5JsDemo");

    para.forEach((element) => {
      let btn = document.createElement("button");
      btn.textContent = "Click";
      element.insertAdjacentElement("beforebegin", btn);
    });
  });
}

export function fnClone() {
  const selector = document.getElementById("f6Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f6JsDemo");
    let cln = para.cloneNode(true);
    para.insertAdjacentElement("afterbegin", cln);
  });
}

export function fnAddClass() {
  const selector = document.getElementById("f7Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f7JsDemo");
    para.classList.add("red-text");
  });
}

export function fnRemoveClass() {
  const selector = document.getElementById("f8Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f8JsDemo");
    para.classList.remove("red-text");
  });
}

export function fnToggleClass() {
  const selector = document.getElementById("f9Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f9JsDemo");
    para.classList.toggle("red-text");
  });
}

export function fnAddAttr() {
  const selector = document.getElementById("f10Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f10Js");
    para.setAttribute("disabled", "true");
  });
}

export function fnRemoveAttr() {
  const selector = document.getElementById("f11Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f11JsDemo");
    para.removeAttribute("disabled");
  });
}

export function fnToggleDataAttr() {
  const btn1 = document.getElementById("f12Jsb1");
  const btn2 = document.getElementById("f12Jsb2");

  btn1.addEventListener("click", function (e) {
    const img = document.getElementById("f12JsImg");
    img.dataset.src = "./assembler.png";
    alert("data-src is: " + img.dataset.src);
  });

  btn2.addEventListener("click", function (e) {
    const img = document.getElementById("f12JsImg");
    img.removeAttribute("data-src");
    alert("data-src  is: " + img.dataset.src);
  });
}

export function fnHide() {
  const selector = document.getElementById("f13Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f13JsDemo");
    para.style.display = "none";
  });
}

export function fnShow() {
  const selector = document.getElementById("f14Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f14JsDemo");
    para.style.display = "block";
  });
}

export function fnFadeIn() {
  const selector = document.getElementById("f15Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f15JsDemo");
    para.classList.add("fade-in");
    para.classList.remove("none");
  });
}

export function fnFadeOut() {
  const selector = document.getElementById("f16Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f16JsDemo");
    para.classList.add("fade-out");
  });
}

export function fnIterator() {
  const selector = document.getElementById("f17Js");

  selector.addEventListener("click", function (e) {
    let lis = document.querySelectorAll("#f17JsDemo li");
    lis.forEach((element) => {
      element.style.color = "red";
    });
  });
}

export function fnChildren() {
  const selector = document.getElementById("f18Js");

  selector.addEventListener("click", function (e) {
    let lis = document.querySelectorAll("#f18JsDemo")[0].children;
    for (const iterator of lis) {
      iterator.style.color = "red";
    }
  });
}

export function fnParent() {
  const selector = document.getElementById("f19Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f19JsDemo li").parentElement;
    para.style.background = "red";
  });
}

export function fnClassSelector() {
  const selector = document.getElementById("f20Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector(".f20JsDemo");
    para.style.fontWeight = "Bold";
  });
}

export function fnIdSelector() {
  const selector = document.getElementById("f21Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelector("#f21JsDemo");
    para.style.fontWeight = "Bold";
  });
}

export function fnPropSelector() {
  const selector = document.getElementById("f22Js");

  selector.addEventListener("click", function (e) {
    let para = document.querySelectorAll('.textJs[style="display:none;"]');

    para.forEach((element) => {
      element.style.display = "block";
      element.style.color = "red";
    });
  });
}
