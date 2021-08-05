for (const item of document.getElementsByClassName("item")) {
  item.addEventListener("click", moveItem);
}

document.getElementById("beginButton").addEventListener("click", function () {
  if (document.getElementById("dropzone").lastChild.className === "item") {
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

function createInfoBox(ids) {
  for (const id of ids) {
    let infoJS =
      //*Template of the slide
      `<template id="box-${id}">
    <div id="info-${id}" class="flex info"></div>
  </template>`;
    let toInsertInfo = document.getElementById("bottom"); //*Select were insert template, in html
    toInsertInfo.insertAdjacentHTML("beforeend", infoJS); //*insert only read teamplate (aka Ghost Template)
    let contentTemplate = document.getElementById(`box-${id}`).content; //*select the ghost template
    let copyContent = document.importNode(contentTemplate, true); //*import ghost template as html (as html)
    toInsertInfo.lastChild.remove(); //* delete ghost Template
    toInsertInfo.appendChild(copyContent); ////*insert  ghost template (now in the living world!!)
  }
}

function fillObjectsJS(objectsJS) {
  for (const objectJS of objectsJS) {
    let infoJS =
      //*Template of the slide
      `<template id="infoJS-${objectJS.id}">
      <div id="javaScript-${objectJS.id}" class="box javaScript">
        <div class="title">
          <h3>JAVASCRIPT</h3>
        </div>
        <div id="textJS-${objectJS.id}" class="boxText">
          <div class="info-JS" id="infoDiv-${objectJS.id}">
            <h4 id="infoTitle-${objectJS.id}">${objectJS.title}</h4>
            <p>
            ${objectJS.code}
            </p>
          </div>
        </div>
        <div>
          <button type="button" id="infoJsButton-${objectJS.id}" class="button">
            +Info
          </button>
          <button type="button" id="tryJsButton-${objectJS.id}" class="button">
            Try!
          </button>
        </div>
      </div>
      </template>`;
    console.log(`${objectJS.id}`);
    let toInsertInfo = document.getElementById(`info-${objectJS.id}`); //*Select were insert template, in html
    toInsertInfo.insertAdjacentHTML("beforeend", infoJS); //*insert only read teamplate (aka Ghost Template)
    let contentTemplate = document.getElementById(
      `infoJS-${objectJS.id}`
    ).content; //*select the ghost template
    let copyContent = document.importNode(contentTemplate, true); //*import ghost template as html (as html)
    toInsertInfo.innerHTML = ""; //* delete ghost Template
    toInsertInfo.appendChild(copyContent); ////*insert  ghost template (now in the living world!!)
    document
      .getElementById(`infoJsButton-${objectJS.id}`)
      .addEventListener("click", function () {
        location.assign(objectJS.link);
      });
    document
      .getElementById(`tryJsButton-${objectJS.id}`)
      .addEventListener("click", function () {
        alert(objectJS.code);
      });
  }
}

function fillObjectsJQ(objectsJQ) {
  for (const objectJQ of objectsJQ) {
    let infoJQ =
      //*Template of the slide
      `<template id="infoJQ-${objectJQ.id}">
  <div id="jQuery-${objectJQ.id}" class="box jQuery">
    <div class="title">
      <h3>JQUERY</h3>
    </div>
    <div id="textJQ-${objectJQ.id}" class="boxText">
      <div class="info-JQ" id="infoDiv-${objectJQ.id}">
        <h4 id="infoTitle-${objectJQ.id}">${objectJQ.title}</h4>
        <p>
        ${objectJQ.code}
        </p>
      </div>
    </div>
    <div>
      <button type="button" id="infoJqButton-${objectJQ.id}" class="button">
        +Info
      </button>
      <button type="button" id="tryJqButton-${objectJQ.id}" class="button">
        Try!
      </button>
    </div>
  </div>

</template>`;
    let toInsertInfo = document.getElementById(`info-${objectJQ.id}`); //*Select were insert template, in html
    toInsertInfo.insertAdjacentHTML("beforeend", infoJQ); //*insert only read teamplate (aka Ghost Template)
    let contentTemplate = document.getElementById(
      `infoJQ-${objectJQ.id}`
    ).content; //*select the ghost template
    let copyContent = document.importNode(contentTemplate, true); //*import ghost template as html (as html)
    toInsertInfo.appendChild(copyContent); ////*insert  ghost template (now in the living world!!)
    document
      .getElementById(`infoJsButton-${objectJQ.id}`)
      .addEventListener("click", function () {
        location.assign(objectJQ.link);
      });
    document
      .getElementById(`tryJsButton-${objectJQ.id}`)
      .addEventListener("click", function () {
        alert(objectJQ.code);
      });
  }
}

function fillInfoCamps(ids) {
  findObjects(ids);
  document.getElementById("bottom").innerHTML = "";
  createInfoBox(ids);
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
  /*  let bottom = document.getElementById("bottom");
  bottom.style.display = "flex";
  setTimeout(() => {
    bottom.style.transform = "translateX(0px)";
    bottom.style.opacity = 1;
  }, 2000); */
}

function dropzoneOut() {
  /* let bottom = document.getElementById("bottom");
  bottom.style.transform = "translateX(-100px)";
  bottom.style.opacity = 0; */
  setTimeout(() => {
    /*  bottom.style.display = ""; */
    let middle = document.getElementById("middle");
    middle.style.display = "flex";
    setTimeout(() => {
      middle.style.transform = "translateX(0px)";
      middle.style.opacity = 1;
    }, 1000);
  }, 1000);
}
