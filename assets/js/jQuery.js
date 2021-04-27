function loadedDomJQ() {
    $('#vanillaCode').text = '';
    let codeElement = $('<code>', {text: "$(document).ready(e => {"
            +"\n\t// document is loaded and DOM is ready\n\talert('document is ready');\n});"});
    $('#jQueryTryBtn').append(codeElement);
}

function itemClickedJQ() {
    $('#jqueryCode').text('tryButton.on(\'click\', NoticeButtonClicked);');
    function TryItemClickV() {
        let tryMessage = $('<p>\'Try me!\' button clicked</p>');
        jqueryTryBox.append(tryMessage);
    }
    let tryButton = $('<button>Try me!</button>').on('click', TryItemClickV);
    let jqueryTryBox = $('#jqueryTry');
    jqueryTryBox.append(tryButton);
}

function itemDoubleClickedJQ() {
    $('#jqueryCode').text('tryButton.on(\'dblclick\', NoticeButtonDoubleClicked);');
    function TryDoubleItemClickV() {
        let tryMessage = $('<p>\'Try me!\' button double clicked</p>');
        jqueryTryBox.append(tryMessage);
    }
    let tryButton = $('<button>Try me!</button>').on('dblclick', TryDoubleItemClickV);
    let jqueryTryBox = $('#jqueryTry');
    jqueryTryBox.append(tryButton);
}

function checkPressedKeyJQ(e) {
    if (!$('#jqueryTry').is(':empty') && $('.demo.jquery').is(":visible")) {
        let tryMessage = $('<p>' + e.key.toUpperCase() + ' key pressed</p>');
        $('#jqueryTry').append(tryMessage);
    } else {
        $(document).off('keypress', checkPressedKeyJQ);
    }
}

function pressedKeyJQ() {
    $('#jqueryCode').text('tryButton.on(\'click\', NoticePressedKey);');
    function TryPressedKeyJQ() {
        $(document).on('keypress', checkPressedKeyJQ);
    }
    let tryButton = $('<button>Try me!</button>').on('click', TryPressedKeyJQ);
    $('#jqueryTry').append(tryButton);
}