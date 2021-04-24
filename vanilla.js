vanillaButton.addEventListener("click", vanillaFunctionOnLoadCode);
outputButton.addEventListener("click", vanillaFunctionOnLoadOutput);
clearButton.addEventListener("click", clearDescriptionCodeOutput);

// &lt; stands for the less-than sign: <
// &gt; stands for the greater-than sign: >
// &le; stands for the less-than or equals sign: ≤
// &ge; stands for the greater-than or equals sign: ≥

//FIRST
//When the HTML document has been loaded and you can manipulate it with JavaScript

//let fvanilla = document.getElementById("vanillajs");
//console.log(fvanilla)

// switch (fvanilla) {
//     console.log("IN switch")
//     case "on load"

function vanillaFunctionOnLoadCode() {
    let codeList = document.querySelector(".code-class");
    codeList.insertAdjacentHTML('beforeend', '<p>&ltimg src="jsvanilla.png" onload="loadImage()" width="20" height="20"&gt</p>');
    codeList.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction loadImage() {swal("Image is loaded");}&ltscript&gt;</p>');
}

function clearDescriptionCodeOutput() {
    //Mirar funcion while
    //Variable contador
    let data = document.querySelector("p");
    data.remove();
}



function vanillaFunctionOnLoadOutput() {
    let outputList = document.querySelector(".output-class");
    //HTML
    outputList.insertAdjacentHTML('beforeend', '<p><img src="jsvanilla.png" onload="loadImage()" width="30" height="30"></p>');
    //JS
    var myScript = document.createElement("script");
    var scriptContent = document.createTextNode("function loadImage(){swal('Image is loaded')}; loadImage()");
    myScript.appendChild(scriptContent);
    document.body.appendChild(myScript);
}
//  default:
//    text = "Looking for vanilla functions...";

//         //Switch
// }