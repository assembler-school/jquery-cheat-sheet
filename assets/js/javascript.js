function hasLoadedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('DOMContentLoaded', e => {"
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
    codeElement.textContent = "clickMeBtn.addEventListener('click', event => {\n\t//your function\n};"
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
    codeElement.textContent = "clickMeBtn.addEventListener('dblclick', event => {\n\t//your function\n};"
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
    codeElement.textContent = "document.addEventListener('keypress', event => {\n\t//your function\n};"
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
    codeElement.textContent = "document.addEventListener('mousemove', event => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);
    document.addEventListener("mousemove", mouseMove);
}

function changeInputJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "clickMeBtn.addEventListener('click', event => {\n\t//your function\n};"
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
    codeElement.textContent = "imgExample.addEventListener('load', event => {"
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
    let codeElement = document.createElement('code');
    codeElement.textContent = "imgExample.addEventListener('error', event => {"
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
    imgExample.addEventListener('error', _ => {
        imageStatus.textContent = 'Image fails to load!';
    });
    clickMeBtn.addEventListener('click', _ => {
        imgExample.setAttribute('src', 'fakeUrl.jpg');
        document.querySelector('#example-codebox').append(imgExample);
    });
}

function formSubmittedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "formElement.addEventListener('submit', event => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);

    let formElement = document.createElement('form');

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Submit form!';
    let p = document.createElement('p');
    p.textContent = 'Form Submitted!';
    formElement.addEventListener('submit', event => {
        event.preventDefault();
        document.querySelector('#example-codebox > p')?.remove();
        formElement.append(p);
    });
    formElement.append(clickMeBtn);
    document.getElementById('example-codebox').append(formElement);
}

function optionChangedJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "selectElement.addEventListener('change', event => {\n\t//your function\n};"
    document.getElementById('js-codebox').append(codeElement);

    let selectElement = document.createElement('select');
    let option1 = document.createElement("option");
    option1.text = '1111';
    let option2 = document.createElement("option");
    option2.text = '2222';
    let option3 = document.createElement("option");
    option3.text = '3333';
    selectElement.add(option1);
    selectElement.add(option2);
    selectElement.add(option3);
    let optionSelected = document.createElement('p');
    selectElement.addEventListener('change', event => {
        document.querySelector('#example-codebox > p')?.remove();
        optionSelected.textContent = 'Selected option: ' + event.target.selectedOptions[0].text;
        document.getElementById('example-codebox').append(optionSelected);
    });
    document.getElementById('example-codebox').append(selectElement);
}

function mouseoverElementJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "imgExample.addEventListener('mouseover', event => {"
        +"\n\t//your function\n});";
    document.getElementById('js-codebox').append(codeElement);

    let imgExample = document.createElement('img');
    imgExample.style.height = '15vh';
    imgExample.style.width = '15vw';
    let mouseoverStatus = document.createElement('p');
    mouseoverStatus.textContent = 'Image not mouseovered!';
    document.querySelector('#example-codebox').append(mouseoverStatus);
    imgExample.setAttribute('src', 'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg');
    document.querySelector('#example-codebox').append(imgExample);
    imgExample.addEventListener('mouseover', _ => {
        mouseoverStatus.textContent = 'Image has been mouseovered!';
    });
}

function checkboxChangesJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "checkbox.addEventListener('change', event => {"
        +"\n\tcheckboxStatus.textContent = \n\t\tevent.target.checked\n\t\t? 'Checked'\n\t\t: 'Unchecked';\n};"
    document.getElementById('js-codebox').append(codeElement);

    let clickOnCheckbox = document.createElement('p');
    clickOnCheckbox.textContent = 'Click on checkbox\n';
    document.getElementById('example-codebox').append(clickOnCheckbox);

    let checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    document.getElementById('example-codebox').append(checkbox);

    let checkboxStatus = document.createElement('p');
    checkboxStatus.textContent = 'Unchecked';
    document.getElementById('example-codebox').append(checkboxStatus);

    checkbox.addEventListener('change', event => {
        checkboxStatus.textContent = event.target.checked ? 'Checked' : 'Unchecked';
    });
}

