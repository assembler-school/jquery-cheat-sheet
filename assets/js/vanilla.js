function loadedDomV() {
    document.getElementById('vanillaCode').textContent
        = 'document.addEventListener("DOMContentLoaded", () => {'
        + '\n\talert("DOM finished loading");\n});';
    function DOMLoadingAlert() {
        console.log('DOM finished loading');
        document.removeEventListener("DOMContentLoaded", DOMLoadingAlert);
    }
    function TryLoadedDOMV() {
        document.addEventListener("DOMContentLoaded", DOMLoadingAlert);
    }
    let tryButton = document.createElement("button");
    tryButton.textContent = 'Try me!';
    document.getElementById('vanillaTry').appendChild(tryButton);
    tryButton.addEventListener('click', TryLoadedDOMV);
}

function itemClickedV() {
    document.getElementById('vanillaCode').textContent =
        'tryButton.addEventListener(\'click\', NoticeButtonClicked);';
    function TryItemClickV() {
        let tryMessage = document.createElement("p");
        tryMessage.textContent = '\'Try me!\' button clicked';
        vanillaTryBox.appendChild(tryMessage);
    }
    let tryButton = document.createElement("button");
    tryButton.textContent = 'Try me!';
    let vanillaTryBox = document.getElementById('vanillaTry');
    vanillaTryBox.appendChild(tryButton);
    tryButton.addEventListener('click', TryItemClickV);
}

function itemDoubleClickedV() {
    document.getElementById('vanillaCode').textContent =
        'tryButton.addEventListener(\'dblclick\', NoticeButtonDoubleClicked);';
    function TryItemDoubleClickV() {
        let tryMessage = document.createElement("p");
        tryMessage.textContent = '\'Try me!\' button double clicked';
        vanillaTryBox.appendChild(tryMessage);
    }
    let tryButton = document.createElement("button");
    tryButton.textContent = 'Try me!';
    let vanillaTryBox = document.getElementById('vanillaTry');
    vanillaTryBox.appendChild(tryButton);
    tryButton.addEventListener('dblclick', TryItemDoubleClickV);
}

function checkPressedKeyV(e) {
    if (document.getElementById('vanillaTry').childNodes.length > 0
        && !document.querySelector('.demo.vanilla.hidden')) {
        let tryMessage = document.createElement("p");
        tryMessage.textContent = e.key.toUpperCase() + ' key pressed';
        document.getElementById('vanillaTry').appendChild(tryMessage);
    } else {
        document.removeEventListener('keypress', checkPressedKeyV);
    }
}

function pressedKeyV() {
    document.getElementById('vanillaCode').textContent =
        'tryButton.addEventListener(\'click\', NoticePressedKey);';
    function TryPressedKeyV() {
        document.addEventListener('keypress', checkPressedKeyV);
    }
    let tryButton = document.createElement("button");
    tryButton.textContent = 'Try me!';
    document.getElementById('vanillaTry').appendChild(tryButton);
    tryButton.addEventListener('click', TryPressedKeyV);
}