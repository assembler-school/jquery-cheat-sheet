function moveItem(e) {
  target = e.target;
  if (target.parentNode.id !== "dropzone") {
    target.parentNode.removeChild(target);
    document.getElementById("dropzone").appendChild(target);
    dropzoneOut();
  } else {
    target.parentNode.removeChild(target);
    document.getElementById(target.dataset.type).appendChild(target);
  }
}

function dropzoneIn() {
  let middle = document.getElementById("middle");
  middle.style.transform = "translateX(100px)";
  middle.style.opacity = 0;
  setTimeout(() => {
    middle.style.display = "none";
  }, 1000);
}

function dropzoneOut() {
  document.getElementById("bottom").innerHTML = "";
  setTimeout(() => {
    let middle = document.getElementById("middle");
    middle.style.display = "flex";
    setTimeout(() => {
      middle.style.transform = "translateX(0px)";
      middle.style.opacity = 1;
    }, 1000);
  }, 1000);
}
