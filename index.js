var divEvent = document.getElementById("divFunction")
var divFunction = document.getElementById("divFunction")
var divSelector = document.getElementById("divSelector")
var pTag = document.getElementsByTagName("p")
pTagArr = Array.from(pTag)


pTagArr.forEach((element,index)=>{
    element.addEventListener("click",(e)=>{
        var modalDiv = document.createElement("div");
        modalDiv.classList.add("modalDivCss")
        document.body.appendChild(modalDiv);
        var modalContentDiv = document.createElement("div");
        modalContentDiv.classList.add("modalDivContentCss")
        modalDiv.appendChild(modalContentDiv);
        modalDiv.addEventListener("click",(e)=>{
            if(e.target.matches(".modalDivCss")){
            document.body.removeChild(modalDiv)
            }
        })
        createDivContent(modalContentDiv,element,index,exercisesArr[index].functions)
    })
})

function createDivContent(modalContentDiv,element,index,cb){
    var titleModal = document.createElement("div")
    var jqueryDiv = document.createElement("div")
    var jQueryDiv = document.createElement("div")
    var jScriptDiv = document.createElement("div")
    var jsDiv = document.createElement("div")
    var CloseDiv = document.createElement("div")
    var BtnClose = document.createElement("button")

    titleModal.classList.add("titleModal")
    titleModal.textContent=element.textContent
    jqueryDiv.classList.add("jqueryDiv")
    jsDiv.classList.add("jsDiv")
    jqueryDiv.textContent="JQUERY: "+exercisesArr[index].commandJQ
    jsDiv.textContent="JavaScript: "+ exercisesArr[index].commandJS
    jQueryDiv.classList.add("jQueryDiv")
    jScriptDiv.classList.add("jScriptDiv")
    CloseDiv.classList.add("CloseDiv")
    BtnClose.classList.add("btnClosed")
    
    modalContentDiv.appendChild(titleModal)
    modalContentDiv.appendChild(jqueryDiv)
    modalContentDiv.appendChild(jQueryDiv)
    modalContentDiv.appendChild(jScriptDiv)
    modalContentDiv.appendChild(jsDiv)
    modalContentDiv.appendChild(CloseDiv)
    CloseDiv.appendChild(BtnClose)

    cb()
}


// createContent(element,jQueryDiv,jScriptDiv,exercisesArr[index].functions)
    





// function callFun (num) {
//     console.log("entro")
//     // var a = "a" 
//     // var b = element.toString()
//     var x = num
//     var y = num.toString()
    
//     console.log(x)
    


// function a1(){console.log("sdfsdfs   que siiiiid")}
// function a2(){console.log("cxvxcvxcv")}

// callFun(a2)


