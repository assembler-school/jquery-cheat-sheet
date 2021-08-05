function fillInfoCamps(ids) {
  findObjects(ids);
  document.getElementById("bottom").innerHTML = "";
  createInfoBox(ids);
  fillObjectsJS(findObjects(ids)[findObjects(ids).length - 1].objectsJS);
  fillObjectsJQ(findObjects(ids)[findObjects(ids).length - 1].objectsJQ);
}

function findObjectsJS(id) {
  let objectsJS = JSON.parse(localStorage.getItem("objectsJS"));
  for (const objectJS of objectsJS) {
    if (objectJS.id === id) {
      return objectJS;
    }
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
