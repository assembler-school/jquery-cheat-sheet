document.getElementById("button-events").addEventListener("click", btnEventScreen)

function btnEventScreen(){

    addTemplate();

    instruction.innerText = "Please fill the form and submit";
    document.getElementById("working-place").appendChild(instruction)

    
}