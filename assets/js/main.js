const exerciseFunctions = {
    hasLoaded: {js: hasLoadedJS, jquery: hasLoadedJQuery},
    hasElementClicked: {js: hasElementClickedJS, jquery: hasElementClickedJQuery},
    hasElementDoubleClicked: {js: hasElementDoubleClickedJS, jquery: hasElementDoubleClickedJQuery},
    onKeyPress: {js: onKeyPressJS, jquery: onKeyPressJQuery},
    onMouseMoving: {js: onMouseMovingJS, jquery: onMouseMovingJQuery},
    changeInput: {js: changeInputJS, jquery: changeInputJQuery},
    imageLoaded: {js: imageLoadedJS, jquery: imageLoadedJQuery},
    imageFailLoading: {js: imageFailLoadingJS, jquery: imageFailLoadingJQuery},
    formSubmitted: {js: formSubmittedJS, jquery: formSubmittedJQuery},
    optionChanged: {js: optionChangedJS, jquery: optionChangedJQuery},
    mouseoverElement: {js: mouseoverElementJS, jquery: mouseoverElementJQuery},
    checkboxChanges: {js: checkboxChangesJS, jquery: checkboxChangesJQuery},
    ulItemClicked: {js: ulItemClickedJS, jquery: ulItemClickedJQuery},
    createHtmlElement: {js: createHtmlElementJS, jquery: createHtmlElementJQuery},
    removeHtmlElement: {js: removeHtmlElementJS, jquery: removeHtmlElementJQuery},
    fadeInHtmlElement: {js: fadeInHtmlElementJS, jquery: fadeInHtmlElementJQuery},
    fadeOutHtmlElement: {js: fadeOutHtmlElementJS, jquery: fadeOutHtmlElementJQuery},
    iterateCollectionExample: {js: iterateCollectionExampleJS, jquery: iterateCollectionExampleJQuery},
    selectorPropertyNone: {js: selectorPropertyNoneJS, jquery: selectorPropertyNoneJQuery},
    removeAllItems: {js: removeAllItemsJS, jquery: removeAllItemsJQuery},
    animateHeader: {js: animateHeaderJS, jquery: animateHeaderJQuery}
};

(function initialize() {
    document.addEventListener("DOMContentLoaded", _ => {
        setTimeout(_ => {
            document
                .querySelector('.main-header')
                .animate(
                    [
                        { transform: "translateX(0px)" },
                        { transform: "translateX(50px)" },
                        { transform: "translateX(0px)" },
                    ],
                    {
                        duration: 1200,
                        iterations: 1,
                    }
                );
        }, 2000);
    });
    $(document).ready(function () {
        $(".main-header").css("opacity", 0);
        setTimeout(() => {
            $(".main-header").animate({ opacity: 1}, 200);
        }, 2000);
    });
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