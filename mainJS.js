var events = document.querySelectorAll("p")
var modalDiv = document.getElementById("myModal")
var span = document.getElementsByClassName("close")[0];
var contentJS = document.getElementById("contentJavascript")
var jsSpace = document.getElementById("jsSpace")
var br = document.createElement("br")
var html = document.querySelector("html")
var contentJQ = document.getElementById("contentJQuery")

for (let i=0; i<events.length; i++) {
    events[i].addEventListener("click", openModal)
}
function closeModal() {
    modalDiv.style.display = "none";
    removeElements()
}
function openModal () {
    modalDiv.style.display = "block"
}
span.onclick = function() {
    closeModal()
}
window.onclick = function(event) {
    if (event.target == modalDiv) {
        closeModal()
    }
}
function removeElements() {
    contentJS.removeChild(contentJS.firstElementChild)
    contentJQ.removeChild(contentJQ.firstElementChild)
}