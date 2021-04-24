function hasLoadedJQuery() {
    let codeElement = $('<code>', {text: "$(document).ready(_ => {"
            +"\n\t// document is loaded and DOM is ready\n\talert('document is ready');\n});"});
    $('#js-codebox').append(codeElement);
}

function hasElementClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('click', (event) => {"
            +"\n\t//your function\n}"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn = $('<button>Click me!</button>').on('click', _ => {
        $('#example-codebox>p')?.remove();
        $('#example-codebox').append($('<p>', {text: `Button has been clicked at ${new Date().toLocaleString()}`}));
    });
    $('#example-codebox').append(clickMeBtn);
}

function hasElementDoubleClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('dblclick', (event) => {"
            +"\n\t//your function\n}"});
    $('#js-codebox').append(codeElement);
    let clickMeBtn = $('<button>Double Click me!</button>').on('dblclick', _ => {
        $('#example-codebox>p')?.remove();
        $('#example-codebox').append($('<p>', {text: `Button has been double clicked at ${new Date().toLocaleString()}`}));
    });
    $('#example-codebox').append(clickMeBtn);
}
function keypressJQuery(e) {
    if ($('#modal').css('display') === 'none'
        || $('#js-btn').prop( "disabled")) {
        $(document).off('keypress');
    }
    $('#example-codebox>p')?.remove();
    let p = $('<p>', {text: `${e.key.toUpperCase()} has been pressed at ${new Date().toLocaleString()}`});
    $('#example-codebox').append(p);
}
function onKeyPressJQuery() {
    let codeElement = $('<code>', {text: "$(document).on('keypress', (event) => {\n\t//your function\n};"});
    $('#js-codebox').append(codeElement);
    let info = $('<code>', {text: 'Press any key! \nNote: The onkeypress event is not'
            +' fired \n\tfor all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers'});
    $(document).on('keypress', keypressJQuery);
    $('#example-codebox').append(info);
}

function onMouseMovingJQuery() {
    let codeElement = $('<code>', {text: "$(document).on('mousemove', (event) => {\n\t//your function\n};"});
    $('#js-codebox').append(codeElement);
    $(document).on("mousemove", e => {
        $('#example-codebox>code')?.remove();
        let content = $('<code>', {text: `Mouse offset coordinates: ${e.offsetX}, ${e.offsetY}`});
        $('#example-codebox').append(content);
    });
}

function changeInputJQuery() {
    let codeElement = $('<code>', {text: "inputText.val('Value changed');"});
    $('#js-codebox').append(codeElement);

    let inputText = $('<input>').val('Unchanged value');
    let clickMeBtn = $('<button>', {text: 'Change Input Value!'});
    clickMeBtn.on('click', _ => {
        inputText.val('Value changed');
    });
    $('#example-codebox').append([clickMeBtn, inputText]);
}

function imageLoadedJQuery() {
    let codeElement = $('<code>', {text: "imgExample.on('load', _ => {"
            +"\n\t//your function\n});"});
    $('#js-codebox').append(codeElement);

    let imgExample = $('<img>',{alt: 'imgExample'}).css({height: '15vh', width: '15vw'});
    let clickMeBtn = $('<button>', {text: 'Load Image'});
    let imageStatus = $('<p>', {text: 'Image not loaded!'});
    $('#example-codebox').append([imageStatus, clickMeBtn]);
    imgExample.on('load', _ => {
        imageStatus.text('Image fully loaded!');
    });
    clickMeBtn.on('click', _ => {
        imgExample.attr('src', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg');
        $('#example-codebox').append(imgExample);
    });
}

function imageFailLoadingJQuery() {

}