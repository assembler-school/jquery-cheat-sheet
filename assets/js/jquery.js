const exercisesArr = [
    {
        dataset:13,
        tittle:"HTML document has been loaded",
        commandJQ:"ready()",
        commandJS:"ready()",
        functions:function (jQueryDiv, jScriptDiv){exerciseJS13(jScriptDiv),exerciseJQ13(jQueryDiv)},
    },
    {
        dataset:14,
        tittle:"HTML document has been loaded",
        commandJQ:"imput",
        commandJS:"imput",
        functions:function (jQueryDiv, jScriptDiv){exerciseJS14(jScriptDiv,),exerciseJQ14(jQueryDiv,)},
    },
    {
        dataset:15,
        tittle:"HTML document has been loaded",
        commandJQ:"imput",
        commandJS:"imput",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS15(jScriptDiv,),exerciseJQ15(jQueryDiv,)},
    },
    {
        dataset:16,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS16(jScriptDiv,),exerciseJQ16(jQueryDiv,)},
    },
    {
        dataset:17,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS17(jScriptDiv,),exerciseJQ17(jQueryDiv,)},
    },
    {
        dataset:18,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS18(jScriptDiv,),exerciseJQ18(jQueryDiv,)},
    },
    {
        dataset:19,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS19(jScriptDiv,),exerciseJQ19(jQueryDiv,)},
    },
    {
        dataset:20,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS20(jScriptDiv,),exerciseJQ20(jQueryDiv,)},
    },
    {
        dataset:21,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS21(jScriptDiv,),exerciseJQ21(jQueryDiv,)},
    },
    {
        dataset:22,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS22(jScriptDiv,),exerciseJQ22(jQueryDiv,)},
    },
    {
        dataset:23,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS23(jScriptDiv,),exerciseJQ23(jQueryDiv,)},
    },
    {
        dataset:24,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS24(jScriptDiv,),exerciseJQ24(jQueryDiv,)},
    },
    {
        dataset:25,
        tittle:"HTML document has been loaded",
        functions:function (jQueryDiv, jScriptDiv,){exerciseJS25(jScriptDiv,),exerciseJQ25(jQueryDiv,)},
    },
]
function findExercisesFun(index){
    exercise = exercisesArr.find(item => {
        return item.dataset === index;
    })
    if(exercise == null){
        return console.log("do not exist");
    }else{
        return exercise;
    }
}
function exerciseJQ13(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
    var createElementP = $("<input type='text' id="input-solution" size="7" >").text("Congratulations!")
    </code>
    `
    //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
    //content exercise here
    `
    `
    //content exercise here
    +"</div>")
    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="<p></p>"){
            $("#solution-box").text("Congratulations!")
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("<p></p>")
    }

}
function exerciseJQ14(jQueryDiv){
   $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="8" >;
    </code>
    `
    //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
    //content exercise here
    `
    `
    //content exercise here
    +"</div>")
    $("#solution-box").append('<div id="div1">remove me!</div>')

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="remove()"){
            $("#solution-box").text("removed!")
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("remove()")
    }

}
function exerciseJQ15(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
     `<code>
     $("#div1").<input type='text' id="input-solution" size="6">(&lt;div id="div2">brother2: I want to be it!!!&lt;/div>);
     </code>
     `
     //content exercise here
     +"</div>")
     $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
     `
     Parent: I am the parent,
     `
     //content exercise here
     +"</div>")
     $("#solution-box").append('<div id="div1">brother1: I want a brother!</div>')
 
     $("#solution-button").on("click",validateSolutionFun)
     function validateSolutionFun(){
         if( $("#input-solution").val()=="append"){
            $("#solution-box").append('<div id="div2">brother2: I want to be it!!!</div>')
         }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
         }
     }
     $("#show-solution-button").on("click",showSolutionFun)
     function showSolutionFun(){
         $("#input-solution").val("append")
     }
 
}
function exerciseJQ16(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
     `<code>
     $("#div1").<input type='text' id="input-solution" size="7">(&lt;div id="div2">brother2: ok I sleep up!!!&lt;/div>);
     </code>
     `
     //content exercise here
     +"</div>")
     $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
     `
     Parent: I am the parent ("textContent"),
     `
     //content exercise here
     +"</div>")
     $("#solution-box").append('<div id="div1">brother1: I want tu sleep down on the bunk!</div>')
 
     $("#solution-button").on("click",validateSolutionFun)
     function validateSolutionFun(){
         if( $("#input-solution").val()=="prepend"){
            $("#solution-box").prepend('<div id="div2">brother2: ok I sleep up!!!</div>')
         }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
         }
     }
     $("#show-solution-button").on("click",showSolutionFun)
     function showSolutionFun(){
         $("#input-solution").val("prepend")
     }
 
}
function exerciseJQ17(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="5">(&lt;div id="div2">brother2: here I am!!!!!! &lt;/div>);
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div id="div1">brother1: Brother1 :I want someone bellow to me!</div>')

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="after"){
            $("#div1").after('<div id="div2">brother2: here I am!!!!!!</div>')
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("after")
    }

}
function exerciseJQ18(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="5">(&lt;div id="div2">brother2: here I am!!!!!! &lt;/div>);
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div id="div1">brother1: Brother1 :I want someone above to me!</div>')

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="before"){
            $("#div1").before('<div id="div2">brother2: here I am!!!!!!</div>')
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("before")
    }

}
function exerciseJQ19(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="5">().after("#div1");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1">Brother1 :I want to be cloned</div>')
    $("#solution-box").append('<div id="div2">Brother2 :I do not want to be cloned cloned</div>')

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="clone"){
            $(".div1").clone().appendTo("#div2")
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("clone")
    }

}
function exerciseJQ20(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="8">("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1">Dude :I want to have class</div>')

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="addClass"){
            $(".div1").addClass("poor-class")
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("addClass")
    }

}
function exerciseJQ21(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="11">("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1 poor-class">Dude :I do not want this class!!</div>')
    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="removeClass"){
            $(".div1").removeClass("poor-class")
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("removeClass")
    }
}
function exerciseJQ22(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#div1").<input type='text' id="input-solution" size="11">("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1 poor-class">Dude :I am undecided person!!</div>')
    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="toggleClass"){
            $(".div1").toggleClass("poor-class")
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("toggleClass")
    }
}
function exerciseJQ23(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#show-solution-button").<input type='text' id="input-solution" size="11">("disabled", true)
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1">Dude :do not show the solution any more!!</div>')
    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="prop"){
            $("#show-solution-button").prop("disabled", true)
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("prop")
    }
}
function exerciseJQ24(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#show-solution-button").<input type='text' id="input-solution" size="11">("disabled", "false")
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<div class="div1">Dude :If you want the solution, you need the solution...</div>')
    $("#solution-button").on("click",validateSolutionFun)
    $("#show-solution-button").prop("disabled", true)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="prop"){
            $("#show-solution-button").prop("disabled",false)
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("you know it...")
    }
}
function exerciseJQ25(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="4">("src","/assets/img/great.jpg")
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `
    `
     //content exercise here
    +"</div>")
    $("#solution-box").append('<img id="img1" src="" alt="">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="attr"){
            $("#img1").attr("src","/assets/img/great.jpg")
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("attr")
    }
}