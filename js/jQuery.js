//funcion html
//HTML item has been clicked
$('#solutionjq1').on('click', function() { $('#solutionjq1').text('this button has been clicked') });
//HTML item has been double clicked
$('#solutionjq2').on('dblclick', function() { $('#solutionjq2').text('this button has been double clicked') });
//press key

$(document).on("keypress", function(e) {
    let prueba = $("#solutionjq3").text(e.key);
});
//mousehover
$('#solutionjq4').on("mouseenter", function() {
    $('#solutionjq4').text('you are hovered');
});
$('#solutionjq4').on("mouseleave", function() {
    $('#solutionjq4').text('hover here');
});

//input change text
$(document).on("input", function() {
    let text1 = $("#inputText").val();
    $("#solutionjq5").text(text1)
});
//Show img
let imgJq = $("<img id='imgJq'src ='./img/js.jpg'></img>");
$("#question6").on("click", function() {
        imgJq.addClass("photo_jq")
        $("#solutionjq6").append(imgJq)
    })
    //error

$("#question7").on("click", function() {
    let imgErrorJq = $("<img id='imgJqe' class='photo_jq'src ='not img' alt='Error loading'></img>");
    $("#solutionjq7").append(imgErrorJq)
});

$("#formJq").on("submit", function(event) {
        event.preventDefault();
        $("#formJqText").text("this button is summited ")
    })
    //checked funtion
$("#soluctionjq9").on("change", function(event) {
    //$("#checkboxjq9").text("checked")
    if ($(event.target).is(":checked")) {
        $(event.target).next().text("Checked");
    } else {
        $(event.target).next().text("Unchecked");
    }
});
//

$("#listItemsJq").on("click", (event) => {
    event.target.innerText = "you clicked  " + event.target.textContent
});
//Create element any text

$("#createElementjq").on("click", () => {
        let p = $('<p>any text</p>')
        $("#solutionFunctionJq1").append(p)
    })
    // remove element
$("#removeElementJq").on("click", () => { $("#removeElementJq").remove(); });

//append text
$("#appendElementJq").on("click", () => {
    let li = $("<li>Go is appened</li>");
    $("#listItemsJqfunction").append(li);
});
//prepend
$("#prependElementJq").on("click", (event) => {
        let li = ("<li>GO is prepend</li>")
        $("#listItemsJqfunctionPrepend").prepend(li);
    })
    //create and insert text After
$("#prependCreateElementJq").on("click", (event) => {
    let li = $("<li>This text is After parent Node</li>");
    let valueInser = $("#prependCreateElementJq");
    valueInser.after(li);
});
//create and insert text After
$("#beforeElementJq").on("click", (event) => {
    let li = $("<li>This text is Before parent Node</li>");
    let valueInser = $("#createApppendJqBe");
    valueInser.before(li)

});

//clone an HTML element within other element
$("#CloneElementButtonJq").on("click", (event) => {
    let parentClon = $(event.target).parent();
    $("#elementClonJq").first().clone().appendTo(parentClon);
});
//Add class
$("#classButtonJq").on("click", () => {
    $("#addClassJq").addClass("background__item");
});
//Remove class
$("#classButtonRJq").on("click", () => {
    $("#removeClassJq").removeClass("background__item")
});
//Toggle Class
$("#classButtonToggleJq").on("click", () => {
    $("#toggleClassJq").toggleClass("background__item")
});
//disabled button
$("#disabledButtonJq").on("click", () => {
    $("#clickMeButtonJq").prop("disabled", true)
});
//remove disabled
$("#enableButtonJq").on("click", () => {
    $("#clickMeButtonEnableJq").prop("disabled", false)
});
//create src
$("#createSrcButtonJq").on("click", () => {
    $("#imgCreateSrcJq").attr("src", "./img/js.jpg")
});
//remove src
$("#removeSrcButtonJq").on("click", () => {
        $("#imgRemoveSrcJq").removeAttr("src", "./img/jq.jpg")
    })
    //display none
$("#buttonHideElementJq").on("click", () => {
    $("#HidemeJq").toggleClass("none")
})
$("#buttonShowElementJq").on("click", () => {
    $("#showMeJq").toggleClass("block")
})

//fade In
$("#fadeInButton").on("click", (event) => {
    $("#imgFadeIn").fadeToggle("slow");
});
//Fade Out
$("#fadeOutButton").on("click", (event) => {
    $("#imgFadeOut").fadeToggle(3000);
});