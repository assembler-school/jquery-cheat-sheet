function hasLoadedJS() {
    let codeElement = $('<code>', {text: "document.addEventListener('DOMContentLoaded', _ => {"
            +"\n\tconsole.log('DOM fully loaded and parsed');\n});"});
    $('#js-codebox').append(codeElement);
    // let imgExample = $('<img src="https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg" alt="example">',
    //     {id: 'imgExample'}).css({height: '10vh', width: '10vw'});
    // let clickMeBtn = $('<button>Click me!</button>').on('click', _ => {
    //     $('#example-codebox').append(imgExample);
    //     hasLoadedJSExample();
    // });
    // $('#example-codebox').append(clickMeBtn);
}

function hasElementClickedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "clickMeBtn.addEventListener('click', (event) => {\n\t//function\n};"
    document.getElementById('js-codebox').append(codeElement);
    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Click me!';
    clickMeBtn.addEventListener('click', _ => {
        document.querySelector('#example-codebox>p')?.remove();
        let p = document.createElement('p');
        p.textContent = `Button has been clicked at ${new Date().toLocaleString()}`;
        document.getElementById('example-codebox').append(p);
    });
    document.getElementById('example-codebox').append(clickMeBtn);
}

function hasElementDoubleClickedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "clickMeBtn.addEventListener('dblclick', (event) => {\n\t//function\n};"
    document.getElementById('js-codebox').append(codeElement);
    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Double Click me!';
    clickMeBtn.addEventListener('dblclick', _ => {
        document.querySelector('#example-codebox>p')?.remove();
        let p = document.createElement('p');
        p.textContent = `Button has been double clicked at ${new Date().toLocaleString()}`;
        document.getElementById('example-codebox').append(p);
    });
    document.getElementById('example-codebox').append(clickMeBtn);
}
function keypress(e) {
    document.querySelector('#example-codebox>p')?.remove();
    let p = document.createElement('p');
    p.textContent = `${e.key.toUpperCase()} has been pressed at ${new Date().toLocaleString()}`;
    document.getElementById('example-codebox').append(p);
}
function onKeyPressJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('keypress', (event) => {\n\t//function\n};"
    document.getElementById('js-codebox').append(codeElement);
    let info = document.createElement('code');
    info.textContent = 'Press any key! \nNote: The onkeypress event is not fired \n\tfor all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers';
    document.addEventListener('keypress', keypress);
    document.getElementById('example-codebox').append(info);
}