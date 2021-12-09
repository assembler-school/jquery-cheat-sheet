
//? selectors

//todo get a parent
$('#jqbtntest40').on("click",function(){
    $('#jqbtntest40').parent().css({"backgroundColor":"red"})
})

//todo collection children
$("#jqbtntest41_1").on("click",function(){
    var arr=[]
    for (const x of $('#jqbtntest41').children()) {
        arr.push(x.innerHTML)
    }
    $("#jqresult41").text(arr)
})

//todo get element with a class
$("#jqbtntest42").on("click",function(){
    $(".jqa").css({"backgroundColor":"red"})
})

//todo get element with a id
$("#jqbtntest43").on("click",function(){
    $("#jqresult43_2").css({"backgroundColor":"red"})
})

// //todo get element with a attribut
$("#jqbtntest44").on("click",function(){
    $("div[src='']").eq(1).css({"backgroundColor":"red"})
})

// //todo When the user changes the option of a select element -
function myFunctionjq45() {
    var x = $("#jqbtntest45").val();
    $("#jqresult45").text("You selected: " + x)
}

// //TODO When a checkbox is checked or unchecked
$("#jqbtntest46").on("change",function(){validateq()})
function validateq() {
    if ($("#jqbtntest46").prop("checked")==true) {
        $("#jqresult46").text("checked")
    } else {
        $("#jqresult46").text("You didn't check it!")
    }
}

// //todo get first children
$("#jqbtntest47").on("click",function(){
$("#jqresult47>div").eq(0).css({"backgroundColor":"red"})
})