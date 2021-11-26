//HTML document has been loaded 
$(".jqbtntest1").on("click",function(){
    $(document).ready(function(){
        $("#jqresult1").text("document is loaded")
        })
})
//todo When an HTML item has been clicked
$(".jqbtntest2").click(() => {
    $("#jqresult1").text("Has clicked")
})