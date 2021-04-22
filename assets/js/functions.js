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
