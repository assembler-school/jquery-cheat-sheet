

function removeMe(btn1, par) {
    let x = document.getElementById("vanilla")

    x.removeChild(btn1)
}

function createVanilla(btn1, par) {
    let r = document.createElement("p")
    r.innerText = "I´m Mr Meeseeks look at me! "
par.appendChild(r)

}

function appendVanilla(btn1, par) {
    let z = document.createElement("p")
    z.innerText = "I´m a child!... Element "
par.appendChild(z)
}