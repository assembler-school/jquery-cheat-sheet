
document.getElementById("button-events").addEventListener("click", btnEventScreen)

function btnEventScreen(){

    addTemplate();

    buttonClick.innerText= "CLICK";
    instruction.innerText = "Please do click, double click or press spacebar";
    
    document.getElementById("working-place").appendChild(instruction)
    document.getElementById("working-place").appendChild(buttonClick)
    document.getElementById("working-place").appendChild(comment)

    buttonClick.addEventListener("click", function(){
        comment.innerHTML=""
        comment.innerText="This message appear if you pressed just with one click on the button"

        document.getElementById("js-code").innerText=`buttonClick.addEventListener("click", function(){
            yourFunction})`
        buttonClick.removeEventListener("click",function(){})
        })   
    
    
    buttonClick.addEventListener("dblclick", function(){

        comment.innerHTML=""
        comment.innerText="This message appear if you pressed click 2 times on the button"

        document.getElementById("js-code").innerHTML=`buttonClick.addEventListener("dblclick", function(){
            yourFunction})`
    })

    window.addEventListener("keydown", function(e){
        if(e.keyCode===32){
            comment.innerHTML=""
            comment.innerText="This message appear if you pressed the SpaceBar"

            document.getElementById("js-code").innerHTML=`window.addEventListener("keydown", e=>{if(e.keyCode===32){Your Function}})`
        }
    }
    )
}

