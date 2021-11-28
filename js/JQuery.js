function queryRemove(btn2, parBo) {
    $(btn2).remove()
}

function queryAdd(btn2, parBo) {
    $(parBo).append("<p>EXISTANCE IS PAIN<p>")
}

function queryAppend(btn2, parBo, test) {
    $(parBo).append(test)
}

function queryPrepend(btn2, parBo) {
    $(parBo).prepend("<p>I´m a timelord!<p>")
}

function queryCreateAdd(btn2, parBo) {
    $(parBo).append("<p>So I have become death, destroyer of worlds<p>")
}

function queryCreateAddBefore(btn2, parBo) {
    $(parBo).prepend("<p>BANG!<p>")
}

function queryClone(btn2, parBo) {
    $(btn2).clone().appendTo(parBo)
}

function addClassQuery (btn2, parBo){
$(btn2).addClass("trial")
}

function testName(btn2, parBo) {
    $(btn2).removeClass("trial2")
    console.log("logged")
    
}

function toogleClassQuery(btn2, parBo) {
    $(btn2).toggleClass("trial2")
}

function disabledQuery(btn2, parBo) {
    $(btn2).attr("disabled", "true")
}

function fixDisabledQuery(btn2, parBo) {
$("#dummy2").prop("disabled", false)
}

function JqueryHide(btn2, parBo) {
    $(".dark").hide()
}

function JqueryShow(btn2, parBo, z) {
$(z).show()
}

function fadeInFun(btn2, parBo, x){
    $(x).fadeIn()
}

function fadeOutFun(btn2, parBo, x){
    $(x).fadeOut("slow")
}

function chaosShouldPrevail(btn2, parBo) {
    $("p").css("background", "blue")
}

function fatherElementQuery(btn2, parBo) {
    $(btn2).parent().css("color", "green")
}

function redPaintedKids(btn2, parBo) {
    $(parBo).children().css("color", "red")
}

function allPToYellow(btn2, parBo){
    $("p").each(function(){
        $(this).css("background", "white")
    })
}

function shootPaintBallOrange(btn2, parBo) {
    $("#street").css("color", "orange")
}
function magicCarpetRide(btn2, parBo) {
    $(".magicians").css({
        "display":"block",
        "color":"red"
    })
}
function chooseFruits(btn2, parBo){
    let x = document.createElement("p")
    $(x).text($("#fruit option:selected").text())
$(parBo).append(x)
}

function tiredOfJokes(btn2, parBo){
    let h = $("a").prop("href", "https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley")
}

function passTheValue(parBo){
    alert($("input").val())
}

function destroyThePage(btn2, parBo){
    $(body).empty()
}

function letsDance(btn2, parBo){
    console.log($("#carmen"))
    $("#carmen").delay(2000).animate({
        width: "500px"
    }, 2000).fadeOut(4000);
}

function checkIfReady(btn2, parBo){
    if ($(document).ready()){
       $(parBo).append("<p>Yup, I loaded<p>")
    }
}

function queryButtonCreate(btn2, parBo){
    $(parBo).append("<button class=clicky>Click me to run the event listener.</button>")
    $(".clicky").on({
        click: function(){
            $(parBo).append("<p>Thank you for my life</p>")
        }
    })
}

function queryButtonCreate2(btn2, parBo){
$(parBo).append("<button class=unique>I´m a griddy little button</>")
    $(".unique").on({
        dblclick: function(){
            $(this).css("background", "red")
        }
    })
}

function eventD(btn2, parBo){
    $(document).on({
        keydown: function (){
            $(btn2).css("color", "red")
        }
    })
}
function eventM(btn2, parBo)  {
    $(document).on({
        mousemove: function(){
            $(btn2).css("position", "absolute")
        }
    })
}

function eventZ(btn2, parBo){
    $("#copy").on({
        change: function(){
            let k = document.createElement("p")
            $(k).text($("#copy").val())
            $(btn2).append(k)
        }
    })
}

function imageM(btn2, parBo) {
    $(parBo).append("<img class=loadBurning src=images/coding.jpg>")
    $(".loadBurning").load( function(){
        $(parBo).css("color", "red")
    })
}

function loadDidntWork(btn2, parBo) {
    $(parBo).append("<img src=images/s class=ppp>")
    $(".ppp").on({
        error: function(){
            $(parBo).css("background", "blue")
        }
    })
}

function erroImage(btn1, par){
    let x = document.createElement("img")
    x.setAttribute("src", "images/341")
    par.appendChild(x)

    x.addEventListener("error", (e)=> {
        btn1.style.background ="blue"
    })
}

function formCreations(parBo, btn2){
    $(btn2).append("<form class=elemental id=elemental><label for=fname>Random form</label> <input type=text id=fname  name=fname> <button class=op>Execute</button></form>")
    $(".elemental").on({
        submit: function(){
            event.preventDefault()
            $(parBo).css("color", "green")
        }
    })
    }

    function selectChanges(btn2, parBo){
        $(parBo).append("<label for=car>Choose a car</label><select name=car id=car class=car><option value=Tesla>Tesla</option><option value=Ferrari>Ferrari</option>")
    $(".car").on({
        change: function(){
            let x = document.createElement("p")
            $(x).text($(".car").val())
            $(parBo).append(x)
        }
    })
    }
    
    function absolutist(btn2, parBo){
        $(parBo).on({
            mouseenter: function(){
                $(this).css("color", "green")
            }
        })
    }

    function lastChecks(btn2, parBo){
        $(parBo).append("<input type=checkbox  class=car2 id=car2 name=car2 value=Car> <button class=checkings2>Check</button><label for=car1>Just check me</label>")
    $(".checkings2").on({
        click: function(){
            $(".car2").on({
                change: function(){
                   if( $(this).prop("checked") === true){
                       $(parBo).css("color", "blue")
                   }
                   else {
                    $(parBo).css("color", "black")
                   }
                }
                
            })
        }
    
    })
}

function  itIsFinallyOver(btn2, parBo){
    $(parBo).append("<ul class=done><li>Element1</li><li>Element2</li><li>Element3</li></ul>")
  $( "li:nth-child(2)" ).on({
      click: function(){
          $(this).css("color", "blue")
      }
  })
}

