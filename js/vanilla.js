function vanillaClickEvent() {
  document.querySelector("#vanilla").addEventListener("click", () => {
    document.querySelector("#vanilla >p").textContent = "CLICKED VANILLA";
  });
}

function vanillaDoubleClick() {
  document.querySelector("#vanilla").addEventListener("dblclick", () => {
    document.querySelector("#vanilla >p").textContent =
      "DOUBLE CLICKED VANILLA";
  });
}

function vanillaKeyPressEvent() {
  document.querySelector("#vanilla >p").textContent = "VANILLA KEY PRESSED";
}

function vanillaCursorOverEvent() {
  document.querySelector("#vanilla").addEventListener("mouseover", () => {
    document.querySelector("#vanilla").style.border = "2px solid red";
  });
}

function vanillaChangeValue() {
  let count = 0;
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", "<input type='text'>");
  document.querySelector("#vanilla input").addEventListener("change", () => {
    count++;
    document.querySelector("#vanilla > p").textContent =
      "Changed " + count + " times";
  });
}

function vanillaImageLoad() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML(
      "beforeend",
      "<img src='https://www.imghoteles.com/wp-content/uploads/sites/1709/nggallery/desktop-pics/fott1.jpg'>"
    );
  document.querySelector("#vanilla img").addEventListener("load", () => {
    document.querySelector("#vanilla > p").textContent = "VANILLA IMG LOADED";
  });
}

function vanillaImageFails() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", "<img src=''>");
  document.querySelector("#vanilla img").addEventListener("error", () => {
    document.querySelector("#vanilla > p").textContent =
      "VANILLA IMG FAILS TO LOAD";
  });
}

function vanillaSubmitEvent() {}

function vanillaChangeOption() {}

function vanillaMousePosition() {}

function vanillaChecked() {}

export {
  vanillaClickEvent,
  vanillaDoubleClick,
  vanillaKeyPressEvent,
  vanillaCursorOverEvent,
  vanillaChangeValue,
  vanillaImageLoad,
  vanillaImageFails,
  vanillaSubmitEvent,
  vanillaChangeOption,
  vanillaMousePosition,
  vanillaChecked,
};
