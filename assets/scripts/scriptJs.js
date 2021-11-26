function createElementfunctionJs  () {
    var div = document.getElementById("createElementIdTestResultjs");
    el = document.createElement("span");
    el.innerHTML = "text";
    div.appendChild(el);
}

function removeElementfunctionJs () {
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
    pOne.innerText= 'This is a P'
    setTimeout(() => {
        let span = document.createElement("span")
        pOne.appendChild(span);
        span.innerText= 'this is a Span'
    }, 3000);
}

function prependElementfunctionJs() {
    var main = document.getElementById('prependElementIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText= 'This is a P'
    setTimeout(() => {
        let span = document.createElement("span")
        pOne.prepend(span);
        span.innerText= 'this is a Span'
    }, 3000);
}
function createandAddBeforefunctionJs () {
    let main = document.getElementById('createandAddBeforeIdTestResultjs')
    let content = '<ul id="menujs"><li>Services</li><li>About</li><li>Contact</li></ul>'
    main.innerHTML = content
    let menu= document.getElementById('menujs')
    setTimeout(() => {
        li = document.createElement("li");
        li.innerText= 'First This'
        menu.insertBefore(li, menu.firstElementChild);
        }, 3000);
}

function createandAddAfterfunctionJs () {
    let main = document.getElementById('createandAddAfterIdTestResultjs')
    let content = '<ul id="menujs1" ><li>Services</li><li>About</li><li>Contact</li></ul>'
    main.innerHTML = content
    let menu= document.getElementById('menujs1')
    setTimeout(() => {
        let li = document.createElement("li");
        li.innerHTML= 'Second This'
        menu.firstElementChild.after(li);
        }, 3000);
}

function clonefunctionJs() {
    var mainclone = document.getElementById('cloneIdTestResultjs')
    let pOne = document.createElement("p")
    mainclone.appendChild(pOne)
    pOne.innerText= 'This is a P'
    setTimeout(() => {
        let newElement = pOne.cloneNode(true);
        newElement.innerText= 'This is a P is a clone'
        mainclone.appendChild(newElement)
    }, 3000);
}

function addClassfunctionJs() {
    var mainclone = document.getElementById('addClassIdTestResultjs')
    let pOne = document.createElement("p")
    mainclone.appendChild(pOne)
    pOne.innerText= 'This is a P '
    setTimeout(() => {
        pOne.innerText= 'This is a P with class'
        pOne.classList.add('pClassGreen')
    }, 3000);
}

function removeClassfunctionJs() {
    var main = document.getElementById('removeClassIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText= 'This is a P with class '
    pOne.classList.add('pClassGreen')
    setTimeout(() => {
        pOne.innerText= 'This is a P wihtout class'
        pOne.classList.remove('pClassGreen')

    }, 3000);
}

function toggleClassfunctionJs() {
    buttonTest('toggleClassIdTestResultjs', 'togglebtnjs')
    btn= document.getElementById('togglebtnjs')
    var main = document.getElementById('toggleClassIdTestResultjs')
    let pOne = document.createElement("p")
    main.appendChild(pOne)
    pOne.innerText= 'This is a P '
    btn.addEventListener('click', function () {
        pOne.classList.toggle('pClassGreen')
    } )
}

function addDisabledfunctionJs() {
    buttonTest('addDisabledIdTestResultjs', 'addDisabledbtn')
    buttonTest('addDisabledIdTestResultjs', 'AddDisabledjs')

    btn= document.getElementById('addDisabledbtn')
    let btnTwo= document.getElementById('AddDisabledjs')

    btnTwo.addEventListener('click', function () {
        let pOne = document.createElement("p")
        btnTwo.after(pOne)
        pOne.innerText= 'This is a P '
    })
    btn.addEventListener('click', function () {
        document.getElementById('AddDisabledjs').disabled = true;
    } )
}

function removeDisabledfunctionJs() {
    buttonTest('removeDisabledIdTestResultjs', 'removeDisabledbtn')
    buttonTest('removeDisabledIdTestResultjs', 'removeDisabledjs')

    btn= document.getElementById('removeDisabledbtn')
    let btnTwo= document.getElementById('removeDisabledjs')

    btnTwo.disabled = true;
    btnTwo.addEventListener('click', function () {
        let pOne = document.createElement("p")
        btnTwo.after(pOne)
        pOne.innerText= 'This is a P '
    })
    btn.addEventListener('click', function () {
        btnTwo.disabled = false;
    } )
}


function setDataSrcfunctionJs() {
    buttonTest('setDataSrcIdTestResultjs', 'setDataSrcbtn')
    //buttonTest('setDataSrcIdTestResultjs', 'removeDisabledjs')

    btn= document.getElementById('setDataSrcbtn')
    //let btnTwo= document.getElementById('removeDisabledjs')

    let image = document.createElement("img")
    image.className = 'my-img';
    image.src = '/assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg';
    document.body.appendChild();
        btnTwo.after(pOne)
        pOne.innerText= "Don't have Data-src"
    
    //     btnTwo.addEventListener('click', function () {
    //     let pOne = document.createElement("p")
    //     btnTwo.after(pOne)
    //     pOne.innerText=
    // })
    btn.addEventListener('click', function () {
        
    } )
}