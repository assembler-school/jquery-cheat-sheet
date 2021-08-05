
$(buttonClick).on("click", function(){
    // $("#jq-code").text("");
    $("#jq-code").html(`$("buttonClick").on("click", function(){
        Your Function})`)
})

$(buttonClick).on("dblclick", function(){
    $("#jq-code").html(`$("buttonClick").on("dblclick",function(){ Your Function})`)
})

$(window).on("keydown", function(e){
    if(e.keyCode===32){
        $("#jq-code").html(`$('$(window).on("keydown", function(){ if(e.keyCode===32){Your Function} })'`)
    }
})

