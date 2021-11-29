
//?CREATE AND PLACE
//todo Create an HTML element with any text value 
var jqbtn13=document.getElementById('jqbtntest13')
var jqresult13=document.getElementById("jqresult13")
jqbtn13.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jqresult13.append(newbtn)
})
// //todo Remove an HTML element with any text value
var jqbtn14=document.getElementById('jqbtntest14')
var jqresult14=document.getElementById('jqresult14')
jqbtn14.addEventListener("click",function(){
    jqresult14.remove()
})

//todo remove all elements with the any class
var jqbtntest15=document.getElementById("jqbtntest15")
jqbtntest15.addEventListener("click",function(){
    var allElems= document.getElementsByClassName("jqa")
    for (var i=0;i<=allElems.length;i++) {
        allElems[0].remove();
    };
})

//todo Append an HTML element with any text value to a parent element 
var jqbtn16=document.getElementById('jqbtntest16')
var jqresult16=document.getElementById("jqresult16")
jqbtn16.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jqresult16.append(newbtn)
})

//todo prepend an HTML element with any text value to a parent element 
var jqbtn17=document.getElementById('jqbtntest17')
var jqresult17=document.getElementById("jqresult17")
jqbtn17.addEventListener("click",function(){
    var newbtn=document.createElement("BUTTON");
    newbtn.innerText="button"
    jqresult17.prepend(newbtn)
})

//todo Create and add an HTML element with any text value after another element
var divj = document.getElementById("jqbtntest18");
var jqresult18=document.getElementById("jqresult18")
divj.addEventListener("click",function(){
    el = document.createElement("button");
    el.innerHTML = "text";
    jqresult18.insertAdjacentElement("afterEnd", el)})

//todo Create and add an HTML element with any text value before another element
var divjq = document.getElementById("jqbtntest19");
var jqresult19=document.getElementById("jqresult19")
divjq.addEventListener("click",function(){
    el = document.createElement("button");
    el.innerHTML = "text";
    jqresult19.insertAdjacentElement("beforebegin", el)})

//todo Clone an HTML element within other element
var oldElementj = document.getElementById("jqbtntest20");
var newElementj = oldElementj.cloneNode(true);
oldElementj.addEventListener("click",function(){
    oldElementj.insertAdjacentElement("beforebegin", newElementj)})


//? CLass
//todo Add a class to an HTML item
var jqbtntest21 = document.getElementById("jqbtntest21");
jqbtntest21.addEventListener("click",function(){
    jqbtntest21.classList.add("btnclass")})

//todo Remove a class to an HTML item
var jqbtntest22 = document.getElementById("jqbtntest22");
jqbtntest22.addEventListener("click",function(){jqbtntest22.classList.remove("btnclass")})

//todo Toggle a class to an HTML item
var jqbtntest23 = document.getElementById("jqbtntest23");
jqbtntest23.addEventListener("click",function(){jqbtntest23.classList.toggle("btnclass")})

//? attributes
//todo Add a disabled attribute to an HTML button
var jqbtntest24 = document.getElementById("jqbtntest24");
var jqresult24 = document.getElementById("jqresult24");
jqbtntest24.addEventListener("click",function(){
    jqresult24.innerHTML="disabled:true"
    jqbtntest24.setAttribute("disabled","true")
})

//todo Add a disabled attribute to an HTML button
var jqbtntest25 = document.getElementById("jqbtntest25");
var jqresult25 = document.getElementById("jqresult25");
jqbtntest25.addEventListener("click",function(){
    jqresult25.removeAttribute("disabled")
    jqresult25.innerHTML="no disabled"
})


//todo Set a data-src attribute to a img elementconst 
var jqresult26=document.getElementById("jqresult26")
var jqbtntest26=document.getElementById("jqbtntest26")
jqbtntest26.addEventListener("click",function(){
    jqbtntest26.setAttribute('data-src', '/src/assets/img/gato.jpg');
    jqresult26.innerText='/src/assets/img/gato.jpg'
})

// //todo remove a data-src attribute to a img elementconst 
var jqresult27=document.getElementById("jqresult27")
var jqbtntest27=document.getElementById("jqbtntest27")
jqbtntest27.addEventListener("click",function(){
    jqbtntest27.removeAttribute("data-src")
    jqresult27.innerText='undefined'
})

//todo change a disabled attribute to an HTML button
var jqbtntest28 = document.getElementById("jqbtntest28");
var jqresult28 = document.getElementById("jqresult28");
jqbtntest28.addEventListener("click",function(){
    if(jqresult28.disabled==false){
        jqresult28.disabled=true
        jqresult28.innerHTML="disabled:true"
    }else{
        jqresult28.disabled=false
        jqresult28.innerHTML="disabled:false"
    }
})
// //? efects

//todo Hide and show the img
var jqbtntest30 = $("#jqbtntest30");
var jqresult30 = $("#jqresult30");
jqbtntest30.on("click",function(){
        if(jqbtntest30.text()=="Fade In"){
            jqresult30.fadeIn();
            jqbtntest30.text("Fade Out")
        }
        else{
            jqresult30.fadeOut()
            jqbtntest30.text("Fade In")
        }
    })

//todo Hide and show the img
var jqbtntest29 = document.getElementById("jqbtntest29");
var jqresult29 = document.getElementById("jqresult29");
jqbtntest29.addEventListener("click",function(){
    if(jqresult29.style.display=="none"){
        jqresult29.style.display="block"
    }else{
        jqresult29.style.display="none"
    }
})

//todo animate 
let jqbtntest31 = document.getElementById('jqbtntest31');
let jqresult31 = document.getElementById('jqresult31');
jqbtntest31.addEventListener('click', function (params) {
        jqresult31.style.transition = '2s';
        jqresult31.style.opacity = '0.2';
})
