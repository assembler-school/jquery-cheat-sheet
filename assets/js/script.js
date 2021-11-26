let optionP = $("p")
let optionPArr = Array.from(optionP)

optionPArr.forEach((element,index) => {
    element.addEventListener("click", function() {
        if (findExercisesFun(index)){
            createModal(element, findExercisesFun(index).functions)
        }else{
            return;
        }
    })
});
function createModal(element, cb){
    let bigDiv = document.createElement("div")
    bigDiv.classList.add("modalTransparent")
    bigDiv.setAttribute("id","modal")
    $("body").append(bigDiv)

    let smallDiv = document.createElement("div")
    smallDiv.classList.add("modalSmall")
    bigDiv.appendChild(smallDiv)

    let titleDiv = document.createElement("div")
    titleDiv.classList.add("title-container")
    titleDiv.textContent = element.textContent;
    smallDiv.appendChild(titleDiv)

    let jQueryDiv = document.createElement("div")
    jQueryDiv.classList.add("jQuery-container")
    smallDiv.appendChild(jQueryDiv)

    let jScriptDiv = document.createElement("div")
    jScriptDiv.classList.add("javaScript-container")
    smallDiv.appendChild(jScriptDiv)

    let buttonsDiv = document.createElement("div")
    buttonsDiv.classList.add("buttons-container")
    smallDiv.appendChild(buttonsDiv)

    let button1 = document.createElement("button")
    button1.classList.add("buttons-modal")
    button1.setAttribute("id","show-solution-button")
    button1.textContent = "Show Solution"
    buttonsDiv.appendChild(button1)

    let button2 = document.createElement("button")
    button2.classList.add("buttons-modal")
    button2.setAttribute("id","solution-button")
    button2.textContent = "Validate"
    buttonsDiv.appendChild(button2)

    removeModal(bigDiv)

    cb(jQueryDiv, jScriptDiv)
}
function removeModal(child){
    let bigDivClose = document.getElementById("modal")
    bigDivClose.addEventListener("click",(e)=>{
        if(e.target.matches(".modalTransparent")){
            document.body.removeChild(child)
            bigDivClose.removeEventListener;
        }
    })
}
function exerciseJS13(jScriptDiv){

    let jScriptDivInner2 = document.createElement("div")
    jScriptDivInner2.classList.add("jScript-container-inner")
    jScriptDivInner2.innerText = "CODE"
    jScriptDiv.appendChild(jScriptDivInner2)

    let jScriptDivInner3 = document.createElement("div")
    jScriptDivInner3.classList.add("jScript-container-inner")
    jScriptDivInner3.innerText = "PREVIEW"
    jScriptDiv.appendChild(jScriptDivInner3)

    // let jScriptDivInner4 = document.createElement("button")
    // jScriptDivInner4.classList.add("jScript-button-inner")
    // jScriptDivInner4.innerText = "PREVIEW"
    // jScriptDiv.appendChild(jScriptDivInner4)
}
function exerciseJS14(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS15(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS16(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS17(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS18(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS19(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS20(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS21(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS22(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS23(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS24(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS25(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS26(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS27(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS28(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS29(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
function exerciseJS30(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}
// function createContent(parent){
//     var t = document.querySelector('#template-exercise-content');
//     let tContent = t.content;
//     parent.appendChild(tContent)
// }