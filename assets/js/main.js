const eventFunctions = {
    hasLoaded: {js: hasLoadedJS, jquery: hasLoadedJQuery}
};

(function initialize() {
    $(".close").on('click', _ => {
        hideModal();
    });

    window.onclick = (event) => {
        if (event.target === $("#modal")[0]) {
            hideModal();
        }
    };

    $('li a').each((elementIndex, element) => {
        $(element).on("click", openModal);
    });

    $('.btn-group').on('click', '.btn', (e) => {
        $(e.target.parentElement).prop('disabled', true).siblings().prop('disabled', false);
    });
}())



function hideModal() {
    $("#modal").hide();
    $('#js-btn').prop('disabled', true);
    $('#jq-btn').prop('disabled', false);
}
function showModal() {
    $("#modal").show();
}

function openModal(event) {
    let functionName = event.target.getAttribute('data-functionName');
    if (functionName && eventFunctions.hasOwnProperty(functionName)) {
        showModal();
        eventFunctions[functionName]['js']();
    }

}