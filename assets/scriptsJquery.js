function ready(){
    
    $( document ).ready(function() {
        $('.result').text('The DOM is Ready!');
    });
}
function clicked(){
    
    if($( ".run" ).data('clicked',true)){
        $('.result').text('The button had been cliked');
     }
}function dubl(){
   
    $( ".run" ).dblclick(function() {
        $('.result').text('You make the doble click!!');
    });
}function keyP(){
    $( ".run" ).text("press any key");
    $( ".run" ).keypress(function() {
        $('.result').text('You press a key, good job!!');
    });
}function mousMv(){
    $( ".run" ).text("mouve cursos below");
    $( ".result" ).mousemove(function(event) {
        $('.result').text('x: '+event.pageX+' , '+'y: '+event.pageY);
    });
}function textVal(){
    $( ".run" ).text("Write below & click here");
    $( ".run" ).ready(function() {
        $('.result').append('<input type="text" class="inpText">');
        $('.run').off('click',textVal);
        $('.run').on('click',grapTx);
        function grapTx(){
            let texVal=$( ".inpText" ).val();
            $('.result').text(`Has escrito esto: ${texVal}`);
        }
    });
}function loadAction(){
    $( ".run" ).text("Wait to image");
    $('.result').append('<img src="assets/ShinChan1.jpg" alt="culo" class="imag">');
    $('.result').load('.imag',function() {
        $('.run').text('Enjoy this image!');
    });
}function errAction(){
    $('.result').append('<img src="assets/scriptsNative.js" alt="culo" class="imatg">');
    $( '.imatg').error(function() {
        $('.result').text('there is an error charging the image!');
    });
}