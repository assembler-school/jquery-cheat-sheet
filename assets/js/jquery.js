function hasLoadedJQuery() {
    let codeElement = $('<code>', {text: "$(document).ready(e => {"
            +"\n\t// document is loaded and DOM is ready\n\talert('document is ready');\n});"});
    $('#js-codebox').append(codeElement);
}

function hasElementClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('click', event => {"
            +"\n\t//your function\n}"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn = $('<button>Click me!</button>').on('click', _ => {
        $('#example-codebox>p')?.remove();
        $('#example-codebox').append($('<p>', {text: `Button has been clicked at ${new Date().toLocaleString()}`}));
    });
    $('#example-codebox').append(clickMeBtn);
}

function hasElementDoubleClickedJQuery() {
    let codeElement = $('<code>', {text: "$('<button>Click me!</button>').on('dblclick', event => {"
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
    let codeElement = $('<code>', {text: "$(document).on('keypress', event => {\n\t//your function\n};"});
    $('#js-codebox').append(codeElement);
    let info = $('<code>', {text: 'Press any key! \nNote: The onkeypress event is not'
            +' fired \n\tfor all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers'});
    $(document).on('keypress', keypressJQuery);
    $('#example-codebox').append(info);
}

function onMouseMovingJQuery() {
    let codeElement = $('<code>', {text: "$(document).on('mousemove', event => {\n\t//your function\n};"});
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
    let codeElement = $('<code>', {text: "imgExample.on('load', event => {"
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
    let codeElement = $('<code>', {text: "imgExample.on('error', event => {"
            +"\n\t//your function\n});"});
    $('#js-codebox').append(codeElement);

    let imgExample = $('<img>',{alt: 'imgExample'}).css({height: '15vh', width: '15vw'});
    let clickMeBtn = $('<button>', {text: 'Load Image'});
    let imageStatus = $('<p>', {text: 'Image not loaded!'});
    $('#example-codebox').append([imageStatus, clickMeBtn]);
    imgExample.on('error', _ => {
        imageStatus.text('Image fails to load!');
    });
    clickMeBtn.on('click', _ => {
        imgExample.attr('src', 'fakeUrl.jpg');
        $('#example-codebox').append(imgExample);
    });
}

function formSubmittedJQuery() {
    let codeElement = $('<code>', {text: "formElement.on('submit', event => {"
            +"\n\t//your function\n});"});
    $('#js-codebox').append(codeElement);

    let formElement = $('<form></form>');
    let clickMeBtn = $('<button>', {text: 'Submit form!'});
    let p = $('<p>', {text: 'Form Submitted!'});
    formElement.on('submit', event => {
        event.preventDefault();
        $('#example-codebox > p')?.remove();
        formElement.append(p);
    });
    formElement.append(clickMeBtn);
    $('#example-codebox').append(formElement);
}

function optionChangedJQuery() {
    let values = ['1111', '2222', '3333'];
    let codeElement = $('<code>', {text: "selectElement.on('change', event => {"
            +"\n\t//your function\n});"});
    $('#js-codebox').append(codeElement);

    let selectElement = $('<select>');
    $.each(values, (index, value) => {
        selectElement.append($("<option></option>").text(value));
    });
    let optionSelected = $('<p>');
    selectElement.on('change', event => {
        $('#example-codebox > p')?.remove();
        optionSelected.text('Selected option: ' + event.target.selectedOptions[0].text);
        $('#example-codebox').append(optionSelected);
    });
    $('#example-codebox').append(selectElement);
}

function mouseoverElementJQuery() {
    let codeElement = $('<code>', {text: "imgExample.on('mouseover', event => {"
            +"\n\t//your function\n});"});
    $('#js-codebox').append(codeElement);

    let imgExample = $('<img>',{alt: 'imgExample'}).css({height: '15vh', width: '15vw'});
    let mouseoverStatus = $('<p>', {text: 'Image not mouseovered!'});
    $('#example-codebox').append([mouseoverStatus, imgExample]);
    imgExample.attr('src', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg');
    imgExample.on('mouseover', _ => {
        mouseoverStatus.text('Image has been mouseovered!');
    });
}

function checkboxChangesJQuery() {
    let codeElement = $('<code>', {text: "checkbox.on('change', event => {"
            +"\n\tcheckboxStatus.text(\n\t\t$(event.target).is(':checked')\n\t\t? 'Checked'\n\t\t: 'Unchecked'\n\t);\n};"});
    $('#js-codebox').append(codeElement);

    let clickOnCheckbox = $('<p>', {text: 'Click on checkbox\n'});
    let checkbox = $('<input>', {type: 'checkbox'});
    let checkboxStatus = $('<p>', {text: 'Unchecked'});

    $('#example-codebox').append([clickOnCheckbox, checkbox, checkboxStatus]);

    checkbox.on('change', event => {
        checkboxStatus.text(
            $(event.target).is(':checked')
            ? 'Checked'
            : 'Unchecked'
        );
    });
}

function ulItemClickedJQuery() {
    let liItems = ['ITEM 1', 'ITEM 2', 'ITEM 3'];
    let codeElement = $('<code>', {text: "ulElement.on('click', event => {\n\t$('<p>', {text: "
            +"`li selected: ${$(event.target).text()}`});\n};"});
    $('#js-codebox').append(codeElement);

    let ulList = $('<ul>').css('listStyle', 'square inside');

    $.each(liItems, (index, liItemName) => {
        let liItem = $('<li>', {text: liItemName}).css('margin', '0 0 5px 0');
        ulList.append(liItem);
    });

    ulList.on('click', event => {
        $('#example-codebox>p')?.remove();
        let p = $('<p>', {text: `\nli selected: ${$(event.target).text()}`});
        $('#example-codebox').append(p);
    });
    $('#example-codebox').append(ulList);
}

function createHtmlElementJQuery() {
    let codeElement = $('<code>', {text: "let clickMeBtn = $('<button>', {text: 'Text example'});"
            +"\n$('body').append(clickMeBtn);"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn = $('<button>', {text: 'Text example'});
    $('#example-codebox').append(clickMeBtn);
}

function removeHtmlElementJQuery() {
    let codeElement = $('<code>', {text: "p.remove();"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn = $('<button>', {text: 'Remove paragraph'});
    let p = $('<p>', {text: 'Example!!'});
    $('#example-codebox').append([clickMeBtn, p]);

    clickMeBtn.one('click', _ => {
        p.remove();
    });
}

function fadeInHtmlElementJQuery() {
    let codeElement = $('<code>', {text: "imgExample.fadeIn(5000);"});
    $('#js-codebox').append(codeElement);

    let imgExample = $('<img>',{
        alt: 'imgExample',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg'
    }).css({height: '15vh', width: '15vw'});
    let clickMeBtn = $('<button>', {text: 'FadeIn Image 5s'});
    let clickMeBtn2 = $('<button>', {text: 'FadeIn Image 10s'});

    $('#example-codebox').append([clickMeBtn, clickMeBtn2, imgExample]);

    clickMeBtn.on('click', _ => {
        imgExample.fadeOut();
        imgExample.fadeIn(5000);
    });
    clickMeBtn2.on('click', _ => {
        imgExample.fadeOut();
        imgExample.fadeIn(10000);
    });
}

function fadeOutHtmlElementJQuery() {
    let codeElement = $('<code>', {text: "imgExample.fadeOut(5000);"});
    $('#js-codebox').append(codeElement);

    let imgExample = $('<img>',{
        alt: 'imgExample',
        src: 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg'
    }).css({height: '15vh', width: '15vw'});
    let clickMeBtn = $('<button>', {text: 'FadeIn Image 5s'});
    let clickMeBtn2 = $('<button>', {text: 'FadeIn Image 10s'});

    $('#example-codebox').append([clickMeBtn, clickMeBtn2, imgExample]);

    clickMeBtn.on('click', _ => {
        imgExample.fadeOut(5000);
    });
    clickMeBtn2.on('click', _ => {
        imgExample.fadeOut(10000);
    });
}

function iterateCollectionExampleJQuery() {
    let codeElement = $('<code>', {text: "$.each($('#ulList > li'), (liIndex, liItem) => {"
            +"\n\t$(liItem).text($(liItem).text().toUpperCase());\n});"});
    $('#js-codebox').append(codeElement);

    let liItems = ['a', 'e', 'i', 'o', 'u'];
    let ulList =  $('<ul>', {id: 'ulList'});

    $.each(liItems, (liIndex, liName) => {
        let liElement = $('<li>', {text: liName});
        ulList.append(liElement);
    });

    let clickMeBtn = $('<button>', {text: 'All items in list to UpperCase'});
    $('#example-codebox').append([ulList, clickMeBtn]);

    clickMeBtn.on('click', _ => {
        $.each($('#ulList > li'), (liIndex, liItem) => {
            $(liItem).text($(liItem).text().toUpperCase());
        });
    });
}

function selectorPropertyNoneJQuery() {
    let codeElement = $('<code>', {text: "$.each($('button'), (index, element) => {"
            +"\n\telement.remove();\n});"});
    $('#js-codebox').append(codeElement);

    let clickMeBtn1 = $('<button>', {text: 'Hide/Show Label'});
    let clickMeBtn2 = $('<button>', {text: 'Change hidden label to RED'});
    let clickMeBtn3 = $('<button>', {text: 'Change hidden label to BLUE'});
    let label = $('<label>', {text: 'EXAMPLE LABEL'}).addClass('hiddenLabel');
    $('#example-codebox').append([clickMeBtn1, clickMeBtn2, clickMeBtn3, label]);

    clickMeBtn1.on('click', _ => {
        label.toggle();
    });

    clickMeBtn2.on('click', _ => {
        $.each($('.hiddenLabel:hidden'), (index, element) => {
            element.style.color = 'red';
        });
    });

    clickMeBtn3.on('click', _ => {
        $.each($('.hiddenLabel:hidden'), (index, element) => {
            element.style.color = 'blue';
        });
    });
}

function removeAllItemsJQuery() {
    let codeElement = $('<code>', {text: "$.each($('.hiddenLabel:hidden'), (index, element) => {"
            +"\n\telement.style.color = 'blue';\n});"});
    $('#js-codebox').append(codeElement);

    let label = $('<label>', {text: 'Click here to remove all buttons'});
    let clickMeBtn1 = $('<button>', {text: 'Button 1'});
    let clickMeBtn2 = $('<button>', {text: 'Button 2'});
    let clickMeBtn3 = $('<button>', {text: 'Button 3'});
    $('#example-codebox').append([label, clickMeBtn1, clickMeBtn2, clickMeBtn3]);

    label.on('click', _ => {
        $.each($('#example-codebox > button'), (index, element) => {
            element.remove();
        });
    });
}

function animateHeaderJQuery() {
    let codeElement = $('<code>', {text: "$(document).ready(function () {"
        +"\n\t$('.main-header').css('opacity', 0);"
    +"\n\tsetTimeout(() => {"
        +"\n\t\t$('.main-header').animate({ opacity: 1, color: 'red' }, 200);"
    +"\n\t}, 2000);\n});"});
    $('#js-codebox').append(codeElement);

    let label = $('<label>', {text: 'Click button below to reload the page and animate header after 2 seconds'});
    let clickMeBtn = $('<button>', {text: 'Click me!'});
    $('#example-codebox').append([label, clickMeBtn]);

    clickMeBtn.on('click', _ => {
        location.reload();
    });
}