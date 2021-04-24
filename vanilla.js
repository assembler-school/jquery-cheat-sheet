console.log("inn vanilla")

vanillaButton.addEventListener("click", vanillaFunctionOnLoadCode);
outputButton.addEventListener("click", vanillaFunctionOnLoadOutput);

// &lt; stands for the less-than sign: <
// &gt; stands for the greater-than sign: >
// &le; stands for the less-than or equals sign: ≤
// &ge; stands for the greater-than or equals sign: ≥

//When the HTML document has been loaded and you can manipulate it with JavaScript
function vanillaFunctionOnLoadCode() {
    let codeList = document.querySelector(".code-class");
    codeList.insertAdjacentHTML('beforeend', '&ltimg src="jsvanilla.png" onload="loadImage()" width="20" height="20"&gt');
    codeList.insertAdjacentHTML('beforeend', '<br>');
    codeList.insertAdjacentHTML('beforeend', '&ltscript&gtfunction loadImage() {alert("Image is loaded");}&ltscript&gt;');
}

function vanillaFunctionOnLoadOutput() {
    let outputList = document.querySelector(".output-class");
    outputList.insertAdjacentHTML('beforeend', '<br>');
    outputList.insertAdjacentHTML('beforeend', '<img src="jsvanilla.png" onload="loadImage()" width="20" height="20">');
    outputList.insertAdjacentHTML('beforeend', '<br>');
    outputList.insertAdjacentHTML('beforeend', '<script>function loadImage()console.log("Image is loaded");</script>');
    //swal("Hello world!");
}