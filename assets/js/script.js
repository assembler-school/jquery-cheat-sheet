let optionP = $("p")
let optionPArr = Array.from(optionP)

console.log(optionP)
console.log(optionPArr)

optionPArr.forEach((element,index) => {
    element.addEventListener("click", function() {
        createModal(element, removeModal, findExercisesFun(index).functions)
    })
});
function createModal(element, cb, fn){
    let bigDiv = document.createElement("div")
    bigDiv.classList.add("modalTransparent")
    bigDiv.setAttribute("id","modal")
    $("body").append(bigDiv)
    let smallDiv = document.createElement("div")
    smallDiv.classList.add("modalSmall")
    smallDiv.textContent = element.textContent;
    bigDiv.appendChild(smallDiv)
    cb(bigDiv)
    fn(smallDiv)
    //createContent(smallDiv)
    //removeModal(bigDiv)

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


function exerciseJS0(){
    console.log("hola 0")
}
function exerciseJS1(){
    console.log("hola 1")
}



// function createContent(parent){
//     var t = document.querySelector('#template-exercise-content');
//     let tContent = t.content;
//     parent.appendChild(tContent)
// }

