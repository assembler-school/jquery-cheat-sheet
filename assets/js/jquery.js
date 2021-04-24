function hasLoadedJQuery() {
    let codeElement = $('<code>', {text: "$(document).ready(_ => {"
            +"\n\t// document is loaded and DOM is ready\n\talert('document is ready');\n});"});
    $('#js-codebox').append(codeElement);
}

function hasElementClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('click', (event) => {"
            +"\n\t//function\n}"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn = $('<button>Click me!</button>').on('click', _ => {
        $('#example-codebox>p')?.remove();
        $('#example-codebox').append($('<p>', {text: `Button has been clicked at ${new Date().toLocaleString()}`}));
    });
    $('#example-codebox').append(clickMeBtn);
}

function hasElementDoubleClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('dblclick', (event) => {"
            +"\n\t//function\n}"});
    $('#js-codebox').append(codeElement);
    let clickMeBtn = $('<button>Double Click me!</button>').on('dblclick', _ => {
        $('#example-codebox>p')?.remove();
        $('#example-codebox').append($('<p>', {text: `Button has been double clicked at ${new Date().toLocaleString()}`}));
    });
    $('#example-codebox').append(clickMeBtn);
}

function onKeyPressJQuery() {
    let codeElement = $('<code>', {text: "$(document).on('keypress', (event) => {\n\t//function\n};"});
    $('#js-codebox').append(codeElement);
    let info = $('<code>', {text: 'Press any key! \nNote: The onkeypress event is not'
            +' fired \n\tfor all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers'});
    $(document).on('keypress', keypress);
    $('#example-codebox').append(info);
}