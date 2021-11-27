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

