function drawItems() {
  let items = JSON.parse(localStorage.getItem("objectsJS"));
  for (const item of items) {
    let div = document.createElement("div");
    $(div)
      .addClass("item")
      .html(item.title)
      .attr("draggable", "true")
      .attr("data-id", item.id)
      .attr("data-type", item.type)
      .appendTo($(`#${item.type}`));
  }
}
function findObjectsJQ(id) {
  let objectsJQ = JSON.parse(localStorage.getItem("objectsJQ"));
  for (const objectJQ of objectsJQ) {
    if (objectJQ.id === id) {
      return objectJQ;
    }
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
    let toInsertInfo = document.querySelector(`#info-${objectJQ.id}`); //*Select were insert template, in html
    toInsertInfo.insertAdjacentHTML("beforeend", infoJQ); //*insert only read teamplate (aka Ghost Template)
    let contentTemplate = document.querySelector(
      `#infoJQ-${objectJQ.id}`
    ).content; //*select the ghost template
    let copyContent = document.importNode(contentTemplate, true); //*import ghost template as html (as html)
    toInsertInfo.appendChild(copyContent); ////*insert  ghost template (now in the living world!!)
    $(`#infoJsButton-${objectJQ.id}`).click(function () {
      location.assign(objectJQ.link);
    });
    $(`#tryJsButton-${objectJQ.id}`).click(function () {
      alert(objectJQ.code);
    });
  }
}
