//! functions
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

//! Events

function htmlLoadedElementfunctionIdJs(){
    let p= document.createElement("p")
    p.textContent="Document HTML loaded"
    document.getElementById("HTMLLoadedElementIdTestResultjs").appendChild(p)
}

function clickElementfunctionIdJs(){
    let p= document.createElement("p")
    p.textContent="click"
    document.getElementById("clickElementIdTestResultjs").appendChild(p)
}
function dblclickElementfunctionIdJs(){
    let dblclick= document.getElementById("dblclickElementfunctionIdJs")
    dblclick.addEventListener("dblclick", ()=>{
        let pe= document.createElement("p")
        pe="js click"
        document.getElementById("dblclickElementIdTestResultjs").innerHTML= pe
    })
    // let pe= document.createElement("p")
    // pe.textContent="js click"
    // document.getElementById("dblclickElementIdTestResultjs").appendChild(p)
}
function keyListenerjs(){
    let prueba1= document.getElementById("keyElementfunctionIdJs")
    prueba1.addEventListener('keydown', function (e) {
        let pruebajs= document.createElement("p")
        pruebajs= ` You pressed ${e.key}`
        document.getElementById("keyElementIdTestResultjs").innerHTML= pruebajs
        // document.querySelector('p').innerHTML = `You pressed ${e.key}`;
    }, false);
}


function cursorElementfunctionIdJs(){
    let cursor= document.getElementById("cursorElementfunctionIdJs")
    cursor.addEventListener("mousemove", function(e){
        let p = document.createElement("p")
        p= ` mouse location = x: ${e.x},Y:${e.y}`
        document.getElementById("cursorElementIdTestResultjs").innerHTML= p
    })
}

function valueInputElementfunctionIdJs(){
    let input = document.createElement("input")
    // input.setAttribute("a", "b", "c")
    document.getElementById("valueInputElementIdTestResultjs").appendChild(input)
    document.getElementById("valueInputElementIdTestResultjs").addEventListener("change", function(){
        alert("Input Changed")
    })
}

function imageloadInputElementfunctionIdJs(){
    let input = document.createElement("input")
    input.setAttribute("type", "file")
    input.setAttribute("accept" ,"image/png, image/jpeg")
    document.getElementById("imageloadInputElementIdTestResultjs").appendChild(input)
    document.getElementById("imageloadInputElementIdTestResultjs").addEventListener("change", function(){
        alert("Image Loaded")
        console.log(input.files[0])
        let foto=input.files[0]
        let imageType=/image.*/;
        if (foto.type.match(imageType)){
            var reader = new FileReader()
            reader.onload=function(e){
                document.getElementById("imageloadInputElementIdTestResultjs").innerHTML="";
                let img=new Image()
                img.src=reader.result;
                document.getElementById("imageloadInputElementIdTestResultjs").appendChild(img)
            }
            reader.readAsDataURL(foto)
        } else{
            document.getElementById("imageloadInputElementIdTestResultjs").innerHTML="File not supported!"
        }
    })}


    function failImageloadInputElementIdTestResultjs(){
        let input = document.createElement("input")
        input.setAttribute("type", "file")
        input.setAttribute("accept" ,"image/png, image/jpeg")
        document.getElementById("failImageloadInputElementIdTestResultjs").appendChild(input)
        document.getElementById("failImageloadInputElementIdTestResultjs").addEventListener("change", function(){
            alert("Image has failed")
        })
    }

    function formSubmloadInputElementfunctionIdJs(){
        let inputform= document.createElement("input")
        inputform.value="submit"
        inputform.setAttribute("type","submit")
        document.getElementById("formSubmloadInputElementIdTestResultjs").appendChild(inputform)
        document.getElementById("formSubmloadInputElementIdTestResultjs").addEventListener("click", ()=>{
            alert("submitted")
        })
    }

    function changSelectInputElementfunctionIdJs(){
        let formElement = document.createElement("select");
let  optionElement = document.createElement("option");
optionElement.value = "a";
optionElement.text="a"
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
let testresultform= document.getElementById("changSelectInputElementIdTestResultjs")
testresultform.appendChild(formElement)
testresultform.addEventListener("change", ()=>{
            optionSelect=`You select ${formElement.value}`
            testresultform.innerHTML= optionSelect
        })
    }

    function posiMouseElementfunctionIdJs(){
        // $("#outer").mouseover(function () { })
        let boton=document.createElement("button")
        boton.textContent="mouseover"
        // boton.setAttribute("value", "mouseover")
        document.getElementById("posiMouseElementIdTestResultjs").appendChild(boton)
        document.getElementById("posiMouseElementIdTestResultjs").addEventListener("mouseover", ()=>{
            let texto= document.createElement("p")
            texto.textContent="mouseover detected"
            document.getElementById("posiMouseElementIdTestResultjs").appendChild(texto)
        })

    }
    function checkboxElementfunctionIdJs(){
        let inputcheckbox= document.createElement("input")
        inputcheckbox.setAttribute("type", "checkbox")
        let checkresult= document.getElementById("checkboxElementIdTestResultjs")
        checkresult.appendChild(inputcheckbox)
        // checkresult.checked=true
        checkresult.addEventListener("change", ()=>{
            if(inputcheckbox.checked == true){
                alert("you have checked the box")
            } else if(inputcheckbox.checked == false)
            alert("you have unchecked the box")
        })
    }
    function ullistElementfunctionIdJs(){
        let ul= document.createElement("ul")
        let li=document.createElement("li")
        let li2=document.createElement("li")
        li.innerText="·one"
        li.setAttribute("id", "p1li")
        li2.innerText="·two"
        li.style.color= "black"
        li2.setAttribute("id", "p2li")
        li2.style.color= "black"
        ul.appendChild(li)
        ul.appendChild(li2)
        document.getElementById("ullistElementIdTestResultjs").appendChild(ul)
        document.getElementById("p1li").addEventListener("click", (e)=>{
        alert("selected one")
        })
        document.getElementById("p2li").addEventListener("click", ()=>{
            alert("selected two")
        })
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
    let main= document.getElementById('setDataSrcIdTestResultjs')

    btn= document.getElementById('setDataSrcbtn')
    let image = document.createElement("img")
    image.src = './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg';
    main.appendChild(image);

    let pOne = document.createElement("p")
    pOne.innerText= "Don't have Data-src"
    image.after(pOne)

    btn.addEventListener('click', function () {
        image.setAttribute('data-src', 'This is a Data Src');
        pOne.innerText= image.getAttribute('data-src')
        image.after(pOne)
    } )
}

