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
}



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
function createaDiv(title, idButtonClick, divdisplay, functionIdJs, functionJs, jsText, IdTestResultjs, functionIdJq, functionJq, jqText, IdTestResultjq) {
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
}



var allEvents = [
    {
        title: `When the HTML document has been loaded`,
        idButtonClick: 'HTMLLoadedElementidButtonClick',
        divdisplay: 'HTMLLoadedElementdivdisplay',
        functionIdJs: 'HTMLLoadedElementfunctionIdJs',
        functionJs: () => { htmlLoadedElementfunctionIdJs() },
        jsText: 'document.onload()',
        IdTestResultjs: 'HTMLLoadedElementIdTestResultjs',
        functionIdJq: 'HTMLLoadedElementfunctionIdJq',
        functionJq: () => { htmlLoadedElementfunctionIdJq() },
        jqText: '$(document).ready()',
        IdTestResultjq: 'HTMLLoadedElementIdTestResultjq'
    },
    {
        title: `When an HTML item has been clicked`,
        idButtonClick: 'clickElementidButtonClick',
        divdisplay: 'clickElementdivdisplay',
        functionIdJs: 'clickElementfunctionIdJs',
        functionJs: () => { clickElementfunctionIdJs() },
        jsText: 'document.addEventListener("click"()=>{<br>console.log("click")<br>})',
        IdTestResultjs: 'clickElementIdTestResultjs',
        functionIdJq: 'clickElementfunctionIdJq',
        functionJq: () => { clickElementfunctionIdJq() },
        jqText: '$(".myvalue").click(()=>{<br>console.log("click")<br>})',
        IdTestResultjq: 'clickElementIdTestResultjq'
    },
    {
        title: `When an HTML item has been double clicked`,
        idButtonClick: 'dblclickElementidButtonClick',
        divdisplay: 'dblclickElementdivdisplay',
        functionIdJs: 'dblclickElementfunctionIdJs',
        functionJs: () => { dblclickElementfunctionIdJs()},
        jsText: 'document.addEventListener("dblclick",()=>{console.log("dble click")<br>)}',
        IdTestResultjs: 'dblclickElementIdTestResultjs',
        functionIdJq: 'dblclickElementfunctionIdJq',
        functionJq: () => { dblclickElementfunctionIdJq()},
        jqText: '$(".myvalue").dblclick(()=>{console.log("dble click")<br>})',
        IdTestResultjq: 'dblclickElementIdTestResultjq'
    },
    {
        title: `When the user presses a key on the keyboard`,
        idButtonClick: 'keyElementidButtonClick',
        divdisplay: 'keyElementdivdisplay',
        functionIdJs: 'keyElementfunctionIdJs',
        functionJs: () => { keyListenerjs()},
        jsText: 'window.addEventListener("keydown", function(e){document.querySelector("p").innerHTML=` You pressed ${e.key}`}, false)',
        IdTestResultjs: 'keyElementIdTestResultjs',
        functionIdJq: 'keyElementfunctionIdJq',
        functionJq: () => { keyListenerjq()},
        jqText: '$("target").keypress(function(){console.log("Handler for keypress() called."',
        IdTestResultjq: 'keyElementIdTestResultjq'
    },
    {
        title: `When the user moves the mouse cursor`,
        idButtonClick: 'cursorElementidButtonClick',
        divdisplay: 'cursorElementdivdisplay',
        functionIdJs: 'cursorElementfunctionIdJs',
        functionJs: () => {cursorElementfunctionIdJs()},
        jsText: 'document.onmousemove(function(e){console.log(`mouse location = X: ${e.x}, Y: ${e.y}`)})',
        IdTestResultjs: 'cursorElementIdTestResultjs',
        functionIdJq: 'cursorElementfunctionIdJq',
        functionJq: () => { cursorElementfunctionIdJq()},
        jqText: '$(document).bind("mousesmove", function(e){ $("log").text("e.pagex: " + e.pageX + ", e.pageY + e.pageY)})',
        IdTestResultjq: 'cursorElementIdTestResultjq'
    },
    {
        title: `When the user changes a value of an text input`,
        idButtonClick: 'valueInputElementidButtonClick',
        divdisplay: 'valueInputElementdivdisplay',
        functionIdJs: 'valueInputElementfunctionIdJs',
        functionJs: () => {valueInputElementfunctionIdJs()},
        jsText: 'let input = document.createElement("input")<br>document.getElementById("valueInputElementIdTestResultjs").appendChild(input)<br>document.getElementById("valueInputElementIdTestResultjs").<br>addEventListener("change", function(){alert("Input Changed")})',
        IdTestResultjs: 'valueInputElementIdTestResultjs',
        functionIdJq: 'valueInputElementfunctionIdJq',
        functionJq: () => { valueInputElementfunctionIdJq()},
        jqText: 'Let input = $("&lt;input&gt;")<br>$("#valueInputElementIdTestResultjq").append(input)("#valueInputElementIdTestResultjq").on("change", function(){alert("Input Changed")})',
        IdTestResultjq: 'valueInputElementIdTestResultjq'
    },
    {
        title: `When an image is loaded`,
        idButtonClick: 'imageloadInputElementidButtonClick',
        divdisplay: 'imageloadInputElementdivdisplay',
        functionIdJs: 'imageloadInputElementfunctionIdJs',
        functionJs: () => {imageloadInputElementfunctionIdJs()},
        jsText: 'let input= document.createElement)"input")<br>input.setAttribute("type","file)<br>input.setAttribute("accept","image/png, image/jpeg")<br>document.getElementyId("imageloadInputElementIdTestResult.js")<br>.appendChild(input)',
        IdTestResultjs: 'imageloadInputElementIdTestResultjs',
        functionIdJq: 'imageloadInputElementfunctionIdJq',
        functionJq: () => { imageloadInputElementfunctionIdJq()},
        jqText: 'Let input = $("&lt;input&gt;")<br>$("#valueInputElementIdTestResultjq").append(input)("#valueInputElementIdTestResultjq").on("change", function(){alert("Input Changed")})',
        IdTestResultjq: 'imageloadInputElementIdTestResultjq'
    },
    {
        title: `When an image fails to load`,
        idButtonClick: 'failImageloadInputElementidButtonClick',
        divdisplay: 'failImageloadInputElementdivdisplay',
        functionIdJs: 'failImageloadInputElementfunctionIdJs',
        functionJs: () => {failImageloadInputElementIdTestResultjs()},
        jsText: 'let input= document.createElement)"input")<br>input.setAttribute("type","file)<br>input.setAttribute("accept","image/png, image/jpeg")<br>document.getElementyId("imageloadInputElementIdTestResult.js")<br>.appendChild(input)',
        IdTestResultjs: 'failImageloadInputElementIdTestResultjs',
        functionIdJq: 'failImageloadInputElementfunctionIdJq',
        functionJq: () => { failImageloadInputElementIdTestResultjq()},
        jqText: 'Let input = $("&lt;input&gt;")<br>$("#valueInputElementIdTestResultjq").append(input)("#valueInputElementIdTestResultjq").on("change", function(){alert("Input Changed")})',
        IdTestResultjq: 'failImageloadInputElementIdTestResultjq'
    },
    {
        title: `When a form is submitted`,
        idButtonClick: 'formSubmloadInputElementidButtonClick',
        divdisplay: 'formSubmloadInputElementdivdisplay',
        functionIdJs: 'formSubmloadInputElementfunctionIdJs',
        functionJs: () => {formSubmloadInputElementfunctionIdJs()},
        jsText: 'document.getElementById("myForm").submit()',
        IdTestResultjs: 'formSubmloadInputElementIdTestResultjs',
        functionIdJq: 'formSubmloadInputElementfunctionIdJq',
        functionJq: () => { formSubmloadInputElementfunctionIdJq()},
        jqText: 'Let input = $("&lt;input&gt;")<br>$("#valueInputElementIdTestResultjq").append(input)("#valueInputElementIdTestResultjq").on("change", function(){alert("Input Changed")})',
        IdTestResultjq: 'formSubmloadInputElementIdTestResultjq'
    },
    {
        title: `When the user changes the option of a select element`,
        idButtonClick: 'changSelectInputElementidButtonClick',
        divdisplay: 'changSelectInputElementdivdisplay',
        functionIdJs: 'changSelectInputElementfunctionIdJs',
        functionJs: () => { changSelectInputElementfunctionIdJs()},
        jsText: 'function myFunction() {var x = document.getElementById("mySelect").value;<br>document.getElementById("demo").innerHTML = "You selected: " + x;}',
        IdTestResultjs: 'changSelectInputElementIdTestResultjs',
        functionIdJq: 'changSelectInputElementfunctionIdJq',
        functionJq: () => { changSelectInputElementfunctionIdJq()},
        jqText: '$(".target").change(function () {alert("Handler for .change() called.");});',
        IdTestResultjq: 'changSelectInputElementIdTestResultjq'
    },
    {
        title: `When you position the mouse over an element`,
        idButtonClick: 'posiMouseElementidButtonClick',
        divdisplay: 'posiMouseElementdivdisplay',
        functionIdJs: 'posiMouseElementfunctionIdJs',
        functionJs: () => { posiMouseElementfunctionIdJs()},
        jsText: 'document.getElementById("demo").onmouseover = function () {mouseOver()};',
        IdTestResultjs: 'posiMouseElementIdTestResultjs',
        functionIdJq: 'posiMouseElementfunctionIdJq',
        functionJq: () => { posiMouseElementfunctionIdJq()},
        jqText: '$("#outer").mouseover(function () { })',
        IdTestResultjq: 'posiMouseElementIdTestResultjq'
    },
    {
        title: `When a checkbox is checked or unchecked`,
        idButtonClick: 'checkboxElementidButtonClick',
        divdisplay: 'checkboxElementdivdisplay',
        functionIdJs: 'checkboxElementfunctionIdJs',
        functionJs: () => {checkboxElementfunctionIdJs()},
        jsText: 'function validate() {if (document.getElementById("X").checked) {alert("checked");} else {alert("You didnt check it!");}}',
        IdTestResultjs: 'checkboxElementIdTestResultjs',
        functionIdJq: 'checkboxElementfunctionIdJq',
        functionJq: () => {checkboxElementfunctionIdJq()},
        jqText: '$(".checkbox").change(function () {if (this.checked){//Do stuff}}})',
        IdTestResultjq: 'checkboxElementIdTestResultjq'
    },
    {
        title: `When a ul list item is clicked, show the item that was clicked`,
        idButtonClick: 'ullistElementidButtonClick',
        divdisplay: 'ullistElementdivdisplay',
        functionIdJs: 'ullistElementfunctionIdJs',
        functionJs: () => {ullistElementfunctionIdJs()},
        jsText: 'li.setAttribute("id", "p1li"); li2.setAttribute("id", "p2li"); document.getElementById("p1li").addEventListener("click", (e)=>{alert("selected one")})document.getElementById("p2li").addEventListener("click", ()=>{alert("selected two")})',
        IdTestResultjs: 'ullistElementIdTestResultjs',
        functionIdJq: 'ullistElementfunctionIdJq',
        functionJq: () => {ullistElementfunctionIdJq()},
        jqText: '$("li.submenu a[href="#"]").click(function (e) {e.preventDefault();$("ul.ul_submenu").css("display", "block");})',
        IdTestResultjq: 'ullistElementIdTestResultjq'
    },
    //Selectors
    {
        title: `Get all the elements that have a certain class and the display property of none and change their font color and the display itself so it’s visible`,
        idButtonClick: 'displaynoneandblockElementidButtonClick',
        divdisplay: 'displaynoneandblockElementdivdisplay',
        functionIdJs: 'displaynoneandblockElementfunctionIdJs',
        functionJs: () => {displaynoneandblockElementfunctionIdJs()},
        jsText: 'li.setAttribute("id", "p1li"); li2.setAttribute("id", "p2li"); document.getElementById("p1li").addEventListener("click", (e)=>{alert("selected one")})document.getElementById("p2li").addEventListener("click", ()=>{alert("selected two")})',
        IdTestResultjs: 'displaynoneandblockElementIdTestResultjs',
        functionIdJq: 'displaynoneandblockElementfunctionIdJq',
        functionJq: () => {displaynoneandblockElementfunctionIdJq()},
        jqText: '$("li.submenu a[href="#"]").click(function (e) {e.preventDefault();$("ul.ul_submenu").css("display", "block");})',
        IdTestResultjq: 'displaynoneandblockElementIdTestResultjq'
    }
]

function functionsF() {
    allEvents.forEach(function (elem) {
        createaDiv(elem.title, elem.idButtonClick, elem.divdisplay, elem.functionIdJs, elem.functionJs, elem.jsText, elem.IdTestResultjs, elem.functionIdJq, elem.functionJq, elem.jqText, elem.IdTestResultjq)
    })

    allEvents.forEach(function (elem) {
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

