//! Events

function htmlLoadedElementfunctionIdJs() {
    let p = document.createElement("p")
    p.textContent = "Document HTML loaded"
    document.getElementById("HTMLLoadedElementIdTestResultjs").appendChild(p)
}

function clickElementfunctionIdJs() {
    let p = document.createElement("p")
    p.textContent = "click"
    document.getElementById("clickElementIdTestResultjs").appendChild(p)
}

function dblclickElementfunctionIdJs() {
    let dblclick = document.getElementById("dblclickElementfunctionIdJs")
    dblclick.addEventListener("dblclick", () => {
        let pe = document.createElement("p")
        pe = "js Doble click"
        document.getElementById("dblclickElementIdTestResultjs").innerHTML = pe
    })
}

function keyListenerjs() {
    let prueba1 = document.getElementById("keyElementfunctionIdJs")
    prueba1.addEventListener('keydown', function (e) {
        let pruebajs = document.createElement("p")
        pruebajs = ` You pressed ${e.key}`
        document.getElementById("keyElementIdTestResultjs").innerHTML = pruebajs
    }, false);
}


function cursorElementfunctionIdJs() {
    let cursor = document.getElementById("cursorElementfunctionIdJs")
    cursor.addEventListener("mousemove", function (e) {
        let p = document.createElement("p")
        p = ` mouse location = x: ${e.x},Y:${e.y}`
        document.getElementById("cursorElementIdTestResultjs").innerHTML = p
    })
}

function valueInputElementfunctionIdJs() {
    let input = document.createElement("input")
    document.getElementById("valueInputElementIdTestResultjs").appendChild(input)
    document.getElementById("valueInputElementIdTestResultjs").addEventListener("change", function () {
        alert("Input Changed")
    })
}

function imageloadInputElementfunctionIdJs() {
    let input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/png, image/jpeg")
    document.getElementById("imageloadInputElementIdTestResultjs").appendChild(input)
    document.getElementById("imageloadInputElementIdTestResultjs").addEventListener("change", function () {
        alert("Image Loaded")
        console.log(input.files[0])
        let foto = input.files[0]
        let imageType = /image.*/;
        if (foto.type.match(imageType)) {
            var reader = new FileReader()
            reader.onload = function (e) {
                document.getElementById("imageloadInputElementIdTestResultjs").innerHTML = "";
                let img = new Image()
                img.src = reader.result;
                document.getElementById("imageloadInputElementIdTestResultjs").appendChild(img)
            }
            reader.readAsDataURL(foto)
        } else {
            document.getElementById("imageloadInputElementIdTestResultjs").innerHTML = "File not supported!"
        }
    })
}


function failImageloadInputElementIdTestResultjs() {
    let input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/png, image/jpeg")
    document.getElementById("failImageloadInputElementIdTestResultjs").appendChild(input)
    document.getElementById("failImageloadInputElementIdTestResultjs").addEventListener("change", function () {
        alert("Image has failed")
    })
}

function formSubmloadInputElementfunctionIdJs() {
    let inputform = document.createElement("input")
    inputform.value = "submit"
    inputform.setAttribute("type", "submit")
    document.getElementById("formSubmloadInputElementIdTestResultjs").appendChild(inputform)
    document.getElementById("formSubmloadInputElementIdTestResultjs").addEventListener("click", () => {
        alert("submitted")
    })
}

function changSelectInputElementfunctionIdJs() {
    let formElement = document.createElement("select");
    let optionElement = document.createElement("option");
    optionElement.value = "a";
    optionElement.text = "a"
    let optionElement2 = document.createElement("option");
    optionElement2.value = "b";
    optionElement2.text = "b";
    let optionElement3 = document.createElement("option");
    optionElement3.value = "c";
    optionElement3.text = "c";
    formElement.appendChild(optionElement);
    formElement.appendChild(optionElement2)
    formElement.appendChild(optionElement3)
    formElement.id = "bar";
    let testresultform = document.getElementById("changSelectInputElementIdTestResultjs")
    testresultform.appendChild(formElement)
    testresultform.addEventListener("change", () => {
        optionSelect = `You select ${formElement.value}`
        testresultform.innerHTML = optionSelect
    })
}

function posiMouseElementfunctionIdJs() {
    let boton = document.createElement("button")
    boton.textContent = "mouseover"
    document.getElementById("posiMouseElementIdTestResultjs").appendChild(boton)
    document.getElementById("posiMouseElementIdTestResultjs").addEventListener("mouseover", () => {
        let texto = document.createElement("p")
        texto.textContent = "mouseover detected"
        document.getElementById("posiMouseElementIdTestResultjs").appendChild(texto)
    })

}

