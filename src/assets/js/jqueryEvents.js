


//? keyboard
//todo When the user presses a key on the keyboard
var jqresult4=document.getElementById("jqresult4")
window.addEventListener('keypress', function (e) {
    jqresult4.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//todo When the user presses down a key on the keyboard
var jqresult35=document.getElementById("jqresult35")
window.addEventListener('keydown', function (e) {
    jqresult35.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//todo When the user presses up a key on the keyboard
var jqresult36=document.getElementById("jqresult36")
window.addEventListener('keyup', function (e) {
    jqresult36.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//? MOUSE
//todo When an HTML item has been clicked
var jqresult2=document.getElementById("jqresult2")
var jqbtn2=document.getElementById("jqbtntest2")
jqbtn2.addEventListener("click", () => {
    jqresult2.innerHTML="estoy haciendo un click"
})
//todo When an HTML item has been double clicked
var jqresult3=document.getElementById("jqresult3")
var jqbtn3=document.getElementById("jqbtntest3")
jqbtn3.addEventListener("dblclick", () => {
    jqresult3.innerHTML="estoy haciendo doble-click"
})
//todo  to see where the mouse moves
var jqresult5=document.getElementById("jqresult5")
function jqtest5(a) {
    jqresult5.innerHTML = `mouse location = X: ${a.x}, Y: ${a.y}` ;
}
//todo When you position the mouse over an element
document.getElementById("jqbtntest10").onmouseover = function () {
    mouseOverj()};
document.getElementById("jqbtntest10").onmouseout = function () {
    mouseOutj()};
function mouseOverj() {
    document.getElementById("jqresult10").style.color = "red";}
function mouseOutj() {
    document.getElementById("jqresult10").style.color = "black";}
//? LOAD
//todo When an image is loaded
var jqresult7 = document.getElementById('jqresult7')
var jqimg7 = document.getElementById('jqbtntest7')
jqimg7.addEventListener("click",function(){
    if (jqimg7.complete) {
    jqresult7.innerHTML="image is loaded"
}})
//todo When an image is no loaded
var jqresult7_1 = document.getElementById('jqresult7_1')
var jqimg7_1 = document.getElementById('jqbtntest7_1')
jqimg7_1.addEventListener("click",function(){
    if (!jqimg7_1.complete) {
    jqresult7_1.innerHTML="image is loaded"
}else{
    jqresult7_1.innerHTML="image is no loaded"
}})
//todo HTML document has been loaded
var jqresult1=document.getElementById("jqresult1")
var jqbtn1=document.getElementById("jqbtntest1")
jqbtn1.addEventListener("click",function(){
   window.onload(jqresult1.innerHTML="document is loaded")
})
//? CHANGE
//todo When the user changes a value of an text input
var jqresult6=document.getElementById("jqresult6")
var jqinput6=document.getElementById("jqbtntest6")
jqinput6.addEventListener("change", function () {
    jqresult6.innerHTML="Your are change the select"
})
//todo When the user changes the option of a select element -
function myFunctionjq9() {
    console.log("a")
    var x = document.getElementById("jqbtntest9").value;
    document.getElementById("jqresult9").innerHTML = "You selected: " + x;
}
//TODO When a checkbox is checked or unchecked
var jqcheck11=document.getElementById('jqbtntest11')
jqcheck11.addEventListener("change",function(){validatejq()})
function validatejq() {
    var jqresult11=document.getElementById("jqresult11")
    if (jqcheck11.checked) {
        jqresult11.innerHTML="checked"
    } else {
        jqresult11.innerHTML="You didn't check it!"
    }
}