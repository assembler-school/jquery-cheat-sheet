let append = `<p>
    The .append() method inserts the specified content as the last child of each 
    element in the jQuery collection.
    </p>`;

let prepend = `<p>
    The .prepend() method inserts the specified content as the 
    first child of each element in the jQuery collection. 
    </p>`;

let after = `<p>
    The .after() and methods perform the same task. The major 
    difference is in the syntax—specifically, in the placement of the content 
    and target.
    </p>`;

let before = `<p>
    The .before() methods perform the same task. The major 
    difference is in the syntax—specifically, in the placement of the content and 
    target. With .before(), the content to be inserted comes from the method's argument: 
    $(target).before(contentToBeInserted).
    </p>`;

let list = $(`<ul id="listClass">
    <li>Barcelona</li>
    <li>Madrid</li>
    <li>Sevilla</li>
    </ul>`);

function addRemove() {
  $("#addText").on("click", function () {
    $("#text").append(append);
    $("#text").prepend(prepend);
    $("#text").after(after);
    $("#text").before(before);
  });
  $("#deleteText").on("click", function () {
    $("#text").remove("p");
    $("#textToRemove").remove("p");
  });
}
addRemove();

function classes() {
  $("#addClass").on("click", function () {
    $("#addClassText").addClass("buttonAddClass");
  });
  $("#removeClass").on("click", function () {
    $("#removeClassText").removeClass("buttonRemoveClass");
  });
  $("#changeTheClass").on("click", function () {
    $("#changeClassText").toggleClass("buttonChangeClass");
  });
}
classes();

function clone() {
  $("#cloneButton").on("click", function () {
    $("#textClone").clone().appendTo("#textClone");
  });
}
clone();

function atributes() {
  $("#disableBtn").on("click", function () {
    $("#disabledBtn").prop("disabled", true);
  });
  $("#activateBtn").on("click", function () {
    $("#disabledBtn").removeAttr("disabled");
  });
}
atributes();

function atributesData() {
  $("#addSrcBtn").on("click", function () {
    $("#imgData").attr("data-src");
  });
  $("#deleteSrcBtn").on("click", function () {
    $("#imgData").removeAttr("datra-src");
  });
}
atributesData();

function showHide() {
  $("#show").on("click", function () {
    $("#showText").show();
  });
  $("#hide").on("click", function () {
    $("#hideText").hide();
  });

  $("#fadeIn").on("click", function () {
    $("#showTextFade").fadeIn(800);
  });
  $("#fadeOut").on("click", function () {
    $("#hideTextFade").fadeOut("slow");
  });
}
showHide();

function iterate() {
  $("#showList").on("click", function () {
    $("#listToAppend").append(list);
    $("#listClass").addClass("list");
  });
}
iterate();

function father() {
  $("#parentsChange").on("click", function () {
    $("#parentsTest").parent().addClass("fontSize");
  });
  $("#childChange").on("click", function () {
    $("#childTest").children().addClass("fontSize");
  });
  $("#allChange").on("click", function () {
    $(".selectClass").addClass("fontSize");
  });
  $("#idChange").on("click", function () {
    $("#idTest").addClass("fontSize");
  });
}
father();

function selectElements() {
  $("#selectHidden").on("click", function () {
    $(".hideClass:hidden").addClass("list");
    $(".hideClass:hidden").removeClass("hideModal");
  });
  $("#selectAttribute").on("click", function () {
    let options = $("select").val();
    $("select").after(options);
  });
  $("#showInput").on("click", function () {
    let txt = $("#name").val();
    alert(txt);
  });
  $("#removeSelector").on("click", function () {
    $(".deleteThis").remove("p");
  });
}
selectElements();

function prenav(){
    $(".hideAllModals").hide();
}
prenav();

function nav() {
  $(".createRemoveNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".createRemoveClass").show("2000");
  });
  $(".classesNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".changeClassesClass").show("2000");
  });
  $(".cloneNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".cloneClass").show("2000");
  });
  $(".attributesNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".attributesClass").show("2000");
  });
  $(".dataNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".dataClass").show("2000");
  });
  $(".hideShowNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".hideShowClass").show("2000");
  });
  $(".addListNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".addListClass").show("2000");
  });
  $(".parentsNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".parentsClass").show("2000");
  });
  $(".textInputsNav").on("click", function () {
    $(".hideAllModals").hide("200");
    $(".inputsClass").show("2000");
  });
}
nav();

function firstCharge(){
    alert("Page loaded successfully");
    $("img").on("click", function(){
        alert("You are clicked the image");
    });
    $("footer").dblclick( function(){
        alert("You are double clicked in the footer");
    });
    $("#name").keypress( function(){
        alert("You presses a key");
    });
    $("li").on("click", function(){
        alert("You click in ul item");
    });
}
firstCharge();

