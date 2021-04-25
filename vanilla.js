vanillaButton.addEventListener("click", vanillaFunctionCode);
outputButton.addEventListener("click", vanillaFunctionOutput);
//outputButton.addEventListener("click", getVanillaData);
clearButton.addEventListener("click", clearDescriptionCodeOutput);

// &lt; stands for the less-than sign: <
// &gt; stands for the greater-than sign: >
// &le; stands for the less-than or equals sign: ≤
// &ge; stands for the greater-than or equals sign: ≥


//Clear ALL
function clearDescriptionCodeOutput() {
    //Mirar funcion while
    //Variable contador
    let data = document.querySelector("p");
    data.remove();
}

//FIRST
function vanillaFunctionCode() {
    //GET FUNCTION LOADED
    let fvanilla = document.getElementById("vanillajs");
    var fVanillaData = fvanilla.innerHTML;
    //click
    //doubleClick
    //onKeyPress
    //onMouseMove

    //Select the funtion
    switch (fVanillaData) {
        case 'xonLoad':
            ////When the HTML document has been loaded and you can manipulate it with JavaScript
            let codeListOnLoad = document.querySelector(".code-class");
            codeListOnLoad.insertAdjacentHTML('beforeend', '<p>&ltimg src="jsvanilla.png" onload="loadImage()" width="20" height="20"&gt</p>');
            codeListOnLoad.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction loadImage() {swal("Image is loaded");}&ltscript&gt;</p>');
            break;
        case 'xclick':
            //     When an HTML item has been clicked
            let codeListClick = document.querySelector(".code-class");
            codeListClick.insertAdjacentHTML('beforeend', '<p>&ltbutton onclick="myFunction()">Click me</button&gt</p>');
            codeListClick.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction myFunction(){document.getElementById("demo").innerHTML = "Hello World";}&ltscript&gt;</p>');
            break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('This is default info of loaded function');
    }
}

//SECOND
function vanillaFunctionOutput() {
    //GET FUNCTION LOADED
    let outVanilla = document.getElementById("vanillajs");
    var outVanillaData = outVanilla.innerHTML;

    //Select the funtion
    switch (outVanillaData) {
        case 'xonLoad':
            let outputListOnLoad = document.querySelector(".output-class");
            //HTML
            outputListOnLoad.insertAdjacentHTML('beforeend', '<p><img src="jsvanilla.png" onload="loadImage()" width="30" height="30"></p>');
            //JS
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("function loadImage(){swal('Image is loaded JS')}; loadImage()");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        case 'xclick':
            let outputListClick = document.querySelector(".output-class");
            //     //HTML
            outputListClick.insertAdjacentHTML('beforeend', '<p><button onclick="myFunction()">Click me</button></p>');
            outputListClick.insertAdjacentHTML('beforeend', '<p><p id="demo"></p></p>');
            //     //JS
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("function myFunction(){document.getElementById('demo').innerHTML = 'Hello World';}");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            //     break;
        default:
            //Declaraciones ejecutadas cuando el resultado de expresión coincide con el valor2
            console.info('This is default info of the output');
    }

}