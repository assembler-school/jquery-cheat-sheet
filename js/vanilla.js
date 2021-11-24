

function removeMe(btn1, par) {
    let x = document.getElementById("vanilla")

    x.removeChild(btn1)
}

function createVanilla(btn1, par) {
    let r = document.createElement("p")
    r.innerText = "I´m Mr Meeseeks look at me! "
par.appendChild(r)

}