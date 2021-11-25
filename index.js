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
            // modalDiv.removeEventListener
            }
        })
        createDivContent(modalContentDiv,element,index)
    })
})

function createDivContent(modalContentDiv,element,index){
    console.log(element)
    var titleModal = document.createElement("div")
    var jqueryDiv = document.createElement("div")
    var jqueryDivEx = document.createElement("div")
    var jsDivEx = document.createElement("div")
    var jsDiv = document.createElement("div")
    var CloseDiv = document.createElement("div")
    titleModal.classList.add("titleModal")
    titleModal.textContent=element.textContent
    jqueryDiv.classList.add("jqueryDiv")
    jsDiv.classList.add("jsDiv")
    jqueryDiv.textContent="JQUERY: "+exercisesArr[index].commandJQ
    jsDiv.textContent="JavaScript: "+ exercisesArr[index].commandJS
    jqueryDivEx.classList.add("jqueryDivEx")
    jsDivEx.classList.add("jsDivEx")
    CloseDiv.classList.add("CloseDiv")
    modalContentDiv.appendChild(titleModal)
    modalContentDiv.appendChild(jqueryDiv)
    modalContentDiv.appendChild(jqueryDivEx)
    modalContentDiv.appendChild(jsDivEx)
    modalContentDiv.appendChild(jsDiv)
    modalContentDiv.appendChild(CloseDiv)

    
    createContent(element,jqueryDivEx,jsDivEx)
    createButon(CloseDiv)
}

function createContent(element,jqueryDivEx,jsDivEx){
    console.log(element)
    indexValue=element.dataset.valueevent
    console.log(indexValue)
    jqueryDivEx.textContent=exercisesArr[indexValue]
    jsDivEx.textContent=JsEx[indexValue]
    // jqueryDivEx.textContent=exercisesArr[indexValue].link
    // jsDivEx.textContent=JsEx[indexValue].link

}

function createButon(CloseDiv){
    console.log("asdsd")
    var copyBtnJquery = document.createElement("button")
    var BtnClose = document.createElement("button")
    var copyBtnJS = document.createElement("button")
    copyBtnJquery.classList.add("btnCopi")
    BtnClose.classList.add("btnClosed")
    copyBtnJS.classList.add("btnCopi")
    copyBtnJquery.textContent="Copy JQUERY";
    BtnClose.textContent="close";
    copyBtnJS.textContent="Copy JavaScript";
    CloseDiv.appendChild(copyBtnJquery)
    CloseDiv.appendChild(BtnClose)
    CloseDiv.appendChild(copyBtnJS)
    
}





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


