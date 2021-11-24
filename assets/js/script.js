let optionP = $("p")
let optionPArr = Array.from(optionP)

console.log(optionP)
console.log(optionPArr)

optionPArr.forEach(element => {
    element.addEventListener("click", function() {
        let bigDiv = document.createElement("div")
        bigDiv.classList.add("modalTransparent")
        $("body").append(bigDiv)
        console.log(element.textContent)
        let smallDiv = document.createElement("div")
        smallDiv.classList.add("modalSmall")
        bigDiv.appendChild(smallDiv)

    })
});
