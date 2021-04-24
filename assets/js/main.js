const exerciseFunctions = {
    hasLoaded: {js: hasLoadedJS, jquery: hasLoadedJQuery},
    hasElementClicked: {js: hasElementClickedJS, jquery: hasElementClickedJQuery},
    hasElementDoubleClicked: {js: hasElementDoubleClickedJS, jquery: hasElementDoubleClickedJQuery},
    onKeyPress: {js: onKeyPressJS, jquery: onKeyPressJQuery},
    onMouseMoving: {js: onMouseMovingJS, jquery: onMouseMovingJQuery},
    changeInput: {js: changeInputJS, jquery: changeInputJQuery},
    imageLoaded: {js: imageLoadedJS, jquery: imageLoadedJQuery},
    imageFailLoading: {js: imageFailLoadingJS, jquery: imageFailLoadingJQuery}
};

(function initialize() {
    $(".close").on('click', hideModal);

    window.onclick = (event) => {
        if (event.target === $("#modal")[0]) {
            hideModal();
        }
    };
    document.onkeyup = e => {
        if ((e.key === "Escape") && $('.modal').is(":visible")) {
            hideModal();
        }
    };

    $('li > a').each((elementIndex, element) => {
        $(element).on("click", openModal);
    });

    $('.btn-group').on('click', '.btn', (e) => {
        $(e.target.parentElement).prop('disabled', true).siblings().prop('disabled', false);
    });
}())
function cleanCodebox() {
    $('#js-codebox').empty();
    $('#example-codebox').empty();
    document.removeEventListener("keypress", keypressJS);
    $(document).off('keypress');
    document.removeEventListener('mousemove', mouseMove);
    $(document).off('mousemove');
}
function hideModal() {
    cleanCodebox();
    $("#modal").hide();
    $('#js-btn').prop('disabled', true).off();
    $('#jq-btn').prop('disabled', false).off();
}

function showModal() {
    $("#modal").show();
}

function callExerciseFunction(functionName, type) {
    cleanCodebox();
    exerciseFunctions[functionName][type]();
}

function bindButtons(functionName, title) {
    $('#js-btn').on('click', _ => {
        if (!$('#js-btn').is('[disabled=""]')) {
            callExerciseFunction(functionName, 'js');
            $('.js-header').text('JS Vanilla: ' + title);
        }
    });
    $('#jq-btn').on('click', _ => {
        if (!$('#jq-btn').is('[disabled=""]')) {
            callExerciseFunction(functionName, 'jquery');
            $('.js-header').text('JS + JQuery: ' + title);
        }
    });
}

function openModal(event) {
    let functionName = $(event.target).data('functionname');
    if (functionName && exerciseFunctions.hasOwnProperty(functionName)) {
        showModal();
        let title = event.target.text;
        bindButtons(functionName, title);
        $('.js-header').text('JS Vanilla: ' + title);
        exerciseFunctions[functionName]['js']();
    }
}