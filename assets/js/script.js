let optionP = $("p")
let optionPArr = Array.from(optionP)

console.log(optionP)
console.log(optionPArr)

optionPArr.forEach(element => {
    element.addEventListener("click", function() {
        createModal(element)
        
    })
});


function createModal(element){
    let bigDiv = document.createElement("div")
    bigDiv.classList.add("modalTransparent")
    bigDiv.setAttribute("id","modal")
    $("body").append(bigDiv)
    console.log(element.textContent)
    let smallDiv = document.createElement("div")
    smallDiv.classList.add("modalSmall")
    bigDiv.appendChild(smallDiv)
    removeModal(bigDiv)
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
