

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

function prependVanilla(btn1, par) {
    par.insertBefore(x, btn1)
}

function createAddVanilla(btn1, par) {
    par.appendChild(document.createElement("p")).innerText = "Father, I´m alive!"
}

function createAddbeforeVanilla(btn1, par) {
    par.insertBefore(document.createElement("p"), btn1).innerText = "Ninja Attack!"
}

function clonate(btn1, par) {
let cl = btn1.cloneNode(true)
par.appendChild(cl)
}

function addClassVanilla(btn1, par){
    btn1.setAttribute("class", "trial")
}

function removeClassVanilla(btn1, par) {
    btn1.classList.remove("trial2")
}

function vanillaClassToogle(btn1, par) {
    btn1.classList.toggle("trial2")
}

function disabledVanilla(btn1, par) {
    btn1.setAttribute("disabled", "true")
}

function fixDisabledVanilla(btn1, par, x) {
    document.getElementById("dummy").disabled = false
}

function vanillaHideF(btn1, par) {
document.getElementById("dark").style.visibility = "hidden";
}

function vanillaShowF(btn1, par, h){
    h.style.display = "block";
}