//! functions
function createElementfunctionJq () {
    var el = $("<span>" + 'text ' + "<span>");
    $('#createElementIdTestResultjq').append(el);

}

function removeElementfunctionJq() {
    buttonTest('removeElementIdTestResultjq',  "button-testjq")
    setTimeout(() => {
        $("#button-testjq").remove();
    }, 3000);
}

//! Events

function htmlLoadedElementfunctionIdJq(){
    let textodelhtml= $("<p></p>").text("Document HTML loaded")
    $("#HTMLLoadedElementIdTestResultjq").append(textodelhtml)
}

function clickElementfunctionIdJq(){
    let textodelhtml= $("<p></p>").text("click")
    $("#clickElementIdTestResultjq").append(textodelhtml)
}
function dblclickElementfunctionIdJq(){
    $("#dblclickElementfunctionIdJq").dblclick(()=>{
    let textoadelhtml= $("<p></p>").text("double click")
    $("#dblclickElementIdTestResultjq").html(textoadelhtml)
    })
}

function keyListenerjq(){
    $("#keyElementfunctionIdJq").keypress(function(e){
        let pruebajq= document.createElement("p")
        pruebajq=` You pressed ${e.key}`
        // pruebajq.text= (` You pressed ${e.key}`)
        $("#keyElementIdTestResultjq").html(pruebajq)
    })
}

function cursorElementfunctionIdJq(){
    $("#cursorElementfunctionIdJq").bind("mousemove", function (e) { 
        // values: e.clientX, e.clientY, e.pageX, e.pageY
        let cursor= $("<p></p>").text("e.pageX: " + e.pageX + ", e.pageY: " + e.pageY);
        // cursor=` mouse location = x: ${e.x},Y:${e.y}`
        // cursor=` mouse location = x: ${e.x},Y:${e.y}`
        $("#cursorElementIdTestResultjq").html(cursor)
    });
}
function valueInputElementfunctionIdJq(){
    let input = $("<input>")
    $("#valueInputElementIdTestResultjq").append(input)
    $("#valueInputElementIdTestResultjq").on("change", function(){
        alert("Input Changed")
    })
}
function imageloadInputElementfunctionIdJq(){
    var inputfoto=$("<input>").attr("type", "file")
    let imageloading= $("#imageloadInputElementIdTestResultjq")
    imageloading.append(inputfoto)
    imageloading.on("change", ()=>{
        alert("Image Loaded")
        foto=inputfoto[0].files[0]
        let imageType= /image.*/;
        if (foto.type.match(imageType)){
            let reader = new FileReader()
            reader.onload=function(e){
                let prueba1= ""
                $("#imageloadInputElementIdTestResultjq").html(prueba1)
                imageloading.html(prueba1)
                let img=new Image()
                img.src=reader.result;
                $("#imageloadInputElementIdTestResultjq").append(img)
            }
            reader.readAsDataURL(foto)
        } else{
            let not= "File not supported!"
            $("#imageloadInputElementIdTestResultjq").html(not)
        }
    })
}

function failImageloadInputElementIdTestResultjq(){
    let inputimage= $("<input>").attr("type", "file");
    let imageload= $("#failImageloadInputElementIdTestResultjq")
    imageload.html(inputimage)
    imageload.on("change", ()=>{
        alert("image failed")
        let texto= "image failed to load"
        imageload.append(texto)
    })
}
function formSubmloadInputElementfunctionIdJq(){
    let inputformjq=$("<input>").attr("type", "submit")
    let inputid=$("#formSubmloadInputElementIdTestResultjq")
    let texto="submit"
    $(inputformjq).attr("value", texto)
    inputid.html(inputformjq)
    inputid.on("click", ()=>{
        let content="Your form has been submited"
        inputid.append(content);
    })
}
function changSelectInputElementfunctionIdJq(){
    // $("")
    let s = $('<select/>');
let o = [1, 2, 3];
for (var i in o) {
    s.append($('<option/>').html(o[i]));
}
let changeselecet= $('#changSelectInputElementIdTestResultjq')
changeselecet.append(s);
changeselecet.on("change", (e)=>{
    console.log(e)
    alert("input changed")
})
}

