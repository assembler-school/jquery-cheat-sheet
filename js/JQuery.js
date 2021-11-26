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