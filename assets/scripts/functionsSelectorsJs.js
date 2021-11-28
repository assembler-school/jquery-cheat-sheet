//! Selectors Functions------------------------------------------------------------

function iterateCollectionfunctionJs() {
    buttonTest('iterateCollectionIdTestResultjs', 'interateCollection')
    let main = document.getElementById('iterateCollectionIdTestResultjs')
    btn = document.getElementById('interateCollection')
    for (let index = 0; index < 5; index++) {
        let pOne = document.createElement("p")
        pOne.innerText = 'This is a P '
        main.appendChild(pOne)
    }

    btn.addEventListener('click', function () {
        allP = document.querySelectorAll('p')
        allP.forEach(element => {
            element.classList.add('pClassGreen')
        });
    })
}

function parentElementfunctionJs() {
    buttonTest('parentElementIdTestResultjs', 'parentElementjs')
    let main = document.getElementById('parentElementIdTestResultjs')
    btn = document.getElementById('parentElementjs')

    let divOne = document.createElement("div")
    divOne.setAttribute('id', 'divOneid')
    divOne.innerText = 'This is a Div '
    main.appendChild(divOne)

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    divOne.appendChild(pOne)

    btn.addEventListener('click', function () {
        parent= pOne.parentElement
        parent.style.fontWeight = 'bolder';
    })
}


function childrenElementfunctionJs() {
    buttonTest('childrenElementIdTestResultjs', 'childrenElementjs')
    let main = document.getElementById('childrenElementIdTestResultjs')
    btn = document.getElementById('childrenElementjs')

    let divOne = document.createElement("div")
    divOne.setAttribute('id', 'divOneid')
    divOne.innerText = 'This is a Div '
    main.appendChild(divOne)

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    divOne.appendChild(pOne)

    btn.addEventListener('click', function () {
        childrens = divOne.children
        childrens[0].style.fontWeight = 'bolder';
    })
}

function classElementfunctionJs() {
    buttonTest('classElementIdTestResultjs', 'classElementsjs')
    let main = document.getElementById('classElementIdTestResultjs')
    btn = document.getElementById('classElementsjs')
    for (let index = 0; index < 5; index++) {
        let pOne = document.createElement("p")
        pOne.innerText = 'This is a P '
        pOne.setAttribute('class', 'pdif')
        main.appendChild(pOne)
    }

    btn.addEventListener('click', function () {
        elems = document.getElementsByClassName('pdif')

        for (var i = 0; i < elems.length; ++i) {
            elems[i].style.fontWeight = 'bolder';
        }
    })
}


function getElementbyidfunctionJs() {
    buttonTest('getElementbyidIdTestResultjs', 'getelementbyidjs')
    let main = document.getElementById('getElementbyidIdTestResultjs')
    btn = document.getElementById('getelementbyidjs')

    let pOne = document.createElement("p")
    pOne.innerText = 'This is a P '
    pOne.setAttribute('id', 'pOneidjs')
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOneId= document.getElementById('pOneidjs')
        pOneId.style.fontWeight = 'bolder';
    })
}

function getOptionsfunctionJs() {
    buttonTest('getOptionsIdTestResultjs', 'getoptionsjs')
    let main = document.getElementById('getOptionsIdTestResultjs')
    btn = document.getElementById('getoptionsjs')

    for (let index = 0; index < 4; index++) {
        let pOne = document.createElement("p")
        pOne.innerText = 'This is a P '
        pOne.setAttribute('class', 'pdif')
        main.appendChild(pOne)
    }

    let ptwo = document.createElement("p")
    ptwo.innerText = 'This is a P '
    ptwo.setAttribute('class', 'pdif')
    ptwo.setAttribute('id', 'ptwoidjs')
    main.appendChild(ptwo)

    btn.addEventListener('click', function () {
        pOption= document.querySelectorAll('.pdif[id]')
        pOption[0].style.fontWeight = 'bolder';
    })
}


function valueFirstinputfunctionJs() {
    buttonTest('valueFirstinputIdTestResultjs', 'valuefirstinputjs')
    let main = document.getElementById('valueFirstinputIdTestResultjs')
    btn = document.getElementById('valuefirstinputjs')

    let ptwo = document.createElement("input")
    ptwo.setAttribute('placeholder', 'write something here')
    main.appendChild(ptwo)

    btn.addEventListener('click', function () {
        inputvaluejs= document.querySelector('input').value
        console.log(inputvaluejs)
        alert(inputvaluejs)
    })
}

function animateitemfunctionJs() {
    buttonTest('animateitemIdTestResultjs', 'animateitemjs')
    let main = document.getElementById('animateitemIdTestResultjs')
    btn = document.getElementById('animateitemjs')

    let ptwo = document.createElement("p")
    ptwo.innerText = 'This is a P '
    ptwo.setAttribute('id', 'animatejs')
    main.appendChild(ptwo)

    btn.addEventListener('click', function () {
        let animationHTML = document.getElementById('animatejs');
        setTimeout(() => {
            animationHTML.style.animationName = 'example';
            animationHTML.style.animationDuration = '2s';
        }, 2000);
    })
}