document.addEventListener("drag", function (event) {}, false);

document.addEventListener(
  "dragstart",
  function (event) {
    event.target.style.opacity = 0.5;

    document.getElementById("bottom").style.transform = "translateX(100px)";
    document.getElementById("bottom").style.opacity = 0;
    setTimeout(() => {
      document.getElementById("bottom").style.display = "none";
      document.getElementById("middle").style.display = "flex";
      setTimeout(() => {
        document.getElementById("middle").style.transform = "translateX(0px)";
        document.getElementById("middle").style.opacity = 1;
      }, 1000);
    }, 1000);
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    // reset the transparency
    event.target.style.opacity = "";
  },
  false
);

/* events fired on the drop targets */
document.addEventListener(
  "dragover",
  function (event) {
    // prevent default to allow drop
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    // highlight potential drop target when the draggable element enters it
    if (event.target.className === "col drop-area") {
      event.target.style.opacity = "0.4"; //!añadir efecto (parpadeo/)
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    // reset background of potential drop target when the draggable element leaves it
    if (event.target.className === "col drop-area") {
      event.target.style.opacity = "1";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    // prevent default action (open as link for some elements)
    event.preventDefault();
    // move dragged elem to the selected drop target
    if (event.target.className === "col drop-area") {
      event.target.style.opacity = "1";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    } //!añadir boton de borrar para que vuelva a su columna
  },
  false
);
