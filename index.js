var divEvent = document.getElementById("divFunction")
var divFunction = document.getElementById("divFunction")
var divSelector = document.getElementById("divSelector")

var pTag = document.getElementsByTagName("p")
console.log(pTag)

pTagArr = Array.from(pTag)
console.log(pTagArr)


pTagArr.forEach((index)=>{
    index.addEventListener("click",(e)=>{
        console.log(index.textContent)
    })
})