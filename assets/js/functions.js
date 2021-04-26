//Add template and update template
function addNewTemplate(containerId, templateId) {
  const templateContent = document.querySelector("#" + templateId).content;
  document
    .getElementById(containerId)
    .appendChild(document.importNode(templateContent, true));
}

function updateTemplate(previousStep, containerId, templateId) {
  $("#" + previousStep).remove();
  addNewTemplate(containerId, templateId);
}

//Open modal
function openModal(modalId) {
  const templateContent = document.querySelector("#" + modalId).content;
  document
    .getElementById("main")
    .appendChild(document.importNode(templateContent, true));
  $(".main-content").css({ filter: "blur(5px)" });
  $("aside").css({ filter: "blur(5px)" });
  $(".modal-bg").click(() => {
    closeModal();
  });
  $(".modal-close").click(() => {
    closeModal();
  });
}

function closeModal(modalId) {
  console.log("-");
  $("#modal").remove();
  $("#modal-box").remove();
  $(".main-content").css({ filter: "blur(0px)" });
  $("aside").css({ filter: "blur(0px)" });
}
