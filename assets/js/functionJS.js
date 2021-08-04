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
  let selectedExamples = [];
  let selectedoOjectsJS = [];
  let selectedObjectsJQ = [];
  let objects = [
    {
      examples: selectedExamples,
      objectsJS: selectedoOjectsJS,
      objectsJQ: selectedObjectsJQ,
    },
  ];

  for (const id of ids) {
    selectedExamples.push(findExamples(id));
    selectedoOjectsJS.push(findObjectsJS(id));
    selectedObjectsJQ.push(findObjectsJQ(id));
  }
  return objects;
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
  for (const objectJS of objectsJS) {
    let infoJS =
      //*Template of the slide
      `<template id=infoJS><div class=" info-JS" id="infoDiv"> 
        <h4 id="infoTitle">${objectJS.title}</h4>
        <code> ${objectJS.code}</code> 
    </div></template>`;
    let toInsertInfo = document.getElementById("textJS"); //*Select were insert template, in html
    toInsertInfo.insertAdjacentHTML("beforeend", infoJS); //*insert only read teamplate (aka Ghost Template)
    let contentTemplate = document.getElementById("infoJS").content; //*select the ghost template
    let copyContent = document.importNode(contentTemplate, true); //*import ghost template as html (as html)
    toInsertInfo.innerHTML = ""; //* delete ghost Template
    toInsertInfo.appendChild(copyContent); ////*insert  ghost template (now in the living world!!)
    document
      .getElementById("infoJsButton")
      .addEventListener("click", function () {
        location.assign(objectJS.link);
      });
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
  fillObjectsJS(findObjects(ids)[findObjects(ids).length - 1].objectsJS);
  fillObjectsJQ(findObjects(ids)[findObjects(ids).length - 1].objectsJQ);
}
function findExamples(id) {
  let examplesBox = JSON.parse(localStorage.getItem("examples"));
  for (const example of examplesBox) {
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
    bottom.style.display = "";
    let middle = document.getElementById("middle");
    middle.style.display = "flex";
    setTimeout(() => {
      middle.style.transform = "translateX(0px)";
      middle.style.opacity = 1;
    }, 1000);
  }, 1000);
}