function posiMouseElementfunctionIdJq(){
    // $("#outer").mouseover(function () { })
    let boton = $("<button>mouseoverinJQ</button>")
    $("#posiMouseElementIdTestResultjq").append(boton)
    $("#posiMouseElementIdTestResultjq").on("mouseover", ()=>{
        let texto = $("<p>mouser over detected</p>")
        $("#posiMouseElementIdTestResultjq").append(texto)
    })
}


function checkboxElementfunctionIdJq(){
    let input= $("<input>").attr("type", "checkbox")
    let resultid= $("#checkboxElementIdTestResultjq")
    resultid.append(input)
    resultid.on("change", ()=>{
        if($("input").is(":checked") == true){
            alert("you have checked the box")
        } else if($("input").is(":checked") == false){
            alert("you have unchecked the box")
        }
    })
}
function ullistElementfunctionIdJq(){
    let uljq= $("<ul></ul>")
    let lijq1= $("<li>·option 1</li>")
    let lijq2= $("<li>·option 2</li>")
    lijq1.attr("id", "liq1id")
    lijq2.attr("id", "liq2id")
    console.log(lijq1)
    lijq1.css("color", "black")
    lijq2.css("color", "black")
    uljq.append(lijq1)
    uljq.append(lijq2)
    $("#ullistElementIdTestResultjq").append(uljq)
    lijq1.on("click", ()=>{
        alert("first")
    })
    lijq2.on("click", ()=>{
        alert("second")
    }
    )}

function appendElementfunctionJq() {
    var main = $('#appendElementIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        let span = $('<span>'+ 'this is a Span' +'</span>')
        $(el).append(span)
    }, 3000);
}

function prependElementfunctionJq() {
    var main = $('#prependElementIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    setTimeout(() => {
        let span = $('<span>'+ 'this is a Span' +'</span>')
        main.append(el).prepend(span)
    }, 3000);
}

function createandAddBeforefunctionJq() {
    let mainjq = $('#createandAddBeforeIdTestResultjq')
    let content = '<ul id="menujq"><li id="liFirst" >Services</li><li>About</li><li>Contact</li></ul>'
    mainjq.html(content)
    setTimeout(() => {
        li = $("<li></li>").text('First This');
        li.insertBefore($('#liFirst'))
    }, 3000);
}

function createandAddAfterfunctionJq() {
    let mainjq = $('#createandAddAfterIdTestResultjq')
    content = '<ul id="menujq"><li id="liFirst1" >Services</li><li>About</li><li>Contact</li></ul>'
    mainjq.html(content)
    setTimeout(() => {
        li = $("<li></li>").text('Second This');
        li.insertAfter($('#liFirst1'))
    }, 3000);
}

function clonefunctionJq() {
    var main = $('#cloneIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        let newElement = $(el).clone()
        newElement.text('This is a P is a clone')
        main.append(newElement)
    }, 3000);
}

function addClassfunctionJq() {
    var main = $('#addClassIdTestResultjq')
    let el = $("<p>" + 'This is a P ' + "</p>");
    main.append(el)
    setTimeout(() => {
        $(el).addClass('pClassGreen')
        el.text('This is a P with class')
    }, 3000);
}

function removeClassfunctionJq() {
    var main = $('#removeClassIdTestResultjq')
    let el = $("<p>" + 'This is a P with class ' + "</p>");
    $(el).addClass('pClassGreen')
    main.append(el)
    setTimeout(() => {
        $(el).removeClass('pClassGreen')
        el.text('This is a P without class')
    }, 3000);
}

