//GLOBALS
let itemList = document.querySelectorAll("li");
let vanillaButton = document.getElementById("jsVanilla");
let jqueryButton = document.getElementById("jQuery");
let clearButton = document.getElementById("clear");
let outputButton = document.getElementById("output");



//Cogemos todos los elementos li
itemList = Array.from(itemList);

//al tag  li le agregamos los eventos pertinentes
itemList.forEach(function(myli) {
    myli.addEventListener("mouseover", insertDataDescription);
    myli.addEventListener("mouseout", clearDataDescription);
    myli.addEventListener("click", selectDesiredFunction);
});

//Buttons - events
clearButton.addEventListener("click", clearDesiredFunction);
vanillaButton.addEventListener("click", vanillaSelected);
// //a.addEventListener("mouseout", clearVanillaSelected);

//Insertamos los datos en descripción, del li target
function insertDataDescription(event) {
    let selectedItemList = event.target;
    var textSelectedItemList = selectedItemList.innerHTML;
    console.log(textSelectedItemList)

    let descriptionList = document.querySelector(".description-list-class");
    if (selectedItemList !== false) {
        descriptionList.insertAdjacentHTML('beforeend', '<li class=description-text>' + `${textSelectedItemList}` + '</li>');
    } else {
        console.warning("Se ha encontrado un error al intentar mostrar el item seleccionado")
    }
}

//Limpiamos los datos en descripción, del li target
function clearDataDescription(event) {
    let selectedItemList = event.target;
    let description = document.querySelector(".description-text");
    description.remove();
}

//Guardamos la funcion seleccionada en el bloque CODE
function selectDesiredFunction() {
    let selectedItemList = event.target;
    var textSelectedItemList = selectedItemList.innerHTML;

    let functionList = document.querySelector(".code-class");
    if (selectedItemList !== false) {
        functionList.insertAdjacentHTML('beforeend', '<li class=code-text id=vanillajs>' + `${textSelectedItemList}` + '</li>');
    } else {
        console.warning("Se ha encontrado un error al intentar guardar el item seleccionado")
    }
}

function clearDesiredFunction(event) {
    let selectedItemList = event.target;
    let selectedFunction = document.querySelector(".code-text");
    //Intentar eliminar todos los hijos - wishlist
    selectedFunction.remove();
}



function vanillaSelected(event) {

    console.log("INNN")
}

// function clearVanillaSelected() {
//     let output = document.querySelector(".output-text");
//     output.remove();
// }

// //START _HERE

// //vanillaButton.addEventListener("click", onPushVanilla);

// function onPushVanilla() {
//     let outputList = document.querySelector(".output-class");
//     outputList.insertAdjacentHTML('beforeend', '<li class=output-text>' + `${afx}` + '</li>');
// }