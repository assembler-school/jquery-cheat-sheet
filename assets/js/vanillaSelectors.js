/*-----------------SELECTORS---------------------------*/

let eachCssVan = function createVanilla() {
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
        list.style.backgroundColor = "red";
    });
};