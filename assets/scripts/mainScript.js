
function createaDiv(title, idButtonClick, divdisplay, functionIdJs, functionJs, jsText, IdTestResultjs, functionIdJq, functionJq, jqText, IdTestResultjq) {
    divContent = document.getElementById('content')

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

    divContent.innerHTML += content
}

function cleanDiv() {
    divContent = document.getElementById('content')
    divContent.innerHTML = ''
}

function buttonTest(father, id) {
    var btn = document.createElement('button')
    btn.textContent = 'Button Test'
    btn.setAttribute('id', id)
    btn.classList.add('btn')
    btn.classList.add('btn-danger')
    divtest = document.getElementById(father)
    divtest.appendChild(btn)
}

function functionsF(arrayName) {
    arrayName.forEach(function (elem) {
        createaDiv(elem.title, elem.idButtonClick, elem.divdisplay, elem.functionIdJs, elem.functionJs, elem.jsText, elem.IdTestResultjs, elem.functionIdJq, elem.functionJq, elem.jqText, elem.IdTestResultjq)
    })

    arrayName.forEach(function (elem) {
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

callEvents = document.getElementById('navBarEvents')
callEvents.addEventListener('click', () => {
    cleanDiv()
    functionsF(allEvents)
})

callFunctions = document.getElementById('navBarFunctions')
callFunctions.addEventListener('click', () => {
    cleanDiv()
    functionsF(allFunctions)
})
callSelectors = document.getElementById('navBarSelectors')
callSelectors.addEventListener('click', () => {
    cleanDiv()
    functionsF(allSelectors)
})
