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
  console.log("TECLA PULSADA");
}

function vanillaCursorOverEvent() {
  document.querySelector("#vanilla").addEventListener("mousemove", () => {
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

function vanillaSubmitEvent() {
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<form>
    <input type="text">
    <input type="submit">
    </form>`
  );
  document.querySelector("#vanilla form").addEventListener("submit", (e) => {
    e.preventDefault();
    document.querySelector("#vanilla input[type='text']").value =
      "SUBMITTED FORM VANILLA";
  });
}

function vanillaChangeOption() {
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<select>
    <option>JQUERY</option>
    <option>VANILLA</option>
    </select>`
  );
  document.querySelector("#vanilla select").addEventListener("change", () => {
    document.querySelector("#vanilla > p").textContent =
      "VANILLA SELECTOR HAS CHANGED";
  });
}

function vanillaMousePosition() {
  document.querySelector("#vanilla").addEventListener("mouseover", () => {
    document.querySelector("#vanilla").style.border = "2px solid red";
  });
}

function vanillaChecked() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", `<input type= "checkbox">`);
  document
    .querySelector("#vanilla [type='checkbox']")
    .addEventListener("change", () => {
      if (document.querySelector("#vanilla [type='checkbox']").checked) {
        document.querySelector("#vanilla > p").textContent = "CHECKED";
      } else {
        document.querySelector("#vanilla > p").textContent = "UNCHECKED";
      }
    });
}

function vanillaLiClicked() {
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<ul>
    <li>1</li>
    <li>2</li>
    <li>3</li>
    </ul>`
  );
  document.querySelectorAll("#vanilla ul li").forEach((li) => {
    li.addEventListener("click", (e) => {
      document.querySelector("#vanilla p").textContent = e.target.textContent;
    });
  });
}

function vanillaCreateHTML() {}

function vanillaRemove() {}

function vanillaAppend() {}

function vanillaPrepend() {}

function vanillaCreateAfter() {}

function vanillaCreateBefore() {}

function vanillaClone() {}

function vanillaAddClass() {}

function vanillaRemoveClass() {}

function vanillaToggle() {}

function vanillaAddDisabled() {}

function vanillaRemoveDisabled() {}

function vanillaDataSrc() {}

function vanillaRemoveSrc() {}

function vanillaHide() {}

function vanillaShow() {}

function vanillaFadeIn() {}

function vanillaFadeOut() {}

function vanillaIterateElements() {}

function vanillaGetParent() {}

function vanillaGetChildren() {}

function vanillaClassElements() {}

function vanillaItemId() {}

function vanillaDisplayElements() {}

function vanillaGetOptions() {}

function vanillaChangeHref() {}

function vanillaInputAlert() {}

function vanillaRemoveItems() {}

function vanillaAnimate() {}

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
  vanillaLiClicked,
  vanillaCreateHTML,
  vanillaRemove,
  vanillaAppend,
  vanillaPrepend,
  vanillaCreateAfter,
  vanillaCreateBefore,
  vanillaClone,
  vanillaAddClass,
  vanillaRemoveClass,
  vanillaToggle,
  vanillaAddDisabled,
  vanillaRemoveDisabled,
  vanillaDataSrc,
  vanillaRemoveSrc,
  vanillaHide,
  vanillaShow,
  vanillaFadeIn,
  vanillaFadeOut,
  vanillaIterateElements,
  vanillaGetParent,
  vanillaGetChildren,
  vanillaClassElements,
  vanillaItemId,
  vanillaDisplayElements,
  vanillaGetOptions,
  vanillaChangeHref,
  vanillaInputAlert,
  vanillaRemoveItems,
  vanillaAnimate,
};
