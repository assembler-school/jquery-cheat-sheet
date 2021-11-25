function createElementfunctionJs  () {
    el = document.createElement("span");
    el.innerHTML = "text";
    var div = document.getElementById("createElementIdTestResultjs");
    div.appendChild(el);
}
function removeElementfunctionJs () {
    buttonTest('removeElementIdTestResultjs')
    setTimeout(() => {
        var myobj = document.getElementById("button-test");
        myobj.remove();
    }, 3000);
}
