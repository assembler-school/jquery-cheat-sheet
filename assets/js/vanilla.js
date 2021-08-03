/*Template copying and appending*/

function readyEvent() {
    let ele1 = document.getElementById("ev-0");
    ele1.addEventListener("click", () => {
        let container = document.querySelector(".content");
        container.insertAdjacentHTML("beforeend", ready);
        let readys = document.querySelector("#ready").content;
        let readysCopy = document.importNode(readys, true);
        container.appendChild(readysCopy);
    });
}

export { readyEvent };