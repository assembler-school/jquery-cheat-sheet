const modalSection = $("#modal-section");
const modalContent = $("#modal-content");
const exampleFunctions = {
  events01: loadedDom,
  events02: itemClicked,
  events03: itemDoubleClicked,
  events04: pressedKey
};

function loadedDom() {
  loadedDomV();
  loadedDomJQ();
}
function itemClicked() {
  itemClickedV();
  itemClickedJQ();
}
function itemDoubleClicked() {
  itemDoubleClickedV();
  itemDoubleClickedJQ();
}

function pressedKey() {
  pressedKeyV();
  pressedKeyJQ();
}

function showVanillaDemoBox() {
  $('.demo.jquery').addClass('hidden');
  $('.demo.vanilla').removeClass('hidden');
}
function showJQueryDemoBox() {
  $('.demo.vanilla').addClass('hidden');
  $('.demo.jquery').removeClass('hidden');
}

(function init() {
  document.onkeyup = e => {
      if ((e.key === "Escape") && $('#modal-section').is(":visible")) {
          closeFunctionSheet();
      }
  };
  $("li").each((elementIndex, element) => {
    $(element).on("click", loadFunctionSheet);
  });
  $('#vanilla-switch').on('click', showVanillaDemoBox);
  $('#jquery-switch').on('click', showJQueryDemoBox);
}());

function modalStopPropagation(event) {
  event.stopPropagation();
}

function loadFunctionSheet(e) {
  let functionName = $(e.target).data('function');
    if (functionName && exampleFunctions.hasOwnProperty(functionName)) {
        let title = e.target.text;
        $('.modal-title').text(title);
        exampleFunctions[functionName]();
        showVanillaDemoBox();
        showModal();
    }
}

function showModal() {
  $(".modal-button.fa-window-close").on("click", closeFunctionSheet);
  modalSection.removeClass('hidden').on("click", closeFunctionSheet);
  modalContent.on("click", modalStopPropagation);
}

function closeFunctionSheet() {
  hideModal();
  $('#vanillaCode').text = '';
  $('#jqueryCode').text = '';
  $('#vanillaTry').empty();
  $('#jqueryTry').empty();
}

function hideModal() {
  $(".modal-button.fa-window-close").off("click");
  modalSection.addClass('hidden').off("click");
  modalContent.off("click", modalStopPropagation);
}