function ulItemClickedJS() {
    let liItems = ['ITEM 1', 'ITEM 2', 'ITEM 3'];
    let codeElement = document.createElement('code');
    codeElement.textContent = "ulElement.addEventListener('click', event => {\n\tp.textContent ="
        +" `li selected: ${event.target.textContent}`;\n};"
    document.getElementById('js-codebox').append(codeElement);
    let ulList = document.createElement('ul');
    ulList.style.listStyle = "square inside";

    liItems.forEach(liItemName => {
        let liItem = document.createElement('li');
        liItem.textContent = liItemName;
        liItem.style.margin = "0 0 5px 0"
        ulList.append(liItem);
    });

    ulList.addEventListener('click', event => {
        document.querySelector('#example-codebox>p')?.remove();
        let p = document.createElement('p');
        p.textContent = `\nli selected: ${event.target.textContent}`;
        document.getElementById('example-codebox').append(p);
    });
    document.getElementById('example-codebox').append(ulList);
}

function createHtmlElementJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "let clickMeBtn = document.createElement('button');"
        +"\nclickMeBtn.textContent = 'Text example';"
        +"\ndocument.body.append(clickMeBtn);"
    document.getElementById('js-codebox').append(codeElement);

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Text example';
    document.getElementById('example-codebox').append(clickMeBtn);
}

function removeHtmlElementJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "p.remove();";
    document.getElementById('js-codebox').append(codeElement);

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Remove paragraph';
    document.getElementById('example-codebox').append(clickMeBtn);

    let p = document.createElement('p');
    p.textContent = 'Example!!';
    document.getElementById('example-codebox').append(p);

    clickMeBtn.addEventListener('click', _ => {
        p.remove();
    }, {once: true});
}

function fadeInJS(element, duration) {
    (function increment(value = 0) {
        element.style.opacity = String(value);
        if (element.style.opacity !== '1') {
            setTimeout(() => {
                increment(value + 0.001);
            }, duration / 10);
        }
    })();
}
function fadeInHtmlElementJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "function fadeIn(element, duration) {"
    +"\n\t(function increment(value = 0) {"
        +"\n\t\telement.style.opacity = String(value);"
        +"\n\t\tif (element.style.opacity !== '1') {"
        +"\n\t\t\tsetTimeout(() => {"
        +"\n\t\t\t\tincrement(value + 0.001);"
        +"\n\t\t\t}, duration / 10);"
        +"\n\t\t}"
        +"\n\t})();"
        +"\n}";
    document.getElementById('js-codebox').append(codeElement);

    let imgExample = document.createElement('img');
    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'FadeIn Image 5s';
    let clickMeBtn2 = document.createElement('button');
    clickMeBtn2.textContent = 'FadeIn Image 10s';
    imgExample.style.height = '15vh';
    imgExample.style.width = '15vw';
    imgExample.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg'
    );

    document.querySelector('#example-codebox').append(clickMeBtn);
    document.querySelector('#example-codebox').append(clickMeBtn2);
    document.querySelector('#example-codebox').append(imgExample);
    clickMeBtn.addEventListener('click', _ => {
        fadeInJS(imgExample, 50);
    });
    clickMeBtn2.addEventListener('click', _ => {
        fadeInJS(imgExample, 100);
    });
}

function fadeOutEffectJS(fadeTarget, duration) {
    fadeTarget.style.transition = `opacity ${duration}s`;
    fadeTarget.style.opacity = 0;
}

function fadeOutHtmlElementJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "function fadeOutEffectJS(fadeTarget, duration) {"
        +"\n\tfadeTarget.style.transition = `opacity ${duration}s`;"
        +"\n\tfadeTarget.style.opacity = 0;"
    +"\n}";
    document.getElementById('js-codebox').append(codeElement);

    let imgExample = document.createElement('img');
    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'FadeOut Image 5s';
    let clickMeBtn2 = document.createElement('button');
    clickMeBtn2.textContent = 'FadeOut Image 10s';
    imgExample.style.height = '15vh';
    imgExample.style.width = '15vw';
    imgExample.setAttribute(
        'src',
        'https://upload.wikimedia.org/wikipedia/commons/5/53/Vaporwave-4K-Wallpapers.jpg'
    );

    document.querySelector('#example-codebox').append(clickMeBtn);
    document.querySelector('#example-codebox').append(clickMeBtn2);
    document.querySelector('#example-codebox').append(imgExample);
    clickMeBtn.addEventListener('click', _ => {
        fadeOutEffectJS(imgExample, 5);
    });
    clickMeBtn2.addEventListener('click', _ => {
        fadeOutEffectJS(imgExample, 10);
    });
}

function iterateCollectionExampleJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.querySelectorAll('#ulList > li').forEach(liItem => {"
    +"\n\tliItem.textContent = liItem.textContent.toUpperCase();\n});";
    document.getElementById('js-codebox').append(codeElement);

    let liItems = ['a', 'e', 'i', 'o', 'u'];
    let ulList =  document.createElement('ul');
    ulList.id = 'ulList';
    liItems.forEach(liName => {
        let liElement = document.createElement('li');
        liElement.textContent = liName;
        ulList.append(liElement);
    });
    document.querySelector('#example-codebox').append(ulList);

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'All items in list to UpperCase';
    document.querySelector('#example-codebox').append(clickMeBtn);

    clickMeBtn.addEventListener('click', _ => {
        document.querySelectorAll('#ulList > li').forEach(liItem => {
            liItem.textContent = liItem.textContent.toUpperCase();
        });
    });
}

function selectorPropertyNoneJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.querySelectorAll('.hiddenLabel[style='display: none;']')"
        +"\n\t\t\t.forEach(element => {"
    +"\n\t\t\t\telement.style.color = 'red';"
    +"\n\t\t});";
    document.getElementById('js-codebox').append(codeElement);

    let clickMeBtn1 = document.createElement('button');
    clickMeBtn1.textContent = 'Hide/Show Label';
    document.querySelector('#example-codebox').append(clickMeBtn1);

    let clickMeBtn2 = document.createElement('button');
    clickMeBtn2.textContent = 'Change hidden label to RED';
    document.querySelector('#example-codebox').append(clickMeBtn2);

    let clickMeBtn3 = document.createElement('button');
    clickMeBtn3.textContent = 'Change hidden label to BLUE';
    document.querySelector('#example-codebox').append(clickMeBtn3);

    let label = document.createElement('label');
    label.textContent = 'EXAMPLE LABEL';
    label.classList.add('hiddenLabel');
    document.querySelector('#example-codebox').append(label);

    clickMeBtn1.addEventListener('click', _ => {
        label.style.display = label.style.display === "none" ? "block" : "none";
    });

    clickMeBtn2.addEventListener('click', _ => {
        document.querySelectorAll('.hiddenLabel[style="display: none;"]').forEach(element => {
            element.style.color = 'red';
        });
    });

    clickMeBtn3.addEventListener('click', _ => {
        document.querySelectorAll('.hiddenLabel[style="display: none;"]').forEach(element => {
            element.style.color = 'blue';
        });
    });
}

function removeAllItemsJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.querySelectorAll('button']')"
        +"\n\t\t\t.forEach(element => {"
        +"\n\t\t\t\telement.remove();"
        +"\n\t\t});";
    document.getElementById('js-codebox').append(codeElement);

    let label = document.createElement('label');
    label.textContent = 'Click here to remove all buttons';
    document.querySelector('#example-codebox').append(label);

    let clickMeBtn1 = document.createElement('button');
    clickMeBtn1.textContent = 'Button 1';
    document.querySelector('#example-codebox').append(clickMeBtn1);

    let clickMeBtn2 = document.createElement('button');
    clickMeBtn2.textContent = 'Button 2';
    document.querySelector('#example-codebox').append(clickMeBtn2);

    let clickMeBtn3 = document.createElement('button');
    clickMeBtn3.textContent = 'Button 3';
    document.querySelector('#example-codebox').append(clickMeBtn3);

    label.addEventListener('click', _ => {
        document.querySelectorAll('#example-codebox > button').forEach(element => {
            element.remove();
        });
    });
}

function animateHeaderJS() {
    let codeElement = document.createElement('code');
    codeElement.textContent = "document.addEventListener('DOMContentLoaded', _ => {"
        +"\n\tsetTimeout(_ => {"
        +"\n\t\tdocument"
        +"\n\t\t\t.querySelector('.main-header')"
        +"\n\t\t\t.animate("
        +"\n\t\t\t\t["
        +"\n\t\t\t\t\t{ transform: 'translateX(0px)' },"
        +"\n\t\t\t\t\t{ transform: 'translateX(50px)' },"
        +"\n\t\t\t\t\t{ transform: 'translateX(0px)' },"
        +"\n\t\t\t\t],"
        +"\n\t\t\t\t{"
        +"\n\t\t\t\t\tduration: 1200,"
        +"\n\t\t\t\t\titerations: 1,"
        +"\n\t\t\t\t}"
        +"\n\t\t\t);"
        +"\n\t}, 2000);"
        +"\n});";
    document.getElementById('js-codebox').append(codeElement);

    let label = document.createElement('label');
    label.textContent = 'Click button below to reload the page and animate header after 2 seconds';
    document.querySelector('#example-codebox').append(label);

    let clickMeBtn = document.createElement('button');
    clickMeBtn.textContent = 'Click me!';
    document.querySelector('#example-codebox').append(clickMeBtn);

    clickMeBtn.addEventListener('click', _ => {
        location.reload();
    });
}