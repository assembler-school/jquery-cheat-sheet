var divEvent = document.getElementById("divFunction")
var divFunction = document.getElementById("divFunction")
var divSelector = document.getElementById("divSelector")
var pTag = document.getElementsByTagName("p")
pTagArr = Array.from(pTag)

pTagArr.forEach((index)=>{
    index.addEventListener("click",(e)=>{
        var modalDiv = document.createElement("div");
        modalDiv.classList.add("modalDivCss")
        document.body.appendChild(modalDiv);
        var modalContentDiv = document.createElement("div");
        modalContentDiv.classList.add("modalDivContentCss")
        modalDiv.appendChild(modalContentDiv);
        modalDiv.addEventListener("click",(e)=>{
            if(e.target.matches(".modalDivCss")){
            document.body.removeChild(modalDiv)
            // modalDiv.removeEventListener
            }
        })
        createDivContent(modalContentDiv)
    })
})

function createDivContent(modalContentDiv,index){
    var jqueryDiv = document.createElement("div")
    var jqueryDivEx = document.createElement("div")
    var jsDivEx = document.createElement("div")
    var jsDiv = document.createElement("div")
    jqueryDiv.classList.add("jqueryDiv")
    jsDiv.classList.add("jsDiv")
    jqueryDiv.textContent="JQUERY"
    jsDiv.textContent="JavaScript"
    jqueryDivEx.classList.add("jqueryDivEx")
    jsDivEx.classList.add("jsDivEx")
    modalContentDiv.appendChild(jqueryDiv)
    modalContentDiv.appendChild(jqueryDivEx)
    modalContentDiv.appendChild(jsDivEx)
    modalContentDiv.appendChild(jsDiv)
    createContent(index,jqueryDivEx,jsDivEx)
}

function createContent(indexP,jqueryDivEx,jsDivEx){
    
}