//? keyboard
//todo When the user presses a key on the keyboard
var jsresult4=document.getElementById("jsresult4")
window.addEventListener('keypress', function (e) {
    jsresult4.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//todo When the user presses down a key on the keyboard
var jsresult35=document.getElementById("jsresult35")
window.addEventListener('keydown', function (e) {
    jsresult35.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//todo When the user presses up a key on the keyboard
var jsresult36=document.getElementById("jsresult36")
window.addEventListener('keyup', function (e) {
    jsresult36.innerHTML = `You pressed ${e.key} and code is ${e.keyCode}` ;
}, false);
//? MOUSE
//todo When an HTML item has been clicked
var jsresult2=document.getElementById("jsresult2")
var jsbtn2=document.getElementById("jsbtntest2")
jsbtn2.addEventListener("click", () => {
    jsresult2.innerHTML="estoy haciendo un click"
})
//todo When an HTML item has been double clicked
var jsresult3=document.getElementById("jsresult3")
var jsbtn3=document.getElementById("jsbtntest3")
jsbtn3.addEventListener("dblclick", () => {
    jsresult3.innerHTML="estoy haciendo doble-click"
})
//todo  to see where the mouse moves
var jsresult5=document.getElementById("jsresult5")
var jsbtn5=document.getElementById("jsbtntest5")
onmousemove = function (e) {
    jsresult5.innerHTML = `mouse location = X: ${e.x}, Y: ${e.y}` ;
}
//todo When you position the mouse over an element
document.getElementById("jsbtntest10").onmouseover = function () {
    mouseOver()};
document.getElementById("jsbtntest10").onmouseout = function () {
    mouseOut()};
function mouseOver() {
    console.log("a")
    document.getElementById("jsresult10").style.color = "red";}
function mouseOut() {
    document.getElementById("jsresult10").style.color = "black";}
//? LOAD
//todo When an image is loaded
var jsresult7 = document.getElementById('jsresult7')
var jsimg7 = document.getElementById('jsbtntest7')
jsimg7.addEventListener("click",function(){
    if (jsimg7.complete) {
    jsresult7.innerHTML="image is loaded"
}})
//todo When an image is no loaded
var jsresult7_1 = document.getElementById('jsresult7_1')
var jsimg7_1 = document.getElementById('jsbtntest7_1')
jsimg7_1.addEventListener("click",function(){
    if (!jsimg7_1.complete) {
    jsresult7_1.innerHTML="image is loaded"
}else{
    jsresult7_1.innerHTML="image is no loaded"
}})
//todo HTML document has been loaded
var jsresult1=document.getElementById("jsresult1")
var jsbtn1=document.getElementById("jsbtntest1")
jsbtn1.addEventListener("click",function(){
   window.onload(jsresult1.innerHTML="document is loaded")
})
//? CHANGE
//todo When the user changes a value of an text input
var jsresult6=document.getElementById("jsresult6")
var jsinput6=document.getElementById("jsbtntest6")
jsinput6.addEventListener("change", function () {
    jsresult6.innerHTML="Your are change the select"
})
//todo When the user changes the option of a select element -
function myFunctionjs9() {
    var x = document.getElementById("jsbtntest9").value;
    document.getElementById("jsresult9").innerHTML = "You selected: " + x;
}
//TODO When a checkbox is checked or unchecked
var jscheck11=document.getElementById('jsbtntest11')
jscheck11.addEventListener("change",function(){validate()})
function validate() {
    var jsresult11=document.getElementById("jsresult11")
    if (jscheck11.checked) {
        jsresult11.innerHTML="checked"
    } else {
        jsresult11.innerHTML="You didn't check it!"
    }
}