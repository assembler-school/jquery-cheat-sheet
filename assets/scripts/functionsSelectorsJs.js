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
        parent = pOne.parentElement
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
        pOneId = document.getElementById('pOneidjs')
        pOneId.style.fontWeight = 'bolder';
    })
}


function displaynoneandblockElementfunctionIdJs() {
    buttonTest('displaynoneandblockElementIdTestResultjs', 'callmebaby')
    let content1 = document.createElement("p")
    content1.textContent = "content 1"
    let content2 = document.createElement("p")
    content2.textContent = "content 2"
    content1.setAttribute("class", "contentdisplaynone")
    content2.setAttribute("class", "contentdisplaynone")
    let pr = document.getElementById("displaynoneandblockElementIdTestResultjs")
    pr.appendChild(content1)
    pr.appendChild(content2)
    content1.style.display = "none"
    content2.style.display = "none"
    document.getElementById("callmebaby").addEventListener("click", () => {
        if (content1.style.display == "none" && content2.style.display == "none") {
            content1.style.display = "block"
            content2.style.display = "block"
            content2.style.color = "red"
            content1.style.color = "green"
        } else if (content1.style.display == "block" && content2.style.display == "block") {
            content1.style.display = "none"
            content2.style.display = "none"
        }
    })
}

function changehrefattributeElementfunctionIdJs() {
    let a1 = document.createElement("a")
    let a2 = document.createElement("a")
    let a3 = document.createElement("a")
    a1.href = "link1"
    a1.textContent = '<a href="link1">link 1</a>'
    document.getElementById("changehrefattributeElementIdTestResultjs").appendChild(a1)
    a2.textContent = '<a href="link2">link 2</a>'
    a3.textContent = '<a href="link3">link 3</a>'
    a2.href = "link2"
    document.getElementById("changehrefattributeElementIdTestResultjs").appendChild(a2)
    a3.href = "link3"
    document.getElementById("changehrefattributeElementIdTestResultjs").appendChild(a3)
    buttonTest('changehrefattributeElementIdTestResultjs', 'changehref')
    document.getElementById("changehref").addEventListener("click", () => {
        a1.textContent = '<a href="linkchanged">link 1</a>'
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
        pOption = document.querySelectorAll('.pdif[id]')
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
        inputvaluejs = document.querySelector('input').value
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

function removeallitemsElementfunctionIdJs() {
    let p1 = document.createElement("p")
    let p2 = document.createElement("p")
    let p3 = document.createElement("p")
    p1.textContent = "content1"
    p2.textContent = "content2"
    p3.textContent = "content3"
    document.getElementById("removeallitemsElementIdTestResultjs").appendChild(p1)
    document.getElementById("removeallitemsElementIdTestResultjs").appendChild(p2)
    document.getElementById("removeallitemsElementIdTestResultjs").appendChild(p3)
    buttonTest('removeallitemsElementIdTestResultjs', 'removelementall')
    document.getElementById("removelementall").addEventListener("click", () => {
        p2.remove()
    })
}