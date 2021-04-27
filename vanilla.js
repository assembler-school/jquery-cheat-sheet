vanillaButton.addEventListener("click", vanillaFunctionCode);
outputButtonJs.addEventListener("click", vanillaFunctionOutput);
clearButton.addEventListener("click", clearDescriptionCodeOutput);

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
    var fVanillaAllData = fVanillaData + "jsvanilla"

    //Select the funtion
    switch (fVanillaAllData) {
        case 'loadedImagejsvanilla':
            //When an image is loaded
            let codeListOnLoad = document.querySelector(".code-class");
            codeListOnLoad.insertAdjacentHTML('beforeend', '<p>&ltimg src="jsvanilla.png" onload="loadImage()" width="20" height="20"&gt</p>');
            codeListOnLoad.insertAdjacentHTML('beforeend', '<p>&ltscript&gtfunction loadImage() {swal("Image is loaded in vanilla js");} loadImage();&ltscript&gt;</p>');
            break;
        case 'clickjsvanilla':
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
    let fvanilla = document.getElementById("vanillajs");
    var fVanillaData = fvanilla.innerHTML;
    var fVanillaAllData = fVanillaData + "jsvanilla"

    //Select the funtion
    switch (fVanillaAllData) {
        case 'loadedImagejsvanilla':
            //When an image is loaded
            let outputListOnLoad = document.querySelector(".output-class");
            //HTML
            outputListOnLoad.insertAdjacentHTML('beforeend', '<p><img src="jsvanilla.png" onload="loadImage()" width="20" height="20"></p>');

            //JS
            var myScript = document.createElement("script");
            var scriptContent = document.createTextNode("function loadImage() {swal('Image is loaded in vanilla js');} loadImage();");
            myScript.appendChild(scriptContent);
            document.body.appendChild(myScript);

            break;
        case 'clickjsvanilla':
            //     When an HTML item has been clicked
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
            console.info('JS vanilla is not working');
    }

}