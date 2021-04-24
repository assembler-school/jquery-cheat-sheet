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
            $('.result').text(`You write: ${texVal}`);
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
function iSubm(){
    $( ".run" ).text("Click submit input below");
    $('.result').append('<form action="" class="frm">');
    $('.frm').append('<input type="text" class="inpText">');
    $('.frm').append('<input type="submit" class="submitInput">');
    
    $('.frm').submit(function(event) {
        event.preventDefault();
        let texVal=$( ".inpText" ).val();
        $('.result').text(` ${texVal}`);
        $( ".run" ).text("You already submit this text:");
    });
}
function isChange(){
    $( ".run" ).text("");
    $('.result').text("");
    /*$( ''). (function() {
        $('.result').text('');
    });*/
}
function isOver(){
    $( ".run" ).text("");
    $('.result').text("");
    /*$( ''). (function() {
        $('.result').text('');
    });*/
}
function isCliked(){
    $( ".run" ).text("");
    $('.result').text("");
    /*$( ''). (function() {
        $('.result').text('');
    });*/
}
function selectOpt(){
    $( ".run" ).text("");
    $('.result').text("");
    /*$( ''). (function() {
        $('.result').text('');
    });*/
}
function inElement(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function killElement(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function newLastCh(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function newFirstCh(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function elementAfter(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function elementBefore(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function colantion(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function addingClass(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function removingClass(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function toggClass(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function newAtribute(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function deteAtribute(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function dataSrc(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function noShow(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function siShow(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function opacityUp(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function opacityDown(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function runArray(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function PapaNode(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function sonNode(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
