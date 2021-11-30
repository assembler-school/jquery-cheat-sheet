


//? keyboard
//todo When the user presses a key on the keyboard
var jqresult4=$("#jqresult4")
window.addEventListener('keypress', function (e) {
    jqresult4.text(`You pressed ${e.key} and code is ${e.keyCode}`) ;
}, false);
//todo When the user presses down a key on the keyboard
var jqresult35=$("#jqresult35")
window.addEventListener('keydown', function (e) {
    jqresult35.text(`You pressed ${e.key} and code is ${e.keyCode}`) ;
}, false);
//todo When the user presses up a key on the keyboard
var jqresult36=$("#jqresult36")
window.addEventListener('keyup', function (e) {
    jqresult36.text(`You pressed ${e.key} and code is ${e.keyCode}`) ;
}, false);
//? MOUSE
//todo When an HTML item has been clicked
var jqresult2=$("#jqresult2")
var jqbtn2=$("#jqbtntest2")
jqbtn2.on("click", () => {
    jqresult2.text("estoy haciendo un click")
})
//todo When an HTML item has been double clicked
var jqresult3=$("#jqresult3")
var jqbtn3=$("#jqbtntest3")
jqbtn3.on("dblclick", () => {
    jqresult3.text("estoy haciendo doble-click")
})
//todo  to see where the mouse moves
var jqresult5=$("#jqresult5")
function jqtest5(a) {
    jqresult5.text(`mouse location = X: ${a.x}, Y: ${a.y}`) ;
}
//todo When you position the mouse over an element
$("#jqbtntest10").onmouseover = function () {
    mouseOverj()};
$("#jqbtntest10").onmouseout = function () {
    mouseOutj()};
function mouseOverj() {
    $("#jqresult10").css({"color" : "red"});}
function mouseOutj() {
    $("#jqresult10").css({"color" : "black"});}
//? LOAD
//todo When an image is loaded
var jqresult7 = $('#jqresult7')
var jqimg7 = $('#jqbtntest7')
jqimg7.on("click",function(){
    jqresult7.text("image is loaded")
})
//todo When an image is no loaded
var jqresult7_1 = $('#jqresult7_1')
var jqimg7_1 = $('#jqbtntest7_1')
jqimg7_1.on("click",function(){
    jqresult7_1.text("image is no loaded")
})
//todo HTML document has been loaded
var jqresult1=$("#jqresult1")
var jqbtn1=$("#jqbtntest1")
jqbtn1.on("click",function(){
   window.onload(jqresult1.text("document is loaded"))
})
//? CHANGE
//todo When the user changes a value of an text input
var jqresult6=$("#jqresult6")
var jqinput6=$("#jqbtntest6")
jqinput6.on("change", function () {
    jqresult6.text("Your are change the select")
})
//todo When the user changes the option of a select element -
function myFunctionjq9() {
    console.log("a")
    var x = $("#jqbtntest9").val();
    $("#jqresult9").text("You selected: " + x);
}
//TODO When a checkbox is checked or unchecked
var jqcheck11=$('#jqbtntest11')
jqcheck11.on("change",function(){validatejq()})
function validatejq() {
    var jqresult11=$("#jqresult11")
    if (jqcheck11.prop('checked')) {
        jqresult11.text("checked")
    } else {
        jqresult11.text("You didn't check it!")
    }
}