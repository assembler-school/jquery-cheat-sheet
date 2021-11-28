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
function findExercisesFun(index){
    exercise = exercisesArr.find(item => {
        return item.dataset === index;
    })
    if(exercise == null){
        return console.log("do not exist");
    }else{
        return exercise;
    }
}