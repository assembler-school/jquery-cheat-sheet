console.log("hola perra")

a.addEventListener("click", vanillaSelected);
//a.addEventListener("mouseout", clearVanillaSelected);

function vanillaSelected() {
    let outputList = document.querySelector(".code-class");
    outputList.insertAdjacentHTML('beforeend', '<li class=code-text>' + `${afx}` + '</li>');
}

// function clearVanillaSelected() {
//     let output = document.querySelector(".output-text");
//     output.remove();
// }

//START _HERE

vanillaButton.addEventListener("click", onPushVanilla);

function onPushVanilla() {
    let outputList = document.querySelector(".output-class");
    outputList.insertAdjacentHTML('beforeend', '<li class=output-text>' + `${afx}` + '</li>');
}