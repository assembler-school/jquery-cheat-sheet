//?CREATE AND PLACE
//todo Create an HTML element with any text value 
var jsbtn13=document.getElementById('jsbtntest13')
var jsresult13=document.getElementById("jsresult13")
jsbtn13.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jsresult13.append(newbtn)
})
// //todo Remove an HTML element with any text value
var jsbtn14=document.getElementById('jsbtntest14')
var jsresult14=document.getElementById('jsresult14')
jsbtn14.addEventListener("click",function(){
    jsresult14.remove()
})

//todo remove all elements with the any class
var jsbtntest15=document.getElementById("jsbtntest15")
jsbtntest15.addEventListener("click",function(){
    var allElems= document.getElementsByClassName("jsa")
    for (var i=0;i<=allElems.length;i++) {
        allElems[0].remove();
    };
})

//todo Append an HTML element with any text value to a parent element 
var jsbtn16=document.getElementById('jsbtntest16')
var jsresult16=document.getElementById("jsresult16")
jsbtn16.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jsresult16.append(newbtn)
})

//todo prepend an HTML element with any text value to a parent element 
var jsbtn17=document.getElementById('jsbtntest17')
var jsresult17=document.getElementById("jsresult17")
jsbtn17.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jsresult17.prepend(newbtn)
})

//todo Create and add an HTML element with any text value after another element
var div = document.getElementById("jsbtntest18");
var jsresult18=document.getElementById("jsresult18")
div.addEventListener("click",function(){
    el = document.createElement("button");
    el.innerHTML = "text";
    jsresult18.insertAdjacentElement("afterEnd", el)})

//todo Create and add an HTML element with any text value after another element
var div = document.getElementById("jsbtntest19");
var jsresult19=document.getElementById("jsresult19")
div.addEventListener("click",function(){
    el = document.createElement("button");
    el.innerHTML = "text";
    jsresult19.insertAdjacentElement("beforebegin", el)})

//todo Clone an HTML element within other element
var oldElement = document.getElementById("jsbtntest20");
var newElement = oldElement.cloneNode(true);
oldElement.addEventListener("click",function(){
    oldElement.insertAdjacentElement("beforebegin", newElement)})


//? CLass
//todo Add a class to an HTML item
var jsbtntest21 = document.getElementById("jsbtntest21");
jsbtntest21.addEventListener("click",function(){
    jsbtntest21.classList.add("btnclass")})

//todo Remove a class to an HTML item
var jsbtntest22 = document.getElementById("jsbtntest22");
jsbtntest22.addEventListener("click",function(){jsbtntest22.classList.remove("btnclass")})

//todo Toggle a class to an HTML item
var jsbtntest23 = document.getElementById("jsbtntest23");
jsbtntest23.addEventListener("click",function(){jsbtntest23.classList.toggle("btnclass")})

//? attributes
//todo Add a disabled attribute to an HTML button
var jsbtntest24 = document.getElementById("jsbtntest24");
var jsresult24 = document.getElementById("jsresult24");
jsbtntest24.addEventListener("click",function(){
    jsresult24.innerHTML="disabled:true"
    jsbtntest24.setAttribute("disabled","true")
})

//todo Add a disabled attribute to an HTML button
var jsbtntest25 = document.getElementById("jsbtntest25");
var jsresult25 = document.getElementById("jsresult25");
jsbtntest25.addEventListener("click",function(){
    jsresult25.removeAttribute("disabled")
    jsresult25.innerHTML="no disabled"
})


// //todo Set a data-src attribute to a img elementconst 
var jsresult26=document.getElementById("jsresult26")
var jsbtntest26=document.getElementById("jsbtntest26")
jsbtntest26.addEventListener("click",function(){
    jsbtntest26.setAttribute('data-src', '/src/assets/img/gato.jpg');
    jsresult26.innerText='/src/assets/img/gato.jpg'
})

// //todo remove a data-src attribute to a img elementconst 
var jsresult27=document.getElementById("jsresult27")
var jsbtntest27=document.getElementById("jsbtntest27")
jsbtntest27.addEventListener("click",function(){
    jsbtntest27.removeAttribute("data-src")
    jsresult27.innerText='undefined'
})

//todo change a disabled attribute to an HTML button
var jsbtntest28 = document.getElementById("jsbtntest28");
var jsresult28 = document.getElementById("jsresult28");
jsbtntest28.addEventListener("click",function(){
    if(jsresult28.disabled==false){
        jsresult28.disabled=true
        jsresult28.innerHTML="disabled:true"
    }else{
        jsresult28.disabled=false
        jsresult28.innerHTML="disabled:false"
    }

})
//? efects


//todo Hide and show the img
var jsbtntest29 = document.getElementById("jsbtntest29");
var jsresult29 = document.getElementById("jsresult29");
jsbtntest29.addEventListener("click",function(){
    if(jsresult29.style.display=="none"){
        jsresult29.style.display="block"
    }else{
        jsresult29.style.display="none"
    }
})

//todo animate 
let jsbtntest31 = document.getElementById('jsbtntest31');
let jsresult31 = document.getElementById('jsresult31');
jsbtntest31.addEventListener('click', function (params) {
    console.log("a");
        jsresult31.style.transition = '2s';
        jsresult31.style.opacity = '0.2';
})
