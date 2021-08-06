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
    selectedoOjectsJS.push(findObjectsJS(id));
    selectedObjectsJQ.push(findObjectsJQ(id));
  }
  return objects;
}
