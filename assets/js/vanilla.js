/*-----------------FUNCTIONS---------------------------*/
let createVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        let newDiv = document.createElement("div");
        newDiv.innerHTML =
            "I am the new one dude, what´s going on , Dr. Javascript?";
        document.querySelector(".vanilla").appendChild(newDiv);
    });
};

let removeVan = function createVanilla() {
    let remover = document.createElement("button");
    let newDiv = document.createElement("div");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        newDiv.setAttribute("class", "remove-me-van");
        newDiv.innerHTML =
            "I am the new one dude, what´s going on , Dr. Javascript?";
        document.querySelector(".vanilla").appendChild(newDiv);
        remover.innerHTML = "Give a pop() to this crazy guy jQ!";
        remover.setAttribute("class", "the-remover");
        document.querySelector(".vanilla").appendChild(remover);
    });
    console.log(newDiv);
    remover.addEventListener("click", () => {
        newDiv.remove();
    });
};

let appendVan = function createVanilla() {
    let addChild = document.createElement("button");
    let demo = document.querySelector(".vanilla");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        addChild.innerHTML = "How is the son of this guy and Mary Poppins?";
        addChild.setAttribute("class", "the-addChild");
        document.querySelector(".vanilla").appendChild(addChild);
        let newDiv = document.createElement("div");
        newDiv.innerHTML = "Batman";
        demo.appendChild(newDiv);
    });
    addChild.addEventListener("click", () => {
        let sonDiv = document.createElement("div");
        sonDiv.innerHTML = "Boss Light Year, no kidding, lol";
        document.querySelector(".vanilla").appendChild(sonDiv);
    });
};

let prependVan = function createVanilla() {
    let addChild = document.createElement("button");
    let demo = document.querySelector(".vanilla");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        addChild.innerHTML =
            "Who is really the first son of Batman and Mary Poppins, but was a secret until now ?";
        addChild.setAttribute("class", "the-addChild");
        demo.appendChild(addChild);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "the-father");
        newDiv.innerHTML = "";
        demo.appendChild(newDiv);
        let sonDiv = document.createElement("div");
        sonDiv.innerHTML = "Boss Light Year, first son, really";
        newDiv.appendChild(sonDiv);
    });
    addChild.addEventListener("click", () => {
        let verysonDiv = document.createElement("div");
        verysonDiv.innerHTML = "Chuwaka,oh no, now I understand everything";
        document.querySelector(".the-father").prepend(verysonDiv);
    });
};

let afterVan = function createVanilla() {
    let addChildAfter = document.createElement("button");
    let demo = document.querySelector(".vanilla");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        addChildAfter.innerHTML =
            "But this is worst than a Turkish telenovela, who is the actual inheritor from Poppins family, you will now it in the before episode";
        addChildAfter.setAttribute("class", "the-addChild-After");
        demo.appendChild(addChildAfter);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "the-father");
        newDiv.innerHTML = "";
        demo.appendChild(newDiv);
        let sonDiv = document.createElement("div");
        sonDiv.innerHTML = "Boss Light Year, is him";
        newDiv.appendChild(sonDiv);
    });
    addChildAfter.addEventListener("click", () => {
        let verysonDiv = document.createElement("div");
        verysonDiv.innerHTML = "Chuwaka, or him, so crazy these Telenovelas";
        let papa = document.querySelector(".the-father");
        console.log(papa);
        papa.after(verysonDiv);
    });
};

let beforeVan = function createVanilla() {
    let addChildBefore = document.createElement("button");
    let demo = document.querySelector(".vanilla");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        addChildBefore.innerHTML = "Isssss, ta tan tannnnn";
        addChildBefore.setAttribute("class", "the-addChild-Before");
        demo.appendChild(addChildBefore);
        let newDiv = document.createElement("div");
        newDiv.setAttribute("class", "the-father");
        newDiv.innerHTML = "";
        demo.appendChild(newDiv);
        let sonDiv = document.createElement("div");
        sonDiv.innerHTML =
            "Boss Light Year: oh noooooo, I´m gonna Escape of sadness to the Infinite and Beyond...";
        newDiv.insertBefore(sonDiv, newDiv.firstChild);
    });
    addChildBefore.addEventListener("click", () => {
        let verysonDiv = document.createElement("div");
        verysonDiv.innerHTML = "Chuwi, the richest creature is the Galaxy";
        let papa = document.querySelector(".the-father");
        papa.insertBefore(verysonDiv, papa.firstChild);
    });
};

let cloneVan = function createVanilla() {
    let addChild = document.createElement("button");
    let demo = document.querySelector(".vanilla");
    let newDiv = document.createElement("div");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        addChild.innerHTML =
            "Do you want to know how works the bat-mitosis, CLick me";
        addChild.setAttribute("class", "the-addChild");
        demo.appendChild(addChild);
        newDiv.innerHTML = "Batman";
        demo.appendChild(newDiv);
    });
    addChild.addEventListener("click", () => {
        let cloneDiv = newDiv.cloneNode(true);
        demo.appendChild(cloneDiv);
    });
};

let addClassVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        document.querySelector(".vanilla-button").classList.add("red-class");
    });
};

let removeClassVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        document.querySelector(".vanilla-button").classList.add("red-class");
    });
    document
        .querySelector(".vanilla-button")
        .addEventListener("mouseover", () => {
            document.querySelector(".vanilla-button").classList.remove("red-class");
        });
};

let toggleClassVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        document.querySelector(".vanilla-button").classList.toggle("yellow-class");
    });
};

let attrDisabledVan = function createVanilla() {
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        document.querySelector(".vanilla-button").setAttribute("disabled", true);
    });
};

let removeAttrDisabledVan = function createVanilla() {
    let containerBtns = document.createElement("button");
    containerBtns.innerHTML = "Click me to remove disabled";
    let cont = document.querySelector(".vanilla");
    document.querySelector(".vanilla-button").addEventListener("click", () => {
        document.querySelector(".vanilla-button").setAttribute("disabled", true);
        cont.appendChild(containerBtns);
    });
    containerBtns.addEventListener("click", () => {
        document.querySelector(".vanilla-button").removeAttribute("disabled");
    });
};