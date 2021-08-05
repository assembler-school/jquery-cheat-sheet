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

let loadImgVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        let imgContainer = document.querySelector(".vanilla");
        let imgData = document.createElement("img");
        imgData.setAttribute("class", "imgDat");
        imgData.setAttribute(
            "src",
            "https://yosoy.dev/wp-content/uploads/2012/08/hqdefault.jpg"
        );
        imgData.onload = () => {
            alert("Image loaded");
        };
        imgContainer.appendChild(imgData);
    });
};

let errorImgVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        let imgContainer = document.querySelector(".vanilla");
        let imgData = document.createElement("img");
        imgData.setAttribute("class", "imgDat");
        imgData.setAttribute(
            "src",
            "https://yosoy.dev/wp-content/uploads/22/08/hqdefault.jpg"
        );
        imgData.onerror = () => {
            alert("Image load fail, wrong url");
        };
        imgContainer.appendChild(imgData);
    });
};

let submittedVan = function createVanilla() {
    let newForm = document.createElement("form");
    let newName = document.createElement("input");
    let newEmail = document.createElement("input");
    let formCOnt = document.querySelector(".vanilla");
    let newSubmit = document.createElement("input");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        newName.setAttribute("type", "text");
        newName.setAttribute("name", "name");
        newName.setAttribute("placeholder", "Name");
        newEmail.setAttribute("type", "email");
        newEmail.setAttribute("name", "email");
        newEmail.setAttribute("placeholder", "Email");
        newSubmit.setAttribute("type", "submit");
        newSubmit.setAttribute("value", "Submit");
        formCOnt.appendChild(newForm);
        newForm.appendChild(newName);
        newForm.appendChild(newEmail);
        newForm.appendChild(newSubmit);
    });
    newForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Submitted by JS");
    });
};

let changeSelVan = function createVanilla() {
    let newSelect = document.createElement("select");
    let newCont = document.querySelector(".vanilla");
    let newOpt1 = document.createElement("option");
    let newOpt2 = document.createElement("option");
    let newOpt3 = document.createElement("option");
    newOpt1.setAttribute("value", "1");
    newOpt2.setAttribute("value", "2");
    newOpt3.setAttribute("value", "3");
    newSelect.setAttribute("name", "select");
    newSelect.setAttribute("id", "vanilla-select");
    newSelect.setAttribute("class", "vanilla-select");
    newOpt1.innerHTML = "Option 1";
    newOpt2.innerHTML = "Option 2";
    newOpt3.innerHTML = "Option 3";
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        newSelect.appendChild(newOpt1);
        newSelect.appendChild(newOpt2);
        newSelect.appendChild(newOpt3);
        newCont.appendChild(newSelect);
    });
    newSelect.addEventListener("change", () => {
        alert("Changing the select JS");
    });
};

let mouseOverVan = function createVanilla() {
    let vanBtn = document.querySelector(".vanilla-button");
    vanBtn.addEventListener("mouseover", () => {
        alert("Mouse over JS");
    });
};

let changeCheckVan = function createVanilla() {
    let newCheck = document.createElement("input");
    let newCont = document.querySelector(".vanilla");
    let newCheckBtn = document.querySelector(".vanilla-button");
    newCheck.setAttribute("type", "checkbox");
    newCheckBtn.addEventListener("click", () => {
        newCont.appendChild(newCheck);
    });
    newCheck.addEventListener("change", () => {
        alert("Changing the checkbox JS");
    });
};

let selectListVan = function createVanilla() {
    let newList = document.createElement("ul");
    let newListBtn = document.querySelector(".vanilla-button");
    let newListItem = document.createElement("li");
    let newListItem2 = document.createElement("li");
    newList.setAttribute("class", "vanilla-list");
    newList.setAttribute("id", "vanilla-list");
    newListItem.setAttribute("id", "vanilla-li1");
    newListItem.setAttribute("class", "vanilla-li");
    newListItem2.setAttribute("id", "vanilla-li2");
    newListItem.innerHTML = "Item 1";
    newListItem2.innerHTML = "Item 2";
    newListItem2.setAttribute("class", "vanilla-li");
    newListBtn.addEventListener("click", () => {
        newList.appendChild(newListItem);
        newList.appendChild(newListItem2);
        document.querySelector(".vanilla").appendChild(newList);
    });
    let lists = document.querySelectorAll(".vanilla-list");
    lists.forEach((list) => {
        list.addEventListener("click", () => {
            alert("It was clicked the element");
        });
    });
};