function toggleClassfunctionJq() {
    buttonTest('toggleClassIdTestResultjq', 'togglebtnjq')
    var main = $('#toggleClassIdTestResultjq')
    let el = $("<p>" + 'This is a P' + "</p>");
    main.append(el)
    $('#togglebtnjq').on('click', function () {
        $(el).toggleClass('pClassGreen')
    })
}

function addDisabledfunctionJq() {
    buttonTest('addDisabledIdTestResultjq', 'addDisabledbtnjq')
    buttonTest('addDisabledIdTestResultjq', 'jqaddDisabled')

    $('#addDisabledbtnjq').on('click', function () {
        $('#jqaddDisabled').attr('disabled', true)
    })
    $('#jqaddDisabled').on('click', function () {
        let el = $("<p>" + 'This is a P' + "</p>");
        $(el).insertAfter($('#jqaddDisabled'))

    })
}

function removeDisabledfunctionJq() {
    buttonTest('removeDisabledIdTestResultjq', 'removeDisabledbtnjq')
    buttonTest('removeDisabledIdTestResultjq', 'removeDisabledjq')
    $('#removeDisabledjq').attr('disabled', true)
    $('#removeDisabledbtnjq').on('click', function () {
        $('#removeDisabledjq').attr('disabled', false)
    })
    $('#removeDisabledjq').on('click', function () {
        let el = $("<p>" + 'This is a P' + "</p>");
        $(el).insertAfter($('#removeDisabledjq'))

    })
}

function removeDataSrcfunctionJq() {
    buttonTest('removeDataSrcIdTestResultjq', 'removeDatasrcbtnjq')
    let imageJq= $('<img>').attr('src', './assets/css/img/10592-EGO-LV1-6-Planet-Eclipse--68-Cal-Fire-Opal-gold---rot.jpg')
    $('#removeDataSrcIdTestResultjq')
    imageJq.addClass('my-img')
    $('#removeDataSrcIdTestResultjq').append(imageJq)
    $(imageJq).attr('data-src', 'This is a Data Src')
    let el = $("<p></p>").text(imageJq.attr('data-src')).insertAfter($(imageJq))

    $('#removeDatasrcbtnjq').on('click', function () {
        $(imageJq).removeAttr('data-src')
        el.text("Don't have Data-src");
        $(el).insertAfter($(imageJq))
    })
}


function hideHTMLfunctionJq() {
    buttonTest('hideHTMLIdTestResultjq', 'hideHTMLbtnjq')
    let el = $("<p>").text(" This is a P")
    $('#hideHTMLIdTestResultjq').append(el)

    $('#hideHTMLbtnjq').on('click', function () {
        $(el).hide()
    })
}

function showHTMLfunctionJq() {
    buttonTest('showHTMLIdTestResultjq', 'showHTMLbtnjq')
    let el = $("<p>").text(" This is a P")
    $('#showHTMLIdTestResultjq').append(el)
    $(el).hide()

    $('#showHTMLbtnjq').on('click', function () {
        $(el).show()
    })
}

function fadeInfunctionJq() {
    buttonTest('fadeInIdTestResultjq', 'fadeInbtnjq')
    let el = $("<p>").text(" This is a P")
    el.attr('id', 'fadeInjq')
    $('#fadeInIdTestResultjq').append(el)
    $("#fadeInjq").css('opacity' , '0');

    $('#fadeInbtnjq').on('click', function () {
        $("#fadeInjq").css('transition' , 'opacity 3s');
        $("#fadeInjq").css('opacity' , '100%');
        // $('#fadeInjq').fadeIn("slow");
    })
}

function fadeOutfunctionJq() {
    buttonTest('fadeOutIdTestResultjq', 'fadeoutbtnjq')
    let el = $("<p>").text(" This is a P")
    el.attr('id', 'fadeoutjq')
    $('#fadeOutIdTestResultjq').append(el)

    $('#fadeoutbtnjq').on('click', function () {
        $('#fadeoutjq').fadeOut();
    })
}