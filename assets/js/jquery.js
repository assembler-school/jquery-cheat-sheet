
function exerciseJQ0(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("document").<input type='text' id="input-solution" size="7" >().$("#solution-box").text("Congratulations! TIP:")
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">Push me!</button>`)

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="ready"){
            $(function(){$("#solution-box").text("Congratulations! TIP:you can use the short-hand $(function(){}) or $(window).on('load',function(){})" )})
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("ready")
    }
}
function exerciseJQ1(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("#solution-button").on('<input type='text' id="input-solution" size="7" >',()=>{$("#solution-box").text("clicked!!")})
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">BTN-TEST</button>`)

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="click"){
            $("#solution-box").text("clicked!!")
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("click")
    }
}
function exerciseJQ2(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("#solution-button").on('<input type='text' id="input-solution" size="7" >',()=>{$("#solution-box").text("dOblE clickED!!")})
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">BTN-TEST</button>`)

    $("#solution-button").on("dblclick",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="dblclick"){
            $("#solution-box").text("dOblE clickED!!")
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("dblclick")
    }
}
function exerciseJQ3(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("#solution-button").on('<input type='text' id="input-solution" size="7" >',()=>{$("#solution-box").text("You just keypres the" + e.target + "key")})
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">BTN-TEST</button>`)

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="keypress"){
            console.log("entré")
            $(document).on("keypress", function (e) {
                console.log(e.which)
                console.log(e.target)
                $("#solution-box").text("You just keypres the " + String.fromCharCode(e.which) + " key")
            })
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("keypress")
    }
}
function exerciseJQ4(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("#solution-button").on('<input type='text' id="input-solution" size="7" >',()=>{$("#solution-box").text("I am moving the mouse: " + counter+ " times")})
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">BTN-TEST</button>`)

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="mousemove"){
            console.log("entré")
            let counter = 0;
            $(document).on("mousemove", counterFun)
            function counterFun(){
                while (counter <= 120000) {
                    $("#solution-box").text("I am moving the mouse: " + counter+ " times")
                    if (counter>=110000){
                        $(document).off("mousemove", counterFun)
                        return;
                    }
                counter ++;
                console.log(counter)
                }
                return;
            }
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("mousemove")
    }
}
function exerciseJQ5(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
    //content exercise here
    `<code>
     = $("#solution-button").on('<input type='text' id="input-solution" size="7" >',()=>{$("#solution-box").text("I am moving the mouse: " + counter+ " times")})
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

    //$("#solution-box").append(`<button id="btn-test" class="exercise-btn">BTN-TEST</button>`)

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="mousemove"){
            console.log("entré")
            let counter = 0;
            $(document).on("mousemove", counterFun)
            function counterFun(){
                while (counter <= 120000) {
                    $("#solution-box").text("I am moving the mouse: " + counter+ " times")
                    if (counter>=110000){
                        $(document).off("mousemove", counterFun)
                        return;
                    }
                counter ++;
                console.log(counter)
                }
                return;
            }
        }else{
            $("#solution-box").text("try again")
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("mousemove")
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
            $( "#img1" ).attr( "src" , "/assets/img/great.jpg" );
            $( "#img1" ).data("-src", "hola" );
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("attr")
    }
}
function exerciseJQ26(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="10">("src")
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
    $("#solution-box").append('<img id="img1" data-src="/assets/img/great.jpg" src="/assets/img/great.jpg" alt="">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="removeData"){
            $("#img1").removeData(data-src)
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("removeData")
    }
}
function exerciseJQ27(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="4">()
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
    $("#solution-box").append('<img id="img1" data-src="/assets/img/great.jpg" src="/assets/img/great.jpg" alt="">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="hide"){
            $("#img1").hide()
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("hide")
    }
}
function exerciseJQ28(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="4">()
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
    $("#solution-box").append('<img id="img1" data-src="/assets/img/great.jpg" src="/assets/img/great.jpg" alt="" style="display:none">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="show"){
            $("#img1").show()
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("show")
    }
}
function exerciseJQ29(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="7">()
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
    $("#solution-box").append('<img id="img1" data-src="/assets/img/great.jpg" src="/assets/img/great.jpg" alt="" style="display:none">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="fadeIn"){
            $("#img1").fadeIn()
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("fadeIn")
    }
}
function exerciseJQ30(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#img1").<input type='text' id="input-solution" size="7">()
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
    $("#solution-box").append('<img id="img1" data-src="/assets/img/great.jpg" src="/assets/img/great.jpg" alt="">')

    $("#solution-button").on("click",validateSolutionFun)

    function validateSolutionFun(){
        if( $("#input-solution").val()=="fadeOut"){
            $("#img1").fadeOut()
        }else{
            $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("fadeOut")
    }
}
function exerciseJQ31(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#solution-box").<input type='text' id="input-solution" size="5">( (i,x) => {
        $(x).addClass("poor-class");
    })
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `<div id="parent">I am a div parent
        <h1 id="firstChild">I am a H1 first child</h1>
        <ul>I am an ul
            <li>list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
            <li>list item 4</li>
        </ul>
        <h2>I am a H2 XAO!</h2>
    </div>
`
     //content exercise here
    +"</div>")

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="each"){//solution
            $("#solution-box").each( (i,x) => {//function to do on the solution
                $(x).addClass("poor-class");
            })
        }else{
                $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("each")//solution
    }
}
function exerciseJQ32(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#firstChild").<input type='text' id="input-solution" size="6">().addClass("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `<div >I am a div parent
        <h1>I am an H1</h1>
        <ul id="parent">I am an ul 
            <li id="firstChild">list item 1</li>
            <li>list item 2</li>
            <li>list item 3</li>
            <li>list item 4</li>
        </ul>
        <h2>I am a H2 XAO!</h2>
    </div>
`
     //content exercise here
    +"</div>")

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="parent"){//solution
            $("#firstChild").parent().addClass("poor-class");
        }else{
                $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("parent")//solution
    }
}
function exerciseJQ33(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $("#parent").<input type='text' id="input-solution" size="6">().addClass("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `<div >I am a div parent
        <h1 >I am an H1</h1>
        <ul id="parent">I am an ul 
            <li id="firstChild">list item 1</li>
            <li class="certainClass">list item 2</li>
            <li>list item 3</li>
            <li class="certainClass">list item 4</li>
        </ul>
        <h2>I am a H2 XAO!</h2>
    </div>
`
     //content exercise here
    +"</div>")

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="children"){//solution
            $("#parent").children().addClass("poor-class");
        }else{
                $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("children")//solution
    }
}
function exerciseJQ34(jQueryDiv){
    $(jQueryDiv).append("<div class='jQuery-container-inner'>"+
     //content exercise here
    `<code>
    $(".certainClass").<input type='text' id="input-solution" size="6">().addClass("poor-class");
    </code>
    `
     //content exercise here
    +"</div>")
    $(jQueryDiv).append("<div class='jQuery-container-inner' id='solution-box'>"+
     //content exercise here
    `<div >I am a div parent
        <h1 >I am an H1</h1>
        <ul id="parent">I am an ul 
            <li id="firstChild">list item 1</li>
            <li class="certainClass">list item 2</li>
            <li>list item 3</li>
            <li class="certainClass">list item 4</li>
        </ul>
        <h2>I am a H2 XAO!</h2>
    </div>
`
     //content exercise here
    +"</div>")

    $("#solution-button").on("click",validateSolutionFun)
    function validateSolutionFun(){
        if( $("#input-solution").val()=="children"){//solution
            $(".certainClass").addClass("poor-class");
        }else{
                $("#solution-box").append('<div id="div2">Try Again!</div>')
        }
    }
    $("#show-solution-button").on("click",showSolutionFun)
    function showSolutionFun(){
        $("#input-solution").val("children")//solution
    }
}



