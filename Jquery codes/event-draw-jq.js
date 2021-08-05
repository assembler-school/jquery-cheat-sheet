$("#draw-events").on("click", function(){
    // comment.innerHTML="This is the part of the code that gets de movement of the cursor:"
    $("#jq-code").before("<p class='comment'>This is the part of the code that gets the movement of the cursor:</p>");
    $("#jq-code").html(`$(canvas).mousemove(function(event){
        $("span").text(event.pageX+ ", " +event.pageY);
      });`)
})