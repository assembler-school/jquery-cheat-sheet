//! functions
function createElementfunctionJs() {
    var div = document.getElementById("createElementIdTestResultjs");
    el = document.createElement("span");
    el.innerHTML = "text";
    div.appendChild(el);
}

function removeElementfunctionJs() {
    buttonTest('removeElementIdTestResultjs', "button-testjs")
    setTimeout(() => {
        var myobj = document.getElementById("button-testjs");
        myobj.remove();
    }, 3000);
}

function appendElementfunctionJs() {
    var main = document.getElementById('appendElementIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText = 'This is a P'
    setTimeout(() => {
        let span = document.createElement("span")
        pOne.appendChild(span);
        span.innerText = 'this is a Span'
    }, 3000);
}

function prependElementfunctionJs() {
    var main = document.getElementById('prependElementIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText = 'This is a P'
    setTimeout(() => {
        let span = document.createElement("span")
        pOne.prepend(span);
        span.innerText = 'this is a Span'
    }, 3000);
}

function createandAddBeforefunctionJs() {
    let main = document.getElementById('createandAddBeforeIdTestResultjs')
    let content = '<ul id="menujs"><li>Services</li><li>About</li><li>Contact</li></ul>'
    main.innerHTML = content
    let menu = document.getElementById('menujs')
    setTimeout(() => {
        li = document.createElement("li");
        li.innerText = 'First This'
        menu.insertBefore(li, menu.firstElementChild);
    }, 3000);
}

function createandAddAfterfunctionJs() {
    let main = document.getElementById('createandAddAfterIdTestResultjs')
    let content = '<ul id="menujs1" ><li>Services</li><li>About</li><li>Contact</li></ul>'
    main.innerHTML = content
    let menu = document.getElementById('menujs1')
    setTimeout(() => {
        let li = document.createElement("li");
        li.innerHTML = 'Second This'
        menu.firstElementChild.after(li);
    }, 3000);
}

function clonefunctionJs() {
    var mainclone = document.getElementById('cloneIdTestResultjs')
    let pOne = document.createElement("p")
    mainclone.appendChild(pOne)
    pOne.innerText = 'This is a P'
    setTimeout(() => {
        let newElement = pOne.cloneNode(true);
        newElement.innerText = 'This is a P is a clone'
        mainclone.appendChild(newElement)
    }, 3000);
}

function addClassfunctionJs() {
    var mainclone = document.getElementById('addClassIdTestResultjs')
    let pOne = document.createElement("p")
    mainclone.appendChild(pOne)
    pOne.innerText = 'This is a P '
    setTimeout(() => {
        pOne.innerText = 'This is a P with class'
        pOne.classList.add('pClassGreen')
    }, 3000);
}

function removeClassfunctionJs() {
    var main = document.getElementById('removeClassIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText = 'This is a P with class '
    pOne.classList.add('pClassGreen')
    setTimeout(() => {
        pOne.innerText = 'This is a P wihtout class'
        pOne.classList.remove('pClassGreen')

    }, 3000);
}

function toggleClassfunctionJs() {
    buttonTest('toggleClassIdTestResultjs', 'togglebtnjs')
    btn = document.getElementById('togglebtnjs')
    var main = document.getElementById('toggleClassIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText = 'This is a P '
    btn.addEventListener('click', function () {
        pOne.classList.toggle('pClassGreen')
    })
}

function addDisabledfunctionJs() {
    buttonTest('addDisabledIdTestResultjs', 'addDisabledbtn')
    buttonTest('addDisabledIdTestResultjs', 'AddDisabledjs')

    btn = document.getElementById('addDisabledbtn')
    let btnTwo = document.getElementById('AddDisabledjs')

    btnTwo.addEventListener('click', function () {
        let pOne = document.createElement("p")
        btnTwo.after(pOne)
        pOne.innerText = 'This is a P '
    })
    btn.addEventListener('click', function () {
        document.getElementById('AddDisabledjs').disabled = true;
    })
}

function removeDisabledfunctionJs() {
    buttonTest('removeDisabledIdTestResultjs', 'removeDisabledbtn')
    buttonTest('removeDisabledIdTestResultjs', 'removeDisabledjs')

    btn = document.getElementById('removeDisabledbtn')
    let btnTwo = document.getElementById('removeDisabledjs')

    btnTwo.disabled = true;
    btnTwo.addEventListener('click', function () {
        let pOne = document.createElement("p")
        btnTwo.after(pOne)
        pOne.innerText = 'This is a P '
    })
    btn.addEventListener('click', function () {
        btnTwo.disabled = false;
    })
}


function setDataSrcfunctionJs() {
    buttonTest('setDataSrcIdTestResultjs', 'setDataSrcbtn')
    let main = document.getElementById('setDataSrcIdTestResultjs')

    btn = document.getElementById('setDataSrcbtn')
    let image = document.createElement("img")
    image.src = './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg';
    main.appendChild(image);

    let pOne = document.createElement("p")
    pOne.innerText = "Don't have Data-src"
    image.after(pOne)

    btn.addEventListener('click', function () {
        image.setAttribute('data-src', 'This is a Data Src');
        pOne.innerText = image.getAttribute('data-src')
        image.after(pOne)
    })
}

function removeDataSrcfunctionJs() {
    buttonTest('removeDataSrcIdTestResultjs', 'removeDataSrcbtn')
    let main = document.getElementById('removeDataSrcIdTestResultjs')

    btn = document.getElementById('removeDataSrcbtn')

    let image = document.createElement("img")
    image.src = './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg';
    main.appendChild(image);
    image.setAttribute('data-src', 'This is a Data Src');

    let pOne = document.createElement("p")
    pOne.innerText = image.getAttribute('data-src')
    image.after(pOne)

    btn.addEventListener('click', function () {
        image.removeAttribute('data-src')
        pOne.innerText = "Don't have Data-src"
        image.after(pOne)
    })
}

function hideHTMLfunctionJs() {
    buttonTest('hideHTMLIdTestResultjs', 'hideHTMLbtn')
    let main = document.getElementById('hideHTMLIdTestResultjs')
    btn = document.getElementById('hideHTMLbtn')

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.display = 'none'
    })
}

function showHTMLfunctionJs() {
    buttonTest('showHTMLIdTestResultjs', 'showHTMLbtn')
    let main = document.getElementById('showHTMLIdTestResultjs')
    btn = document.getElementById('showHTMLbtn')

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    pOne.style.display = 'none'
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.display = 'block'
    })
}

function fadeInfunctionJs() {
    buttonTest('fadeInIdTestResultjs', 'fadeInbtn')
    let main = document.getElementById('fadeInIdTestResultjs')
    btn = document.getElementById('fadeInbtn')

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    main.appendChild(pOne)
    pOne.style.opacity = "0";

    btn.addEventListener('click', function () {
        pOne.style.transition = "opacity 1s";
        pOne.style.opacity = '100%';
    })
}

function fadeOutfunctionJs() {
    buttonTest('fadeOutIdTestResultjs', 'fadeoutbtn')
    let main = document.getElementById('fadeOutIdTestResultjs')
    btn = document.getElementById('fadeoutbtn')

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.transition = "opacity 1s";
        pOne.style.opacity = '0';
    })
}