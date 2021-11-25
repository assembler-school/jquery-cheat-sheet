function createDiv(title, idButtonClick, divdisplay, functionIdJs, functionJs, jsText, IdTestResultjs, functionIdJq, functionJq, jqText, IdTestResultjq) {
    let content = `<div class="lineItem">`
    content += `<h2>${title} </h2> <button id="${idButtonClick}" class="btn btn-secondary btn-lg" >Click to See more </button>
    </div>`
    content += `<div id='${divdisplay}' class="contentTests hide">`

    content += `<div class="firstLine"><h4>JavaScript </h4> <button id="${functionIdJs}" class="btn btn-warning btn-lg">TRY</button>`

    content += `<h5>${jsText}</h5>`

    content += `<div id="${IdTestResultjs}" class="divTest"></div></div>`

    content += `<div class="firstLine"><h4>JQuery</h4>  <button id="${functionIdJq}" class="btn btn-warning btn-lg">TRY</button>`
    content += `<h5> ${jqText}</h5>`

    content += `<div id="${IdTestResultjq}" class="divTest"></div></div> `

    content += `</div>`

    divContent = document.getElementById('content')

    divContent.innerHTML += content

    // showButton = document.getElementById(idButtonClick)
    // divdisplay= document.getElementById(divdisplay)
    // //showButton.classList.toggle("show");
    // showButton.addEventListener('click', function() {
    //     divdisplay.classList.toggle("hide");
    // })
    // callFunctionjs = document.getElementById(functionIdJs)
    // callFunctionjs.addEventListener('click', functionJs)
    // console.log( callFunctionjs.addEventListener('click', functionJs))

    // callFunctionjq = document.getElementById(functionIdJq)
    // callFunctionjq.addEventListener('click', functionJq)

}

//createDiv('Button', 'document.createElement("button") ', '${<button/>}')

var allElements = [
    {
        title: `Create Element`,
        idButtonClick: 'createElementidButtonClick',
        divdisplay: 'createElementdivdisplay',
        functionIdJs: 'createElementfunctionIdJs',
        functionJs: () => { createElementfunctionJs() },
        jsText: 'el = document.createElement("span");<br>el.innerHTML = "text";',
        IdTestResultjs: 'createElementIdTestResultjs',
        functionIdJq: 'createElementfunctionIdJq',
        functionJq: () => { createElementfunctionJq() },
        jqText: 'var el = $("&lt;span&gt; "+"text" +"&lt;span&gt;");<br> var div = $("#foo")',
        IdTestResultjq: 'createElementIdTestResultjq'
    },
    {
        title: `Remove Element`,
        idButtonClick: 'removeElementidButtonClick',
        divdisplay: 'removeElementdivdisplay',
        functionIdJs: 'removeElementfunctionIdJs',
        functionJs: () => { removeElementfunctionJs() },
        jsText: 'el = document.removeElement("span");<br>el.innerHTML = "text";',
        IdTestResultjs: 'removeElementIdTestResultjs',
        functionIdJq: 'removeElementfunctionIdJq',
        functionJq: () => { removeElementfunctionJq() },
        jqText: 'var el = $("&lt;span&gt; "+"text" +"&lt;span&gt;");<br> var div = $("#foo")',
        IdTestResultjq: 'removeElementIdTestResultjq'
    },
]

function pepe() {
    allElements.forEach(function (elem) {
        createDiv(elem.title, elem.idButtonClick, elem.divdisplay, elem.functionIdJs, elem.functionJs, elem.jsText, elem.IdTestResultjs, elem.functionIdJq, elem.functionJq, elem.jqText, elem.IdTestResultjq)
    })

    allElements.forEach(function (elem) {
        let divdisplay = document.getElementById(elem.divdisplay)

        let showButton = document.getElementById(elem.idButtonClick)
        showButton.addEventListener('click', function () {
            divdisplay.classList.toggle("hide");
        })

        let callFunctionjs = document.getElementById(elem.functionIdJs)
        callFunctionjs.addEventListener('click', elem.functionJs)

        let callFunctionjq = document.getElementById(elem.functionIdJq)
        callFunctionjq.addEventListener('click', elem.functionJq)
    })
}


function hideFunc() {
    divToHide = document.getElementById('button-display')
    console.log(divToHide.classList)
    if (divToHide.classList[1] == 'show') {
        divToHide.classList.remove('show')
        divToHide.classList.add('hide')
    } else
        if (divToHide.classList[1] == 'hide') {
            divToHide.classList.remove('hide')
            divToHide.classList.add('show')
        }
}

function buttonTest(father) {
    var btn = document.createElement('button')
    btn.textContent = 'Button Test'
    btn.setAttribute('id', 'button-test')
    btn.classList.add('btn')
    btn.classList.add('btn-danger')
    divtest = document.getElementById(father)
    divtest.appendChild(btn)
}

function refreshDom() {

}