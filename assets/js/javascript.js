function hasLoadedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('DOMContentLoaded', _ => {"
            +"\n\tconsole.log('DOM fully loaded and parsed');\n});";
    document.getElementById('js-codebox').append(codeElement);
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
    codeElement.textContent = "clickMeBtn.addEventListener('click', (event) => {\n\t//your function\n};"
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
    codeElement.textContent = "clickMeBtn.addEventListener('dblclick', (event) => {\n\t//your function\n};"
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
function keypressJS(e) {
    if (document.querySelector('#modal').style.display === 'none'
        || document.getElementById('jq-btn').disabled) {
        document.removeEventListener('mousemove', keypressJS);
    }
    document.querySelector('#example-codebox>p')?.remove();
    let p = document.createElement('p');
    p.textContent = `${e.key.toUpperCase()} has been pressed at ${new Date().toLocaleString()}`;
    document.getElementById('example-codebox').append(p);
}
function onKeyPressJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('keypress', (event) => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);
    let info = document.createElement('code');
    info.textContent = `Press any key!\nNote: The onkeypress event is not fired for all keys (e.g. ALT, CTRL, SHIFT, ESC) in all browsers`;
    document.addEventListener('keypress', keypressJS);
    document.getElementById('example-codebox').append(info);
}
function mouseMove(e) {
    document.querySelector('#example-codebox>code')?.remove();
    let content = document.createElement('code');
    content.innerText = `Mouse offset coordinates: ${e.offsetX}, ${e.offsetY}`;
    document.getElementById('example-codebox').append(content);
}

function onMouseMovingJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('mousemove', (event) => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);
    document.addEventListener("mousemove", mouseMove);
}

function changeInputJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "clickMeBtn.addEventListener('click', (event) => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);
    let inputText = document.createElement('input');
    inputText.value = "Unchanged value";

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Change Input Value!';
    clickMeBtn.addEventListener('click', _ => {
        inputText.value = 'Value changed';
    });
    document.getElementById('example-codebox').append(clickMeBtn);
    document.getElementById('example-codebox').append(inputText);
}

function imageLoadedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "imgExample.addEventListener('load', _ => {"
        +"\n\t//your function\n});";
    document.getElementById('js-codebox').append(codeElement);

    let imgExample = document.createElement('img');
    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Load Image';
    imgExample.style.height = '15vh';
    imgExample.style.width = '15vw';
    let imageStatus = document.createElement('p');
    imageStatus.textContent = 'Image not loaded!';
    document.querySelector('#example-codebox').append(imageStatus);
    document.querySelector('#example-codebox').append(clickMeBtn);
    imgExample.addEventListener('load', _ => {
        imageStatus.textContent = 'Image fully loaded!';
    });
    clickMeBtn.addEventListener('click', _ => {
        imgExample.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg');
        document.querySelector('#example-codebox').append(imgExample);
    });
}

function imageFailLoadingJS() {

}