function removeDataSrcfunctionJs() {
    buttonTest('removeDataSrcIdTestResultjs', 'removeDataSrcbtn')
    let main= document.getElementById('removeDataSrcIdTestResultjs')

    btn= document.getElementById('removeDataSrcbtn')

    let image = document.createElement("img")
    image.src = './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg';
    main.appendChild(image);
    image.setAttribute('data-src', 'This is a Data Src');

    let pOne = document.createElement("p")
    pOne.innerText= image.getAttribute('data-src')
    image.after(pOne)

    btn.addEventListener('click', function () {
        image.removeAttribute('data-src')
        pOne.innerText= "Don't have Data-src"
        image.after(pOne)
    } )
}

function hideHTMLfunctionJs() {
    buttonTest('hideHTMLIdTestResultjs', 'hideHTMLbtn')
    let main= document.getElementById('hideHTMLIdTestResultjs')
    btn= document.getElementById('hideHTMLbtn')

    let pOne = document.createElement("p")
    pOne.innerText= 'This is a P '
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.display= 'none'
    })
}

function showHTMLfunctionJs() {
    buttonTest('showHTMLIdTestResultjs', 'showHTMLbtn')
    let main= document.getElementById('showHTMLIdTestResultjs')
    btn= document.getElementById('showHTMLbtn')

    let pOne = document.createElement("p")
    pOne.innerText= 'This is a P '
    pOne.style.display= 'none'
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.display= 'block'
    })
}

function fadeInfunctionJs() {
    buttonTest('fadeInIdTestResultjs', 'fadeInbtn')
    let main= document.getElementById('fadeInIdTestResultjs')
    btn= document.getElementById('fadeInbtn')

    let pOne = document.createElement("p")
    pOne.innerText= 'This is a P '
    main.appendChild(pOne)
    pOne.style.opacity="0";

    btn.addEventListener('click', function () {
        pOne.style.transition="opacity 1s";
        pOne.style.opacity= '100%';
    })
}

function fadeOutfunctionJs() {
    buttonTest('fadeOutIdTestResultjs', 'fadeoutbtn')
    let main= document.getElementById('fadeOutIdTestResultjs')
    btn= document.getElementById('fadeoutbtn')
    
    let pOne = document.createElement("p")
    pOne.innerText= 'This is a P '
    main.appendChild(pOne)

    btn.addEventListener('click', function () {
        pOne.style.transition="opacity 1s";
        pOne.style.opacity= '0';
    })
}


