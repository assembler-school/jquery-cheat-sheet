/*-----------------EVENTS---------------------------*/
// window.addEventListener("DOMContentLoaded", () => {
//     alert("DOMContentLoaded by Vanilla");
// });

let clickVan = function createVanilla() {
    let vanBtn = document.querySelector(".vanilla-button");
    vanBtn.addEventListener("click", () => {
        vanBtn.style.backgroundColor = "red";
        vanBtn.style.color = "white";
    });
};

let dblClickVan = function createVanilla() {
    let vanBtn = document.querySelector(".vanilla-button");
    vanBtn.addEventListener("dblclick", () => {
        vanBtn.style.backgroundColor = "blue";
        vanBtn.style.color = "white";
    });
};

let keyVan = function createVanilla() {
    let vanBtn = document.querySelector(".vanilla-button");
    vanBtn.addEventListener("keypress", (e) => {
        if (e.key == 86) {
            vanBtn.style.backgroundColor = "black";
            vanBtn.style.color = "white";
        }
    });
};

let mouseVan = function createVanilla() {
    let vanBtn = document.querySelector(".vanilla-button");
    vanBtn.addEventListener("mousemove", () => {
        vanBtn.style.backgroundColor = "black";
        vanBtn.style.color = "white";
    });
};

let changeVan = function createVanilla() {
    let newCont = document.querySelector(".vanilla");
    let newInput = document.createElement("input");
    let newLabel = document.createElement("label");
    let newBtn = document.querySelector(".vanilla-button");
    newBtn.addEventListener("click", () => {
        newInput.setAttribute("type", "text");
        newInput.setAttribute("id", "vanilla-input");
        newLabel.setAttribute("for", "vanilla-input");
        newLabel.innerHTML = "Text here to see the change";
        newCont.appendChild(newInput);
        newCont.appendChild(newLabel);
    });
    newInput.addEventListener("change", () => {
        alert("Changing the input text JS");
    });
};