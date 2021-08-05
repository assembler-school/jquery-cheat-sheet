
document.addEventListener("click", (e) => {
    if (e.target.matches("[data-open]")) {
        document.getElementById("modal").classList.remove("is_hidden");
        document.getElementById("header").classList.add("blur");
        document.getElementById("main").classList.add("blur")
    }
});

window.onclick = function(event) {
    if (event.target == document.getElementById("modal")) {
        document.getElementById("modal").classList.add("is_hidden");
        document.getElementById("header").classList.remove("blur");
        document.getElementById("main").classList.remove("blur");
    }
}

// CLOSE BUTTON FUNCTION

function closeButton(){
    document.getElementById("modal").classList.add("is_hidden");
    document.getElementById("header").classList.remove("blur");
    document.getElementById("main").classList.remove("blur");
}

// CLOSING MODAL WITH ESC
window.addEventListener("keydown", (event) => {
    if (event.keyCode === 27) {
        closeButton();
    }
});
