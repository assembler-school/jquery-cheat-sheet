for (const item of document.getElementsByClassName("item")) {
  item.addEventListener("click", moveItem);
}

document.getElementById("beginButton").addEventListener("click", function () {
  if (document.getElementById("dropzone").lastChild.className === "item") {
    saveSelection();
    dropzoneIn();
  }
});

document.getElementById("closeModal").addEventListener("click", function () {
  document.getElementById("popup").style.display = "none";
});

document.addEventListener(
  "drag",
  function () {
    let dropzone = document.getElementById("dropzone");
    dropzone.style.transform = "scale(1.1)";
    dropzone.style.borderboxor = "fuchsia";
    dropzone.style.boxShadow = "0 0 2rem fuchsia";
  },
  false
);

document.addEventListener(
  "dragstart",
  function (event) {
    dragged = event.target;
    event.target.style.opacity = 0.5;
    dropzoneOut();
  },
  false
);

document.addEventListener(
  "dragend",
  function (event) {
    let dropzone = document.getElementById("dropzone");
    dropzone.style.transform = "scale(1.0)";
    dropzone.style.borderboxor = "";
    dropzone.style.boxShadow = "";
    event.target.style.opacity = "";
  },
  false
);

document.addEventListener(
  "dragover",
  function (event) {
    event.preventDefault();
  },
  false
);

document.addEventListener(
  "dragenter",
  function (event) {
    if (event.target.className === "box drop-area") {
      event.target.style.opacity = "0.4";
    }
  },
  false
);

document.addEventListener(
  "dragleave",
  function (event) {
    if (event.target.className === "box drop-area") {
      event.target.style.opacity = "1";
    }
  },
  false
);

document.addEventListener(
  "drop",
  function (event) {
    event.preventDefault();
    if (event.target.className === "box drop-area") {
      event.target.style.opacity = "1";
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    } else {
      dragged.parentNode.removeChild(dragged);
      document.getElementById(dragged.dataset.type).appendChild(dragged);
    }
  },
  false
);
