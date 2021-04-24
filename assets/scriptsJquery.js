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
    $(document).keypress(function() {
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
    $( ".result" ).text("");
    $('.result').append("<select class='sOptions'><option class='Options'> option 1</option><option class='Options'> option 2</option></select>");
    
    $('.sOptions').change(function() {
        $('.run').text('option changed');
    });
}
function isOver(){
    $( ".run" ).text("put the cursor over the sphere");
    $('.result').append("<div class='circle'></div>");
    let x=2;
    let y=2;
    $('.circle').mouseover(function() {
        
       
        $('.showComandContent').prepend('<p class="text">you are on</p>');
        console.log('llega')
        $('.text').css('transform',`translate(${x}px,${y}px)`);
        $('.text').css('transform',`scale(${x/2},${y/2})`);
        console.log('akitmb')
        x+=Math.random()*(-10);
        y+=Math.random()*10;
    });
}
function isCliked(){
    $( ".run" ).text("click checkbox below");
    $('.result').append("<input id='but' type='checkbox'>Check that");
    $('.result').css('fontSize','40px');
    $('#but').css('width','40px');
    $('#but').css('height','40px');
    $('#but').on('click',chk);
    function chk(){
        if($('#but').is(':checked')){
        
        $('.result').text('God job you checked!!');
        } 
    }
}
function selectOpt(){
    $(".run" ).text("click an element of the list");
    $('.result').append("<ul class=list><li>hello</li><li>bye bye</li></ul>");
    $('ul').css('font-size','25px')
    $('ul.list li').each(function() {
        $(this).on('click',function(){
           $('.result').append(this) ;
           $('ul.list').remove();
           $('.run').off('click');
           
        });
        
    });
}
function inElement(){
    
    $('p.result').add("div");
    //$('.result span').text('you added this text, congratulations');
   
}
function killElement(){
    $( ".run" ).text("");
    $('.result').text("");
   /* $( ''). (function() {
        $('.result').text('');
    });*/
}
function newLastCh(){
    $( ".run" ).text("apend in this box");
    $('.showComandContent').append("<p>Congratulations you added a text</p>");
   
}
function newFirstCh(){
    $( ".run" ).text("prepend in this box");
    $('.showComandContent').prepend("<p>Congratulations you preadded a text</p>");
}
function elementAfter(){
    $( ".run" ).text("create after this button");
    $('.run').after("<p>Congratulations crate this</p>");
}
function elementBefore(){
    $( ".run" ).text("create before this button");
    $('.run').before("<p>Congratulations crate this</p>");
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
