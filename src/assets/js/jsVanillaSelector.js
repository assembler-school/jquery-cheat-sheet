//? selectors

//todo get a parent
var jsbtntest40 = document.getElementById('jsbtntest40');
jsbtntest40.addEventListener("click",function(){
    jsbtntest40.parentElement.style.backgroundColor="red"
})

//todo collection children
var jsbtntest41 = document.getElementById('jsbtntest41');
var jsbtntest41_1 = document.getElementById('jsbtntest41_1');
var jsresult41 = document.getElementById('jsresult41');
jsbtntest41_1.addEventListener("click",function(){
    var arr=[]
    for (const x of jsbtntest41.children) {
        arr.push(x.innerHTML) 
    }
    jsresult41.innerHTML=arr
})

//todo get element with a class
var jsa = document.getElementsByClassName("jsa")
var jsbtntest42=document.getElementById("jsbtntest42")
jsbtntest42.addEventListener("click",function(){
    for (const x of jsa) {
        x.style.backgroundColor="red"
    }
})

//todo get element with a class
var jsresult43_2 = document.getElementById("jsresult43_2")
var jsbtntest43=document.getElementById("jsbtntest43")
jsbtntest43.addEventListener("click",function(){
    jsresult43_2.style.backgroundColor="red"
})

//todo get element with a class
var divsrc = document.querySelector("div[src='']")
var jsbtntest44=document.getElementById("jsbtntest44")
jsbtntest44.addEventListener("click",function(){
    divsrc.style.backgroundColor="red"
})

//todo When the user changes the option of a select element -
function myFunctionjs45() {
    var x = document.getElementById("jsbtntest45").value;
    document.getElementById("jsresult45").innerHTML = "You selected: " + x;
}

//TODO When a checkbox is checked or unchecked
var jscheck46=document.getElementById('jsbtntest46')
jscheck46.addEventListener("change",function(){validate()})
function validate() {
    var jsresult46=document.getElementById("jsresult46")
    if (jscheck46.checked) {
        jsresult46.innerHTML="checked"
    } else {
        jsresult46.innerHTML="You didn't check it!"
    }
}

//todo get first children
var firstA = document.querySelector("#jsresult47>div")
var jsbtntest47=document.getElementById("jsbtntest47")
jsbtntest47.addEventListener("click",function(){
    firstA.style.backgroundColor="red"
})