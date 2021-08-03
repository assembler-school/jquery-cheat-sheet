for (const item of document.getElementsByClassName("item")) {
  item.addEventListener("click", moveItem);
}

document.getElementById("beginButton").addEventListener("click", function (e) {
  if (e.target.parentNode.lastChild.className === "item") {
    saveSelection();
    dropzoneIn();
  }
});

function saveSelection() {
  let selectedIds = [];
  let selection = document.querySelectorAll("#dropzone .item");
  for (const item of selection) {
    selectedIds.push(item.dataset.id);
    item.parentNode.removeChild(item);
    document.getElementById(item.dataset.type).appendChild(item);
  }
  storageSelection(selectedIds);
}

function storageSelection(selectedIds) {
  if (!sessionStorage.getItem("sessionSelection")) {
    let ids = [];
    ids.push(selectedIds);
    sessionStorage.setItem("sessionSelection", JSON.stringify(ids));
  } else {
    let sessionSelection = JSON.parse(
      sessionStorage.getItem("sessionSelection")
    );
    sessionSelection.push(selectedIds);
    sessionStorage.setItem(
      "sessionSelection",
      JSON.stringify(sessionSelection)
    );
  }
  fillInfoCamps(selectedIds);
}

function findObjects(ids) {
  let examples = [];
  let objectsJS = [];
  let objectsJQ = [];

  for (const id of ids) {
    examples.push(findExamples(id));
    objectsJS.push(findObjectsJS(id));
    objectsJQ.push(findObjectsJQ(id));
  }
  return examples, objectsJS, objectsJQ;
}

function fillExamples(examples) {
  let exampleBox = document.getElementById("examples");
  for (const example of examples) {
    let exampleContent = document.createElement("p");
    exampleContent.innerHTML = example.code;
    exampleBox.appendChild(exampleContent);
  }
}

function fillObjectsJS(objectsJS) {
  let objectJSBox = document.getElementById("javaScript");
  for (const objectJS of objectsJS) {
    let objectJSContent = document.createElement("p");
    objectJSContent.innerHTML = objectJS.code;
    objectJSBox.appendChild(objectJSContent);
  }
}

function fillObjectsJQ(objectsJQ) {
  //!pasar a JQ!!!!!!
  let objectJQBox = document.getElementById("jQuery");
  for (const objectJQ of objectsJQ) {
    let objectJQContent = document.createElement("p");
    objectJQContent.innerHTML = objectJQ.code;
    objectJQBox.appendChild(objectJQContent);
  }
}

function fillInfoCamps(ids) {
  findObjects(ids);
  fillExamples(examples);
  fillObjectsJS(objectsJS);
  fillObjectsJQ(objectsJQ);
}
function findExamples(id) {
  let examples = JSON.parse(localStorage.getItem("examples"));
  for (const example of examples) {
    if (example.id === id) {
      return example;
    }
  }
}

function findObjectsJQ(id) {
  //! PASAR A JQ !!!!!
  let objectsJQ = JSON.parse(localStorage.getItem("objectsJQ"));
  for (const objectJQ of objectsJQ) {
    if (objectJQ.id === id) {
      return objectJQ;
    }
  }
}

function findObjectsJS(id) {
  let objectsJS = JSON.parse(localStorage.getItem("objectsJS"));
  for (const objectJS of objectsJS) {
    if (objectJS.id === id) {
      return objectJS;
    }
  }
}

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
  let bottom = document.getElementById("bottom");
  bottom.style.display = "flex";
  setTimeout(() => {
    bottom.style.transform = "translateX(0px)";
    bottom.style.opacity = 1;
  }, 2000);
}

function dropzoneOut() {
  let bottom = document.getElementById("bottom");
  bottom.style.transform = "translateX(-100px)";
  bottom.style.opacity = 0;
  setTimeout(() => {
    bottom.style.display = "none";
    let middle = document.getElementById("middle");
    middle.style.display = "flex";
    setTimeout(() => {
      middle.style.transform = "translateX(0px)";
      middle.style.opacity = 1;
    }, 1000);
  }, 1000);
}
