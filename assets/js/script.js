let optionP = $("p")
let optionPArr = Array.from(optionP)

console.log(optionP)
console.log(optionPArr)

optionPArr.forEach((element,index) => {
    element.addEventListener("click", function() {
        if (findExercisesFun(index)){
            createModal(element, index, findExercisesFun(index).functions)
        }else{
            return;
        }
    })
});
function createModal(element, index, cb){
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
function exerciseJS0(jScriptDiv){

    let jScriptDivInner1 = document.createElement("div")
    jScriptDivInner1.classList.add("jScript-container-inner")
    jScriptDivInner1.innerText = "HOLA script"
    jScriptDiv.appendChild(jScriptDivInner1)
}
function exerciseJS1(jScriptDiv){
    console.log("hola 1"+jScriptDiv)
}



// function createContent(parent){
//     var t = document.querySelector('#template-exercise-content');
//     let tContent = t.content;
//     parent.appendChild(tContent)
// }

