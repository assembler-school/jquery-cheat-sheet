function exerciseJS0 (jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    // jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    // jScriptDiv.appendChild(divCode)

    // btnTry.addEventListener(click,()=>{})


}

function exerciseJS1(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("click", myFunction);'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("click",()=>{
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'I have been clicked'
        divCode.appendChild(divCode2)
    })

}
function exerciseJS2(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("dblclick", myFunction);'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("dblclick",()=>{
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'I have been dblclick'
        divCode.appendChild(divCode2)
    })
}
function exerciseJS3(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("keypress, myFunction);'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Press key"
    jScriptDiv.appendChild(btnTry)

    window.addEventListener("keypress",()=>{
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'Keypress has been realized'
        divCode.appendChild(divCode2)
    })
}
function exerciseJS4(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("mousemove, myFunction);'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("div")
    btnTry.classList.add("divCode")
    btnTry.textContent = "move mouse in this div"
    jScriptDiv.appendChild(btnTry)

    jScriptDiv.addEventListener("mousemove",removeMouse)
    
    function removeMouse(){
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'mouse has been moved into the div'
        divCode.appendChild(divCode2)
        jScriptDiv.removeEventListener("mousemove",removeMouse)
    }
}


function exerciseJS5(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("change", myFunction);'
    jScriptDiv.appendChild(divCode)   

    var btnTry = document.createElement("div")
    btnTry.classList.add("divCode")
    btnTry.textContent = "change a value of the text input"
    jScriptDiv.appendChild(btnTry)

    var formEntre = document.createElement("input")
    formEntre.classList.add("divCode")
    
    jScriptDiv.appendChild(formEntre)


    formEntre.addEventListener("change",()=>{
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'a value has been changed'
        jScriptDiv.appendChild(divCode2)
    })
}
function exerciseJS6(jScriptDiv){
    /* imagen cargada falta */
}
function exerciseJS7(jScriptDiv){
      /* imagen no cargada falta */
}
function exerciseJS8(jScriptDiv){
   /*form is submitted */
}
function exerciseJS9(jScriptDiv){
    /*changes the option of a select element */
}
function exerciseJS10(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.addEventListener("mouseover", myScript);'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "passes over me"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("mouseover",function  (){
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'passed over me'
        divCode.appendChild(divCode2)
        btnTry.removeEventListener("mousemove",hover)
    })
}
function exerciseJS11(jScriptDiv){
    /*●	When a checkbox is checked or unchecked */
}
function exerciseJS12(jScriptDiv){
    /*●	When a ul list item is clicked, show the item that was clicked */
}
function exerciseJS13(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'document.createElement("object");'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("click",()=>{
        var divCode2 = document.createElement("div")
        divCode2.classList.add("divCode2")
        divCode2.textContent = 'I have been created'
        divCode.appendChild(divCode2)
    })
}
function exerciseJS14(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'myobj.remove();'
    jScriptDiv.appendChild(divCode)

    var btnTry = document.createElement("div")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "click me"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("click",()=>{
        btnTry.remove()
    })
}
function exerciseJS15(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.append("Prepended item")'
    jScriptDiv.appendChild(divCode)

    var ulCode = document.createElement("ul")
    divCode.classList.add("divCode")
    jScriptDiv.appendChild(ulCode)

    var liCode1 = document.createElement("li")
    liCode1.classList.add("divCode")
    liCode1.textContent = 'element1'
    ulCode.appendChild(liCode1)

    var liCode2 = document.createElement("li")
    liCode2.classList.add("divCode")
    liCode2.textContent = 'element2'
    ulCode.appendChild(liCode2)

    var liCode3 = document.createElement("li")
    liCode3.classList.add("divCode")
    liCode3.textContent = 'element3'
    ulCode.appendChild(liCode3)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("click",()=>{
        ulCode.append("Apended item")
    })
}

function exerciseJS16(jScriptDiv){
    var divCode = document.createElement("div")
    divCode.classList.add("divCode")
    divCode.textContent = 'object.prepend("Prepended item")'
    jScriptDiv.appendChild(divCode)

    var ulCode = document.createElement("ul")
    divCode.classList.add("divCode")
    jScriptDiv.appendChild(ulCode)

    var liCode1 = document.createElement("li")
    liCode1.classList.add("divCode")
    liCode1.textContent = 'element1'
    ulCode.appendChild(liCode1)

    var liCode2 = document.createElement("li")
    liCode2.classList.add("divCode")
    liCode2.textContent = 'element2'
    ulCode.appendChild(liCode2)

    var liCode3 = document.createElement("li")
    liCode3.classList.add("divCode")
    liCode3.textContent = 'element3'
    ulCode.appendChild(liCode3)

    var btnTry = document.createElement("button")
    btnTry.classList.add("btnTry")
    btnTry.textContent = "Try it"
    jScriptDiv.appendChild(btnTry)

    btnTry.addEventListener("click",()=>{
        ulCode.prepend("Prepended item")
    })
}
function exerciseJS17(jScriptDiv){
    
}
function exerciseJS18(jScriptDiv){
    
}
function exerciseJS19(jScriptDiv){
    
}
function exerciseJS20(){
    
}
function exerciseJS21(){
    
}
function exerciseJS22(){
    
}
function exerciseJS23(){
    
}
function exerciseJS24(){
    
}
function exerciseJS25(){
    
}
function exerciseJS26(){
    
}
function exerciseJS27(){
    
}
function exerciseJS28(){
    
}
function exerciseJS29(){
    
}
function exerciseJS30(){
    
}
function exerciseJS31(){
    
}
function exerciseJS32(){
    
}
function exerciseJS33(){
    
}
function exerciseJS34(){
    
}
function exerciseJS35(){
    
}
function exerciseJS36(){
    
}
function exerciseJS37(){
    
}
function exerciseJS38(){
    
}
function exerciseJS39(){
    
}
function exerciseJS40(){
    
}
function exerciseJS41(){
    
}
function exerciseJS42(){
    
}
function exerciseJS43(){
    
}
// var copyBtnJS = document.createElement("button")


// divCode = document.createElement("button")
// divCode.classList.add("btnCopi")
// console.log("jose")