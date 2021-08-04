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

function vanillaCreateHTML() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla").addEventListener("click", () => {
    let p = document.createElement("p");
    p.textContent = "CREATED ELEMENT";
    document.querySelector("#vanilla").appendChild(p);
    document.querySelector("#vanilla").firstChild.remove();
  });
}

function vanillaRemove() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla > p").addEventListener("click", () => {
    document.querySelector("#vanilla > p").remove();
  });
}

function vanillaAppend() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    if (document.querySelectorAll("#vanilla p").length == 1) {
      let newElement = document.createElement("p");
      newElement.textContent = "APPENDED ELEMENT TO DIV";
      document.querySelector("#vanilla").appendChild(newElement);
    }
  });
}

function vanillaPrepend() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    if (document.querySelectorAll("#vanilla p").length == 1) {
      document
        .querySelector("#vanilla")
        .insertAdjacentHTML("afterbegin", "<p>PREPENDED ELEMENT TO DIV</p>");
    }
  });
}

function vanillaCreateAfter() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    if (document.querySelectorAll("#vanilla p").length == 1) {
      document
        .querySelector("#vanilla p")
        .insertAdjacentHTML("afterend", "<p>ADDED ELEMENT AFTER P</p>");
    }
  });
}

function vanillaCreateBefore() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    if (document.querySelectorAll("#vanilla p").length == 1) {
      document
        .querySelector("#vanilla p")
        .insertAdjacentHTML("beforebegin", "<p>ADDED ELEMENT BEFORE P</p>");
    }
  });
}

function vanillaClone() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    if (document.querySelectorAll("#vanilla p").length == 1) {
      let newElement = document.querySelector("#vanilla > p").cloneNode(true);
      document.querySelector("#vanilla").appendChild(newElement);
    }
  });
}

function vanillaAddClass() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelector("#vanilla p").classList.add("new-class");
  });
}

function vanillaRemoveClass() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").classList.add("new-class");
  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelector("#vanilla p").classList.remove("new-class");
  });
}

function vanillaToggle() {
  document.querySelector("#vanilla > p").textContent = "VANILLA CLICK ME";
  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelector("#vanilla p").classList.toggle("new-class");
  });
}

function vanillaAddDisabled() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", "<button>CLICK TO DISABLE</button>");

  document.querySelector("#vanilla button").addEventListener("click", () => {
    document.querySelector("#vanilla button").setAttribute("disabled", true);
  });
}

function vanillaRemoveDisabled() {
  document.querySelector("#vanilla p").textContent = "CLICK TO ENABLE";
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", "<button disabled>BUTTON</button>");

  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelector("#vanilla button").removeAttribute("disabled");
  });
}

function vanillaDataSrc() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SET DATA-SRC";
  let newElement = document.createElement("img");
  document.querySelector("#vanilla").appendChild(newElement);

  document.querySelector("#vanilla p").addEventListener("click", () => {
    newElement.setAttribute("data-src", "new-data");
  });
}

function vanillaRemoveSrc() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SET DATA-SRC";
  let newElement = document.createElement("img");
  newElement.setAttribute("data-src", "new-data");

  document.querySelector("#vanilla").appendChild(newElement);

  document.querySelector("#vanilla p").addEventListener("click", () => {
    newElement.removeAttribute("data-src");
  });
}

function vanillaHide() {
  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelector("#vanilla p").style.display = "none";
  });
}

function vanillaShow() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SHOW";
  let newElement = document.createElement("p");
  document.querySelector("#vanilla").appendChild(newElement);
  newElement.textContent = "VISIBLE";
  newElement.style.display = "none";
  document.querySelector("#vanilla > p").addEventListener("click", () => {
    newElement.style.display = "block";
  });
}

function vanillaFadeIn() {
  document.querySelector("#vanilla > p").textContent = "Not working on Vanilla";
}

function vanillaFadeOut() {
  document.querySelector("#vanilla > p").textContent = "Not working on Vanilla";
}

function vanillaIterateElements() {
  document.querySelector("#vanilla").appendChild(document.createElement("h3"));
  document.querySelector("#vanilla").appendChild(document.createElement("h3"));
  document.querySelectorAll("#vanilla h3").forEach((h3) => {
    h3.textContent = "ITERATED";
    h3.style.color = "teal";
  });
}

function vanillaGetParent() {
  console.log(document.querySelector("#vanilla p").parentNode);
}

function vanillaGetChildren() {
  console.log(document.querySelector("#vanilla").childNodes);
}

function vanillaClassElements() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML(
      "beforeend",
      "<p class='vanilla-class'>NEW</p><p class='vanilla-class'>NEW</p>"
    );
  document.querySelectorAll("#vanilla .vanilla-class").forEach((newClass) => {
    newClass.style.fontWeight = "700";
  });
}

function vanillaItemId() {
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", "<p id='vanilla-p'>NEW</p>");
  document.querySelector("#vanilla-p").style.fontWeight = "700";
}

function vanillaDisplayElements() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SHOW";
  document
    .querySelector("#vanilla")
    .insertAdjacentHTML(
      "beforeend",
      "<p class='vanilla-class'>VISIBLE</p><p class='vanilla-class'>VISIBLE</p>"
    );
  document.querySelectorAll(".vanilla-class").forEach((p) => {
    p.style.display = "none";
  });

  document.querySelector("#vanilla > p").addEventListener("click", () => {
    document.querySelectorAll(".vanilla-class").forEach((p) => {
      p.style.display = "block";
      p.style.color = "teal";
    });
  });
}

function vanillaGetOptions() {
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<select>
    <option>VANILLA</option>
    <option>JQUERY</option>
    </select>`
  );
  document.querySelector("#vanilla select").addEventListener("change", () => {
    document.querySelector("#vanilla > p").textContent =
      document.querySelector("#vanilla select").value;
  });
}

function vanillaChangeHref() {
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<a href="before-change">VANILLA</a>
    <a href="before-change">JQUERY</a>`
  );
  document
    .querySelectorAll("#vanilla a")[0]
    .setAttribute("href", "after-change");
}

function vanillaInputAlert() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SHOW";

  document
    .querySelector("#vanilla")
    .insertAdjacentHTML("beforeend", `<input type="text">`);
  document.querySelector("#vanilla p").addEventListener("click", () => {
    alert(document.querySelector("#vanilla input").value);
  });
}

function vanillaRemoveItems() {
  document.querySelector("#vanilla p").textContent = "CLICK TO SHOW";
  document.querySelector("#vanilla").insertAdjacentHTML(
    "beforeend",
    `<a href="before-change">VANILLA</a>
    <a href="before-change">JQUERY</a>`
  );
  document.querySelector("#vanilla p").addEventListener("click", () => {
    document.querySelectorAll("#vanilla a").forEach((a) => {
      a.remove();
    });
  });
}

function vanillaAnimate() {
  setTimeout(() => {
    document.querySelector("#vanilla p").style.fontSize = "2rem";
  }, 2000);
}

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
