
//?CREATE AND PLACE
//todo Create an HTML element with any text value 
var jqbtn13=$('#jqbtntest13')
var jqresult13=$("#jqresult13")
jqbtn13.on("click",function(){
    var newbtn=$("<button></button>")
    newbtn.text("button")
    jqresult13.append(newbtn)
})
// //todo Remove an HTML element with any text value
var jqbtn14=$('#jqbtntest14')
var jqresult14=$('#jqresult14')
jqbtn14.on("click",function(){
    jqresult14.remove()
})

//todo remove all elements with the any class
var jqbtntest15=$("#jqbtntest15")
jqbtntest15.on("click",function(){
    var allElems= $(".jqa")
    for (var i=0;i<=allElems.length;i++) {
        allElems[0].remove();
    };
})

//todo Append an HTML element with any text value to a parent element 
var jqbtn16=$('#jqbtntest16')
var jqresult16=$("#jqresult16")
jqbtn16.on("click",function(){
    var newbtn=$("<button></button>");
    newbtn.text("button")
    jqresult16.append(newbtn)
})

//todo prepend an HTML element with any text value to a parent element 
var jqbtn17=$('#jqbtntest17')
var jqresult17=$("#jqresult17")
jqbtn17.on("click",function(){
    var newbtn=$("<button></button>")
    newbtn.text("button")
    jqresult17.prepend(newbtn)
})

//todo Create and add an HTML element with any text value after another element
var divjq = $("#jqbtntest18");
divjq.on("click",function(){
    var jqresult18=$("#jqresult18")
    var eljq = $("<button></button>")
    eljq.text("text");
    jqresult18.after(eljq)
})

//todo Create and add an HTML element with any text value before another element
var divjq = $("#jqbtntest19");
var jqresult19=$("#jqresult19")
divjq.on("click",function(){
    el = $("<button></button>")
    el.text("text");
    jqresult19.before(el)})

//todo Clone an HTML element within other element
var oldElementj = $("#jqbtntest20");
var newElementj = oldElementj.clone();
oldElementj.on("click",function(){
    console.log(newElementj);
    oldElementj.after(newElementj)})


//? CLass
//todo Add a class to an HTML item
var jqbtntest21 = $("#jqbtntest21");
jqbtntest21.on("click",function(){
    jqbtntest21.addClass("btnclass")})

//todo Remove a class to an HTML item
var jqbtntest22 = $("#jqbtntest22");
jqbtntest22.on("click",function(){jqbtntest22.removeClass("btnclass")})

//todo Toggle a class to an HTML item
var jqbtntest23 = $("#jqbtntest23");
jqbtntest23.on("click",function(){jqbtntest23.toggleClass("btnclass")})

//? attributes
//todo Add a disabled attribute to an HTML button
var jqbtntest24 = $("#jqbtntest24");
var jqresult24 = $("#jqresult24");
jqbtntest24.on("click",function(){
    jqresult24.text("disabled:true")
    jqbtntest24.attr("disabled","true")
})

//todo Add a disabled attribute to an HTML button
var jqbtntest25 = $("#jqbtntest25");
var jqresult25 = $("#jqresult25");
jqbtntest25.on("click",function(){
    jqresult25.removeAttr("disabled")
    jqresult25.text("no disabled")
})


//todo Set a data-src attribute to a img elementconst 
var jqresult26=$("#jqresult26")
var jqbtntest26=$("#jqbtntest26")
jqbtntest26.on("click",function(){
    jqbtntest26.data('data-src', '/src/assets/img/gato.jpg');
    jqresult26.text('/src/assets/img/gato.jpg')
})

// //todo remove a data-src attribute to a img elementconst 
var jqresult27=$("#jqresult27")
var jqbtntest27=$("#jqbtntest27")
jqbtntest27.on("click",function(){
    jqbtntest27.removeData("src")
    jqresult27.text('undefined')
})

//todo change a disabled attribute to an HTML button
var jqbtntest28 = $("#jqbtntest28");
var jqresult28 = $("#jqresult28");
jqbtntest28.on("click",function(){
    console.log(jqresult28.prop("disabled"));
    if(jqresult28.prop("disabled")==false){
        jqresult28.text("disabledtrue")
        jqresult28.prop("disabled","true")
    }else{
        jqresult28.prop("disabled","false")
        jqresult28.text("disabled:false")
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
var jqbtntest29 = $("#jqbtntest29");
var jqresult29 = $("#jqresult29");
jqbtntest29.on("click",function(){
        jqresult29.toggle();
})

//todo animate
let jqbtntest31 = $('#jqbtntest31');
let jqresult31 = $('#jqresult31');
jqbtntest31.on('click', function (params) {
        jqresult31.animate({"opacity": '0.2'});
})