function checkboxElementfunctionIdJs() {
    let inputcheckbox = document.createElement("input")
    inputcheckbox.setAttribute("type", "checkbox")
    let checkresult = document.getElementById("checkboxElementIdTestResultjs")
    checkresult.appendChild(inputcheckbox)
    checkresult.addEventListener("change", () => {
        if (inputcheckbox.checked == true) {
            alert("you have checked the box")
        } else if (inputcheckbox.checked == false)
            alert("you have unchecked the box")
    })
}

function ullistElementfunctionIdJs() {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    let li2 = document.createElement("li")
    li.innerText = "·one"
    li.setAttribute("id", "p1li")
    li2.innerText = "·two"
    li.style.color = "black"
    li2.setAttribute("id", "p2li")
    li2.style.color = "black"
    ul.appendChild(li)
    ul.appendChild(li2)
    document.getElementById("ullistElementIdTestResultjs").appendChild(ul)
    document.getElementById("p1li").addEventListener("click", (e) => {
        alert("selected one")
    })
    document.getElementById("p2li").addEventListener("click", () => {
        alert("selected two")
    })
}


function failImageloadInputElementIdTestResultjs() {
    let input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept", "image/png, image/jpeg")
    document.getElementById("failImageloadInputElementIdTestResultjs").appendChild(input)
    document.getElementById("failImageloadInputElementIdTestResultjs").addEventListener("change", function () {
        alert("Image has failed")
    })
}

function formSubmloadInputElementfunctionIdJs() {
    let inputform = document.createElement("input")
    inputform.value = "submit"
    inputform.setAttribute("type", "submit")
    document.getElementById("formSubmloadInputElementIdTestResultjs").appendChild(inputform)
    document.getElementById("formSubmloadInputElementIdTestResultjs").addEventListener("click", () => {
        alert("submitted")
    })
}

function changSelectInputElementfunctionIdJs() {
    let formElement = document.createElement("select");
    let optionElement = document.createElement("option");
    optionElement.value = "a";
    optionElement.text = "a"
    let optionElement2 = document.createElement("option");
    optionElement2.value = "b";
    optionElement2.text = "b";
    let optionElement3 = document.createElement("option");
    optionElement3.value = "c";
    optionElement3.text = "c";
    formElement.appendChild(optionElement);
    formElement.appendChild(optionElement2)
    formElement.appendChild(optionElement3)
    formElement.id = "bar";
    let testresultform = document.getElementById("changSelectInputElementIdTestResultjs")
    testresultform.appendChild(formElement)
    testresultform.addEventListener("change", () => {
        optionSelect = `You select ${formElement.value}`
        testresultform.innerHTML = optionSelect
    })
}

function posiMouseElementfunctionIdJs() {
    let boton = document.createElement("button")
    boton.textContent = "mouseover"
    document.getElementById("posiMouseElementIdTestResultjs").appendChild(boton)
    document.getElementById("posiMouseElementIdTestResultjs").addEventListener("mouseover", () => {
        let texto = document.createElement("p")
        texto.textContent = "mouseover detected"
        document.getElementById("posiMouseElementIdTestResultjs").appendChild(texto)
    })

}
function checkboxElementfunctionIdJs() {
    let inputcheckbox = document.createElement("input")
    inputcheckbox.setAttribute("type", "checkbox")
    let checkresult = document.getElementById("checkboxElementIdTestResultjs")
    checkresult.appendChild(inputcheckbox)
    checkresult.addEventListener("change", () => {
        if (inputcheckbox.checked == true) {
            alert("you have checked the box")
        } else if (inputcheckbox.checked == false)
            alert("you have unchecked the box")
    })
}
function ullistElementfunctionIdJs() {
    let ul = document.createElement("ul")
    let li = document.createElement("li")
    let li2 = document.createElement("li")
    li.innerText = "·one"
    li.setAttribute("id", "p1li")
    li2.innerText = "·two"
    li.style.color = "black"
    li2.setAttribute("id", "p2li")
    li2.style.color = "black"
    ul.appendChild(li)
    ul.appendChild(li2)
    document.getElementById("ullistElementIdTestResultjs").appendChild(ul)
    document.getElementById("p1li").addEventListener("click", (e) => {
        alert("selected one")
    })
    document.getElementById("p2li").addEventListener("click", () => {
        alert("selected two")
    })
}