var events = document.querySelectorAll("p")
var modalDiv = document.getElementById("myModal")
var span = document.getElementsByClassName("close")[0];
var contentJS = document.getElementById("contentJavascript")
var jsSpace = document.getElementById("jsSpace")
var br = document.createElement("br")
var html = document.querySelector("html")

function createElements0() {
    createElements0JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", textCreate)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "var element =In JS: document.createElement(tagName, [options])"
    divContent.appendChild(btn)
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements1() {
    createElements1JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("p")
    cheatWork.textContent = "Click twice to inner a new text"
    cheatWork.addEventListener("dblclick", textCreate)
    cheatWork.style.cursor = "pointer"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheat.textContent = "In HTML: <element ondblclick='myScript'>"
    cheat1.textContent = "In JS: object.ondblclick = function(){myScript}; OR object.addEventListener('dblclick', myScript);"
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements2() {
    createElements2JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheat2 = document.createElement("p")
    var cheat3 = document.createElement("p")
    var cheatWork = document.createElement("input")
    cheatWork.addEventListener("keypress", textCreate)
    cheat.textContent = "There are three options: keydown, keypress, o keyup"
    cheat1.textContent = "Example with keypress"
    cheat2.textContent = "In HTML: <element onkeypress='myScript'>"
    cheat3.textContent = "In JS: object.onkeypress = function(){myScript}; OR object.addEventListener('keypress', myScript);"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheat1)
    divContent.appendChild(cheat2)
    divContent.appendChild(cheat3)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements3() {
    createElements3JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheat2 = document.createElement("p")
    var cheat3 = document.createElement("p")
    var cheatWork = document.createElement("p")
    cheatWork.addEventListener("mouseover", textCreate)
    cheat.textContent = "There are a lot of options: mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup"
    cheat1.textContent = "Example with mouseover"
    cheat2.textContent = "In HTML: <element onmousemove='myScript'>"
    cheat3.textContent = "In JS: object.onmousemove = function(){myScript}; OR object.addEventListener('mousemove', myScript);"
    cheatWork.textContent = "Move the cursor on this paragraph"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheat1)
    divContent.appendChild(cheat2)
    divContent.appendChild(cheat3)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements4() {
    createElements4JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("input")
    cheatWork.addEventListener("change", textCreate)
    cheatWork.setAttribute("placeholder", "Change text to do an action")
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheat.textContent = "In HTML: <element onchange='myScript'>"
    cheat1.textContent = "In JS: object.onchange = function(){myScript}; OR object.addEventListener('change', myScript);"
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements5() {
    createElements5JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheatWork = document.createElement("img")
    var cheatResult = document.createElement("p")
    cheatWork.setAttribute("src", "assets/LOGO-ORG.png")
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    divContent.appendChild(cheatResult)
    cheat.textContent = "In JS: imageObject.complete"
    cheatWork.complete = cheatResult.textContent = "This will be showed if image has been loaded"
    }
    function createElements6() {
        createElements6JQ()
        var divContent = document.createElement("div")
        var cheat = document.createElement("p")
        var cheatWork = document.createElement("img")
        var cheatResult = document.createElement("p")
        cheatWork.setAttribute("src", "a")
        cheatWork.setAttribute("width", "150")
        cheatWork.setAttribute("height", "150")
        contentJS.appendChild(divContent)
        divContent.appendChild(cheat)
        divContent.appendChild(br)
        divContent.appendChild(cheatWork)
        divContent.appendChild(cheatResult)
        cheat.textContent = "In JS: if (imageObject.complete) {} else { event we want to happend }"
        if (cheatWork.complete) {
            cheatResult.textContent = "This will be showed if image has been loaded"
        } else {
            cheatResult.textContent = "This will be showed if image has been not loaded"
    }
}
function createElements7() {
    createElements7JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("form")
    var cheatWork1 = document.createElement("input")
    var cheatWork2 = document.createElement("input")
    cheatWork2.setAttribute("type", "submit")
    cheatWork.addEventListener("submit", textCreate)
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheatWork.appendChild(cheatWork1)
    cheatWork.appendChild(cheatWork2)
    cheat.textContent = "In HTML: <element onsubmit='myScript'>"
    cheat1.textContent = "In JS: object.onsubmit = function(){myScript}; OR object.addEventListener('submit', myScript);"
    function textCreate() {
        alert("Your form has been submitted")
    }
}
function createElements8() {
    createElements8JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("select")
    var cheatWork1 = document.createElement("option")
    var cheatWork2 = document.createElement("option")
    var cheatWork3 = document.createElement("option")
    cheatWork1.textContent = "Car"
    cheatWork2.textContent = "Bus"
    cheatWork3.textContent = "Motorbike"
    cheatWork.addEventListener("change", textCreate)
    cheatWork.setAttribute("placeholder", "Change text to do an action")
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheatWork.appendChild(cheatWork1)
    cheatWork.appendChild(cheatWork2)
    cheatWork.appendChild(cheatWork3)
    cheat.textContent = "In HTML: <element onchange='myScript'>"
    cheat1.textContent = "In JS: object.onchange = function(){myScript}; OR object.addEventListener('change', myScript);"
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "You changed the option"
    }
}
function createElements9() {
    createElements9JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheat2 = document.createElement("p")
    var cheat3 = document.createElement("p")
    var cheatWork = document.createElement("p")
    cheatWork.addEventListener("mouseover", textCreate)
    cheat.textContent = "There are a lot of options: mousedown, mouseenter, mouseleave, mousemove, mouseover, mouseout, mouseup"
    cheat1.textContent = "Example with mouseover"
    cheat2.textContent = "In HTML: <element onmousemove='myScript'>"
    cheat3.textContent = "In JS: object.onmousemove = function(){myScript}; OR object.addEventListener('mousemove', myScript);"
    cheatWork.textContent = "Move the cursor on this paragraph"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheat1)
    divContent.appendChild(cheat2)
    divContent.appendChild(cheat3)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements10() {
    createElements10JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheatWork = document.createElement("input")
    cheatWork.setAttribute("type", "checkbox")
    cheatWork.addEventListener("click", textCreate)
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheat.textContent = "In JS: checkboxObject.checked"
    function textCreate() {
    if (cheatWork.checked) {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "The checkbox is checked"
    } else {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "The checkbox is not checked"
    }
}
}
function createElements11() {
    createElements11JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("li")
    cheatWork.textContent = "Car"
    cheatWork.addEventListener("click", cheatWorkContent)
    cheatWork.style.cursor = "pointer"
    var cheatWork1 = document.createElement("li")
    cheatWork1.textContent = "Bus"
    cheatWork1.addEventListener("click", cheatWorkContent1)
    cheatWork1.style.cursor = "pointer"
    var cheatWork2 = document.createElement("li")
    cheatWork2.textContent = "Motorbike"
    cheatWork2.addEventListener("click", cheatWorkContent2)
    cheatWork2.style.cursor = "pointer"
    cheat.textContent = "In HTML: <element onclick='myScript'>"
    cheat1.textContent = "In JS: object.onclick = function(){myScript}; OR object.addEventListener('click', myScript);"

    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(br)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    divContent.appendChild(cheatWork1)
    divContent.appendChild(cheatWork2)

    function cheatWorkContent() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Car"
    }
    function cheatWorkContent1() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Bus"
    }
    function cheatWorkContent2() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Motorbike"
    }
}
function createElements12() {
    createElements12JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var cheat1 = document.createElement("p")
    var cheatWork = document.createElement("p")

    cheatWork.style.cursor = "pointer"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(cheat1)
    divContent.appendChild(br)
    divContent.appendChild(cheatWork)
    cheat.textContent = "In HTML: <element onload='myScript'>>"
    cheat1.textContent = "In JS: object.onload = function(){myScript}; OR object.object.addEventListener('load', myScript);"
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "HTML loaded, you can manipulate the JS"
    }
    html.addEventListener("load", textCreate())
}
function createElements13() {
    createElements13JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var btn2 = document.createElement("button")
    var p = document.createElement("p")
    btn.addEventListener("click", createElement)
    btn2.addEventListener("click", deleteElement)
    btn.textContent = "Click me to create"
    btn2.textContent = "Click me to delete"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: document.remove()"
    divContent.appendChild(btn)
    divContent.appendChild(btn2)
    function createElement() {
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
    function deleteElement(){
        p.remove()
    }
}
function createElements14() {
    createElements14JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to append"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.appendChild(node)"
    divContent.appendChild(btn)
    function createElement() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements15() {
    createElements15JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to prepend"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.prepend(node)"
    divContent.appendChild(btn)
    function createElement() {
        var p = document.createElement("p")
        divContent.prepend(p)
        p.innerText = "Hello"
    }
}
function createElements16() {
    createElements16JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to write after"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.after(node)"
    divContent.appendChild(btn)
    function createElement() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements17() {
    createElements17JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to write before"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.before(node)"
    divContent.appendChild(btn)
    function createElement() {
        var p = document.createElement("p")
        divContent.prepend(p)
        p.innerText = "Hello"
    }
}
function createElements18() {
    createElements18JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to clone Hello"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.cloneNode(node)"
    divContent.appendChild(btn)
    function createElement() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
function createElements19() {
    createElements19JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to add red background class"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: element.classList.add(' ')"
    divContent.appendChild(btn)
    function createElement() {
        btn.classList.add("red")
    }
}
function createElements20() {
    createElements20JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.classList.add("red")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to add remove background class"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: element.classList.remove(' ')"
    divContent.appendChild(btn)
    function createElement() {
        btn.classList.remove("red")
    }
}
function createElements21() {
    createElements21JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to toggle red background class"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: element.toggle(' ')"
    divContent.appendChild(btn)
    function createElement() {
        btn.classList.toggle("red")
    }
}
function createElements22() {
    createElements22JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click to disable"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: aSelectElement.disabled = aBool;"
    divContent.appendChild(btn)
    function createElement() {
        btn.disabled = true
    }
}
function createElements23() {
    createElements23JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var btn1 = document.createElement("button")
    btn.textContent = "Disabled button"
    btn1.addEventListener("click", createElement)
    btn1.textContent = "Click to enable"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: aSelectElement.disabled = aBool;"
    divContent.appendChild(btn)
    divContent.appendChild(btn1)
    btn.disabled = true
    function createElement() {
        btn.disabled = false
    }
}
function createElements24() {
    createElements24JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var imgCreate = document.createElement("img")
    imgCreate.setAttribute("src", "assets/LOGO-ORG.png")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to set data-src"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: imageObject.settAttribute('data-src', 'set the name')"
    divContent.appendChild(imgCreate)
    divContent.appendChild(br)
    divContent.appendChild(btn)
    function createElement() {
        imgCreate.setAttribute("data-src", "CREATED")
    }
}
function createElements25() {
    createElements25JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var imgCreate = document.createElement("img")
    imgCreate.setAttribute("src", "assets/LOGO-ORG.png")
    imgCreate.setAttribute("data-src", "CREATED")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to remvoe data-src"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: imageObject.removeAttribute('data-src')"
    divContent.appendChild(imgCreate)
    divContent.appendChild(br)
    divContent.appendChild(btn)
    function createElement() {
        imgCreate.removeAttribute("data-src")
    }
}
function createElements26() {
    createElements26JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me to hide this button"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: Object.style.display = 'none'"
    divContent.appendChild(btn)
    function createElement() {
        btn.style.display = "none"
    }
}
function createElements27() {
    createElements27JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var btn1 = document.createElement("button")
    btn1.addEventListener("click", createElement)
    btn.style.display = "none"
    btn.textContent = "Hello"
    btn1.textContent = "Click me to show the other button"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: Object.style.display = 'none'"
    divContent.appendChild(btn)
    divContent.appendChild(btn1)
    function createElement() {
        btn.style.display = "block"
    }
}
function createElements28() {
    createElements28JQ()
    var divContent = document.createElement("div")
    contentJS.appendChild(divContent)
}
function createElements29(){
    createElements29JQ()
    var divContent = document.createElement("div")
    contentJS.appendChild(divContent)
}
function createElements30() {
    createElements30JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    function createLi() {
        var li = document.createElement("li")
        li.className="liClass"
        li.textContent = "List Element with class liClass"
        divContent.appendChild(li)
    }
    function createLiNoClass(){
        var li = document.createElement("li")
        li.textContent = "List Element with no class"
        divContent.appendChild(li)
    }
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: document.querySelectorAll('.class'))"
    divContent.appendChild(btn)
    createLi();createLi();
    createLiNoClass()
    function createElement() {
        var x = document.querySelectorAll(".liClass")
        for (var i = 0; i < x.length; i++) {
            x[i].classList.add("red")
        }
    }
}
function createElements31() {
    createElements31JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var helloP = document.createElement("p")
    var helloS = document.createElement("p")
    helloP.textContent = "I'm the parent"
    helloS.textContent = "I'm the son"
    btn.addEventListener("click", textCreate)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.parentElement.style.fontSize=''"
    divContent.appendChild(btn)
    divContent.appendChild(helloP)
    helloP.appendChild(helloS)
    function textCreate() {
        helloS.parentElement.style.fontSize = "25px"
    }
}
function createElements32() {
    createElements32JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var helloP = document.createElement("p")
    var helloS = document.createElement("p")
    helloP.textContent = "I'm the parent"
    helloS.textContent = "I'm the son"
    btn.addEventListener("click", textCreate)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.children"
    divContent.appendChild(btn)
    divContent.appendChild(helloP)
    helloP.appendChild(helloS)
    function textCreate() {
        var childDiv = helloP.children
        for (var i = 0; i < childDiv.length; i++) {
            childDiv[i].style.fontSize = "25px"}
    }
}
function createElements33() {
    createElements33JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    function createLi() {
        var li = document.createElement("li")
        li.className="liClassJs"
        li.textContent = "List Element with class liClassJs"
        divContent.appendChild(li)
    }
    function createLiNoClass(){
        var li = document.createElement("li")
        li.textContent = "List Element with no class"
        divContent.appendChild(li)
    }
    btn.addEventListener("click", createElement)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: document.querySelectorAll('.class'))"
    divContent.appendChild(btn)
    createLi();createLi();
    createLiNoClass()
    function createElement() {
        var x = document.querySelectorAll(".liClassJs")
        for (var i = 0; i < x.length; i++) {
            x[i].style.fontSize = "25px"
        }
    }
}
function createElements34() {
    createElements34JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var helloP = document.createElement("p")
    var helloS = document.createElement("p")
    helloP.id = "firstP"
    helloS.id = "secondP"
    helloP.textContent = "My id is firstP"
    helloS.textContent = "My id is secondP"
    btn.addEventListener("click", textCreate)
    btn.textContent = "Change css of id firstP"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: node.parentElement.style.fontSize=''"
    divContent.appendChild(btn)
    divContent.appendChild(helloP)
    divContent.appendChild(helloS)
    function textCreate() {
        document.getElementById("firstP").style.fontSize = "25px"
    }
}
function createElements35() {
    createElements35JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var helloP = document.createElement("p")
    var helloS = document.createElement("p")
    helloP.id = "helloP"
    helloS.id = "helloS"
    helloP.style.display = "none"
    helloS.style.display = "none"
    helloP.textContent = "Now you can see me"
    helloS.textContent = "Now you can see me, and in green"
    btn.addEventListener("click", textCreate)
    btn.textContent = "Display block"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: object.style.property=''"
    divContent.appendChild(btn)
    divContent.appendChild(helloP)
    divContent.appendChild(helloS)
    function textCreate() {
        helloP.style.display = "block"
        helloS.style.display = "block"
        helloS.style.color = "green"
    }
}
function createElements36() {
    createElements36JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var helloP = document.createElement("select")
    var btn = document.createElement("button")
    var x = document.createElement("option")
    var y = document.createElement("option")
    var z = document.createElement("option")
    x.textContent = "Car"
    y.textContent = "Bus"
    z.textContent = "Motorbike"
    helloP.textContent = "Now you can see me"
    btn.addEventListener("click", textCreate)
    btn.textContent = "Alert selected"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    divContent.appendChild(btn)
    cheat.textContent = "In JS: object.style.property=''"
    divContent.appendChild(helloP)
    helloP.appendChild(x)
    helloP.appendChild(y)
    helloP.appendChild(z)
    function textCreate() {
        var strUser = helloP.options[helloP.selectedIndex].text
        alert(strUser)
    }
}
function createElements37() {
    createElements37JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    function newA() {
        var helloP = document.createElement("a")
        divContent.appendChild(helloP)
        helloP.textContent = "I'm a <a> element"
        helloP.className = "entire"
    }
    btn.addEventListener("click", textCreate)
    btn.textContent = "Change href"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: object.querySelector()"
    divContent.appendChild(btn)
    newA();newA();newA()
    function textCreate() {
        var a = document.querySelector("a")
        a.href="https://www.youtube.com"
    }
}
function createElements38() {
    createElements38JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    var helloP = document.createElement("input")
    btn.addEventListener("click", textCreate)
    btn.textContent = "Alert input"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: object.value"
    divContent.appendChild(btn)
    divContent.appendChild(br)
    divContent.appendChild(helloP)
    function textCreate() {
        var x = divContent.querySelector("input")
        alert(x.value)
    }
}
function createElements39() {
    createElements39JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    function createLi() {
        var li = document.createElement("li")
        li.className="liClassJs"
        li.textContent = "List Element with class liClassJs"
        divContent.appendChild(li)
    }
    function createLiNoClass(){
        var li = document.createElement("li")
        li.textContent = "List Element with no class"
        divContent.appendChild(li)
    }
    btn.addEventListener("click", createElement)
    btn.textContent = "Remove with liClassJs"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: object.remove"
    divContent.appendChild(btn)
    createLi();createLi();
    createLiNoClass()
    function createElement() {
        var x = document.querySelectorAll(".liClassJs")
        for (var i = 0; i < x.length; i++) {
            x[i].remove()
        }
    }
}
function createElements40() {
    createElements40JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var helloP = document.createElement("p")
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "In JS: setTimeout(function(), 2000)"
    divContent.appendChild(helloP)
    helloP.textContent ="Wait 2 seconds"
    divContent.addEventListener("load", textCreate())
    function textCreate() {
            setTimeout(
                function() {
                    helloP.style.color = "green"
                    helloP.style.fontSize = "30px"}, 2000)

        }
    }
function createElements41() {
    createElements41JQ()
    var divContent = document.createElement("div")
    var cheat = document.createElement("p")
    var btn = document.createElement("button")
    btn.addEventListener("click", textCreate)
    btn.textContent = "Click me"
    contentJS.appendChild(divContent)
    divContent.appendChild(cheat)
    cheat.textContent = "var element =In JS: document.createElement()<br>object.innertext = ' '"
    divContent.appendChild(btn)
    function textCreate() {
        var p = document.createElement("p")
        divContent.appendChild(p)
        p.innerText = "Hello"
    }
}
