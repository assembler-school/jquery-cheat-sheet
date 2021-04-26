/*============ Global variables ===========*/
const testArea = $("#testArea");
/*========================================*/

/*========== TestArea scenarios ==========*/
function scenario1(){

}
/*========================================*/

/*========= Excercise functions ==========*/
// 01 OnLoad Event
export function onReadyJqueryTest(){
    
    $(document).ready(loadedDOM);
    function loadedDOM(){
        $("#testArea").append("<p>The DOM has been loaded</p>");
    }
}

export function onReadyJqueryCode(){
    return `        
$(document).ready(loadedDOM);
function loadedDOM(){
    $("#testArea").append("&ltp>The DOM has been loaded&lt/p>");
}`;
}

//02 OnClick Event
export function onClickJqueryCode(){
    return `
$("#btn").on("click", click);

function click(){
    $("&ltp>button clicked&lt/p>").insertAfter($("#btn"));
};
`
}

export function onClickJqueryTest(){
    $("#testArea").append("<button id='btn'>Click here</button>");
    $("#btn").on("click", click); 
    
    function click(){
        $("<p>button clicked</p>").insertAfter($("#btn"));
    }
}

//03 Ondblclick Event
export function onDblClickJqueryCode(){
    return `
$("#btn").on("dblclick", doubleClick);

function doubleClick(){
    $("&ltp>button double-clicked&lt/p>").insertAfter($("#btn"));
}`
}

export function onDblClickJqueryTest(){
    $("#testArea").append("<button id='btn'>Click here</button>");
    $("#btn").on("dblclick", doubleClick);

    function doubleClick(){
        $("<p>button double-clicked</p>").insertAfter($("#btn"));
    }
}

//04 Onkeydown Event
export function onKeyDownJqueryCode(){
    return `
$(document).on(keydown", keyPress);

    function keyPress(){
        $("#testArea").append("&ltp>key-pressed&lt/p>");
    }`
}

export function onKeyDownJqueryTest(){
$(document).on("keydown", keyPress);

    function keyPress(){
        $("#testArea").append("<p>key-pressed</p>");
    }
}

//05 Onmousemove Event
export function onMouseMoveJqueryCode(){
    return `
$(window).on("mousemove",mouseMovementTracking);

function mouseMovementTracking(event){

    $("#testArea").text("x-value: " + event.pageX + " y-value: " + event.pageY );
}`
}
export function onMouseMoveJqueryTest(){

    $(window).on("mousemove",mouseMovementTracking);
    
    function mouseMovementTracking(event){

        $("#testArea").text("x-value: " + event.pageX + " y-value: " + event.pageY );
    }
}

// 06 Onchange Event
export function onChangeInputTextJqueryCode(){
    return `
$("#testArea").append("&ltinput type= 'text' id = 'inputTest'>");
$("#testArea").append("&ltp id = 'onChangeOutputTest'>&lt/p>");

$("#inputTest").on("change", catchInputOnChange);

function catchInputOnChange(){
    $("#onChangeOutputTest").text($("#inputTest").val());
}`
}

export function onChangeInputTextJqueryTest(){
    
    $("#testArea").append("<input type= 'text' id = 'inputTest'>");
    $("#testArea").append("<p id = 'onChangeOutputTest'></p>");

    $("#inputTest").on("change", catchInputOnChange);

    function catchInputOnChange(){
        $("#onChangeOutputTest").text($("#inputTest").val());
    }
}

// 07 OnLoad Event to load Image
export function onLoadImageJqueryCode(){
    return `
$("#testArea").append("&ltimg id = 'imge7' src='/assets/katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
$("#testArea").append("&ltp id = 'onLoadOutputTest'>&lt/p>");

$("#imge7").on("load", imageOnLoad);

function imageOnLoad(){
    $("#onLoadOutputTest").text("Image loaded");
}`
}

export function onLoadImageJqueryTest(){
    
    $("#testArea").append("<img id = 'imge7' src='/assets/katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
    $("#testArea").append("<p id = 'onLoadOutputTest'></p>");

    $("#imge7").on("load", imageOnLoad);

    function imageOnLoad(){
        $("#onLoadOutputTest").text("Image loaded");
    }
}

// 08 OnError Event to load Image 
export function onLoadImageFailJqueryCode(){
    return `
$("#testArea").append("&ltimg id = 'imge8' src='./katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
$("#testArea").append("&ltp id = 'onLoadOutputTestFail'>&lt/p>");

$("#imge8").on("error", imageOnLoadFail);

function imageOnLoadFail(){
    $("#onLoadOutputTestFail").text("Image load failure");
}`
}

export function onLoadImageFailJqueryTest(){
    
    $("#testArea").append("<img id = 'imge8' src='./katara.jpeg' alt='katara' width ='50px' height='50px'>");
    $("#testArea").append("<p id = 'onLoadOutputTestFail'></p>");

    $("#imge8").on("error", imageOnLoadFail);

    function imageOnLoadFail(){
        $("#onLoadOutputTestFail").text("Image load failure");
    }
}

// 09 OnSubmit for form 
export function onSubmitJqueryCode(){
    return `
$("#testArea").append("&ltform id='forme9'>&ltinput type='submit' value='submit'>&lt/form>");

$("#forme9").on("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    $("#testArea").append("&ltp id ='onSubmitOutput'>&lt/p>");
    $("#onSubmitOutput").text("Form submited");
}`
}

export function onSubmitJqueryTest(){
    
    $("#testArea").append("<form id='forme9'><input type='submit' value='submit'></form>");

    $("#forme9").on("submit", onFormSubmit);

    function onFormSubmit(event){
        event.preventDefault();
        $("#testArea").append("<p id ='onSubmitOutput'></p>");
        $("#onSubmitOutput").text("Form submited");
    }
}

// 10 OnChange Event for an option selection element
export function onChangeOptionSelectionJqueryCode(){
    return `
$("#testArea").append("&ltselect id='selecte10'>&ltoption value='1'>Option1&lt/option>&ltoption value='2'>Option2&lt/option>&lt/select>");

$("#testArea").append("&ltp id ='onChangeSelectionOutput'>Changed to option 1&lt/p>");

$("#selecte10").on("change", onChangeOption);

function onChangeOption(){

    $("#onChangeSelectionOutput").text("Changed to option" + $("#selecte10").val());
}`
}

export function onChangeOptionSelectionJqueryTest(){
    
    $("#testArea").append("<select id='selecte10'><option value='1'>Option1</option><option value='2'>Option2</option></select>");
    $("#testArea").append("<p id ='onChangeSelectionOutput'>Changed to option 1</p>");
    $("#selecte10").on("change", onChangeOption);

    function onChangeOption(){

        $("#onChangeSelectionOutput").text("Changed to option" + $("#selecte10").val());
    }
}

// 11 // OnMouseOver event
export function onMouseOverJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='dive11' style='background-color:rgb(255, 0, 0); height:100px; width:100px'>&lt/div>");

$("#dive11").on("mouseover", onMouseOver);

function onMouseOver(){

    if($("#dive11").css("backgroundColor") === "rgb(255, 0, 0)"){
        $("#dive11").css("backgroundColor","rgb(0, 128, 0)");
    }else{
        $("#dive11").css("backgroundColor","rgb(255, 0, 0)");
    }
}`
}

export function onMouseOverJqueryTest(){
    
    $("#testArea").append("<div id='dive11' style='background-color:rgb(255, 0, 0); height:100px; width:100px'></div>");

    $("#dive11").on("mouseover", onMouseOver);

    function onMouseOver(){

        if($("#dive11").css("backgroundColor") === "rgb(255, 0, 0)"){
            $("#dive11").css("backgroundColor","rgb(0, 128, 0)");
        }else{
            $("#dive11").css("backgroundColor","rgb(255, 0, 0)");
        }
    }
}

// 12 OnChange Event for checkbox
export function onChangeCheckboxJqueryCode(){
    return `
$("#testArea").append("&ltinput id='checkboxe12' type='checkbox'>");
$("#testArea").append("&ltp id='onChangeCheckOutput'>Checkbox is &lt/p>");

$("#checkboxe12").on("change", onChangeCheckbox);

function onChangeCheckbox(){
    if($("#checkboxe12").prop("checked") === true){
        $("#onChangeCheckOutput").text("Checkbox is checked");
    }else{
        $("#onChangeCheckOutput").text("Checkbox is unchecked");
    }
}`
}
export function onChangeCheckboxJqueryTest(){
    
    $("#testArea").append("<input id='checkboxe12' type='checkbox'>");
    $("#testArea").append("<p id='onChangeCheckOutput'>Checkbox is </p>");
    
    $("#checkboxe12").on("change", onChangeCheckbox);

    function onChangeCheckbox(){
        if($("#checkboxe12").prop("checked") === true){
            $("#onChangeCheckOutput").text("Checkbox is checked");
        }else{
            $("#onChangeCheckOutput").text("Checkbox is unchecked");
        }
    }
}

// 13 OnClick Event for ul list item (show clicked element)
export function onClickUlLiItemJqueryCode(){
    return `
$("#testArea").append("&ltul id='ule13'>&lt/ul>");

$("#ule13").append("&ltli id='e13Item1' class='ulItem'> Item1 &lt/li> &ltli id='e13Item2' class='ulItem'> Item2 &lt/li>&ltli id='e13Item3' class='ulItem'> Item3 &lt/li>");

$("#testArea").append("&ltdiv id='ulLiItemOutput'>&lt/div>");

$(".ulItem").each(function(){
    $(this).on("click", onClickShowUlLiItem);
});

function onClickShowUlLiItem(){
    if($(this)){
        $("#ulLiItemOutput").text($(this).text());
    }
}`
}

export function onClickUlLiItemJqueryTest(){
    
    $("#testArea").append("<ul id='ule13'></ul>");
    $("#ule13").append("<li id='e13Item1' class='ulItem'> Item1 </li> <li id='e13Item2' class='ulItem'> Item2 </li><li id='e13Item3' class='ulItem'> Item3 </li>");
    $("#testArea").append("<div id='ulLiItemOutput'></div>");
    
    $(".ulItem").each(function(){
        $(this).on("click", onClickShowUlLiItem);
    });

    function onClickShowUlLiItem(){
        if($(this)){
            $("#ulLiItemOutput").text($(this).text());
        }
    }
}

// Functions and Selectors

// 01 Create an HTML element with any text value
export function createHTMLElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv>I am a new div&lt/div>");`
}

export function createHTMLElementJqueryTest(){
    
    $("#testArea").append("<div>I am a new div</div>");

}

// 02 Remove an HTML element with any text value
export function removeHTMLElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs2'>I am a new div&lt/div>");
$("#divfs2").remove();`

}

export function removeHTMLElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs2'>I am a new div</div>");
    $("#divfs2").remove();
    
}

// 03 Append an HTML element to a parent element with any text value
export function appendHTMLElementToParentJqueryCode(){
    return `
$("#testArea").append("&ltdiv>I am a new appended div&lt/div>");`
}

export function appendHTMLElementToParentJqueryTest(){
    
    $("#testArea").append("<div>I am a new appended div</div>");

}

//04 Prepend an HTML element with any text value to a parent element
export function prependHTMLElementToParentJqueryCode(){
    return `
$("#testArea").prepend("&ltspan>I am a new prepended span&lt/span>");
`
}

export function prependHTMLElementToParentJqueryTest(){
    
    $("#testArea").prepend("<span>I am a new prepended span</span>");
    
}

// 05 Create and add an HTML element with any text value after another element
export function createAndAddAfterHTMLElementJqueryCode(){
    return `
$("#testArea").append("<div id='divfs5'> I am first div</div>");
$("#divfs5").append("<div>I am second div</div>");
`
}

export function createAndAddAfterHTMLElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs6'> I am first div</div>");
    $("#divfs5").append("<div>I am second div</div>");
    
}

// 06 Create and add an HTML element with any text value before another element
export function createAndAddBeforeHTMLElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs6'> I am first div&lt/div>");
$("#divfs6").prepend("&ltdiv>I am second div&lt/div>");`
}

export function createAndAddBeforeHTMLElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs6'> I am first div</div>");
    $("#divfs6").prepend("<div>I am second div</div>");
    
}

// 07 Clone an HTML element within other element
export function createAndAddHTMLElementAndCloneJqueryCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs7'> I am first div&lt/div>");
let clone = document.getElementById("divfs7").cloneNode(true);
element.appendChild(clone);`
}

export function createAndAddHTMLElementAndCloneJqueryTest(){
    
    $("#testArea").append("<div id='divfs7'> I am first div</div>");
    $("#testArea").append($("#divfs7").clone());
    
}

// 08 Add a class to an HTML item
export function addClassToElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs8'> I am first div&lt/div>");
$("#divfs8").addClass("fsClass");`
}

export function addClassToElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs8'> I am first div</div>");
    $("#divfs8").addClass("fsClass");
    
}

// 09 Remove a class to an HTML item
export function removeClassToElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs9' style='color:red'> I am first div&lt/div>");
$("#divfs9").addClass("fsClass");
$("#divfs9").removeClass("fsClass");`
}

export function removeClassToElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs9' style='color:red'> I am first div</div>");
    $("#divfs9").addClass("fsClass");
    $("#divfs9").removeClass("fsClass");
}

// 10 Toggle a class to an HTML item
export function toggleClassToElementJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs10' style='color:red'> I am first div&lt/div>");
$("#divfs10").addClass("fsClass");
$("#divfs10").toggleClass("fsClass");`
}

export function toggleClassToElementJqueryTest(){
    
    $("#testArea").append("<div id='divfs10' style='color:red'> I am first div</div>");
    $("#divfs10").addClass("fsClass");
    $("#divfs10").toggleClass("fsClass");
}

// 11 Add a disabled attribute to an HTML button
export function addDisabledAttrToBtnJqueryCode(){
    return `
$("#testArea").append(""&ltbutton id='btnfs11'> I am disabled button&lt/div>");
$("#btnfs11").attr("disabled", true);
    `
}

export function addDisabledAttrToBtnJqueryTest(){
    
    $("#testArea").append("<button id='btnfs11'> I am disabled button</button>");
    $("#btnfs11").attr("disabled", true);
}

// 12 Remove the disabled attribute of an HTML button
export function removeDisabledAttrOfBtnJqueryCode(){
    return `
$("#testArea").append(""&ltbutton id='btnfs12'> I am disabled button&lt/div>");
$("#btnfs12").attr("disabled", true);
$("#btnfs12").attr("disabled", false);
    `
}

export function removeDisabledAttrOfBtnJqueryTest(){
    
    $("#testArea").append("<button id='btnfs12'> I am disabled button</button>");
    $("#btnfs12").attr("disabled", true);
    $("#btnfs12").attr("disabled", false);
}

// 13 Set a data-src attribute to a img element
export function setDataSrcAttrToImgJqueryCode(){
    return `
$("#testArea").append("&ltimg id='imgfs13' src='/assets/katara.jpeg' width='50px' height='50px'>");
$("#imgfs13").attr("data-src", "ImData");
    `
}

export function setDataSrcAttrToImgJqueryTest(){
    
    $("#testArea").append("<img id='imgfs13' src='/assets/katara.jpeg' width='50px' height='50px'>");
    $("#imgfs13").attr("data-src", "ImData");
    
}

// 14 Remove the data-src attribute of the img element
export function removeDataSrcAttrToImgJqueryCode(){
    return `
$("#testArea").append("&ltimg id='imgfs14' src='/assets/katara.jpeg' width='50px' height='50px'>");
$("#imgfs14").attr("data-src", "ImData");
$("#imgfs14").removeAttr("data-src");
    `
}

export function removeDataSrcAttrToImgJqueryTest(){
    
    $("#testArea").append("<img id='imgfs14' src='/assets/katara.jpeg' width='50px' height='50px'>");
    $("#imgfs14").attr("data-src", "ImData");
    $("#imgfs14").removeAttr("data-src");
    
}

// 15 Hide an HTML element on click (display: none)
export function hideElementOnClickJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs15'>If you dont wanna see me, click me!&lt/div>");

$("#divfs15").on("click", function(){
    $(this).css("display", "none");
});
    `
}

export function hideElementOnClickJqueryTest(){
    
    $("#testArea").append("<div id='divfs15'>If you dont wanna see me, click me!</div>");
    $("#divfs15").on("click", function(){
        $(this).css("display", "none");
    });
}

// 16 Show an HTML element on click (display: block)
export function showElementOnClickBtnJqueryCode(){
    return `
$("#testArea").append("&ltp id='pfs16' style='display:none'>Suprise strike!&lt/p>");

$("#testArea").append("&ltbutton id='btnfs16'>Click meto see what lurks in the shadows&lt/button>");

$("#btnfs16").on("click",function(){
    $("#pfs16").css("display","block");
});  
    `
}

export function showElementOnClickBtnJqueryTest(){
    
    $("#testArea").append("<p id='pfs16' style='display:none'>Suprise strike!</p>");
    $("#testArea").append("<button id='btnfs16'>Click me to see what lurks in the shadows</button>");
    $("#btnfs16").on("click",function(){
        $("#pfs16").css("display","block");
    });   
}

// 17 Fade in an HTML element using jQuery
export function FadeInJqueryCode(){
    return `
$("#testArea").append("&ltbutton id='btnfs17'> Click me to fade in the div&lt/button>");

$("#testArea").append("&ltdiv id='divfs17' style='background-color:red; height:100px; width:100px; '>&lt/div>");

$("#divfs17").fadeOut();

$("#btnfs17").on("click", function(){
    $("#divfs17").fadeIn(); 
}); 
    `
}

export function FadeInJqueryTest(){
    
    $("#testArea").append("<button id='btnfs17'> Click me to fade in the div</button>");
    $("#testArea").append("<div id='divfs17' style='background-color:red; height:100px; width:100px; '></div>");
    
    $("#divfs17").fadeOut();

    $("#btnfs17").on("click", function(){
        $("#divfs17").fadeIn(); 
    });
}

// 18 Fade out an HTML element using jQuery
export function fadeOutJqueryCode(){
    return `
$("#testArea").append("&ltbutton id='btnfs18'> Click me to fade in the div&lt/button>");

$("#testArea").append("&ltdiv id='divfs18' style='background-color:red; height:100px; width:100px; opacity:1'>&lt/div>");


$("#btnfs18").on("click", function(){
    $("#divfs18").fadeOut(); 
}); 
    `
}

export function fadeOutJqueryTest(){
    
    $("#testArea").append("<button id='btnfs18'> Click me to fade in the div</button>");
    
    $("#testArea").append("<div id='divfs18' style='background-color:red; height:100px; width:100px; '></div>");
    

    $("#btnfs18").on("click", function(){
        $("#divfs18").fadeOut(); 
    });
}

// 19 Iterate a collection of elements and apply a change of style on them
export function iterateAndStyleSetOfElementsJqueryCode(){
    return `
$("#testArea").append("&ltul id='ulfs19'>&ltli class='itemfs19'> Item1&lt/li>&ltli class='itemfs19'> Item2&lt/li>&lt/ul>");

$(".itemfs19").each(function(){
    $(this).css("color","red");
});
    `
}

export function iterateAndStyleSetOfElementsJqueryTest(){
    
    $("#testArea").append("<ul id='ulfs19'><li class='itemfs19'> Item1</li><li class='itemfs19'> Item2</li></ul>");
    
    $(".itemfs19").each(function(){
        $(this).css("color","red");
    });
}

// 20 Get the parent element of a certain element and change its font weight
export function changeParentStyleJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs20'> I am parent&ltspan class='childfs20'> Item1&lt/span>&ltspan class='childfs20'> Item2&lt/span>&lt/div>");

$(".childfs20").parent($("#divfs20")).css("fontWeight", "bold");
    `
}

export function changeParentStyleJqueryTest(){
    
    $("#testArea").append("<div id='divfs20'> I am parent<span class='childfs20'> Item1</span><span class='childfs20'> Item2</span></div>");

    $(".childfs20").parent($("#divfs20")).css("fontWeight", "bold");

}

// 21 Get the collection of children of a certain element and change its font weight
export function changeChildrenStyleJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs21'> I am parent&ltspan class='childfs21'> Item1&lt/span>&ltspan class='childfs21'> Item2&lt/span>&lt/div>");

$("#divfs21").children().css("fontWeight", "bold");
    `
}

export function changeChildrenStyleJqueryTest(){
    
    $("#testArea").append("<div id='divfs21'> I am parent<span class='childfs21'> Item1</span><span class='childfs21'> Item2</span></div>");

    $("#divfs21").children().css("fontWeight", "bold");

}

// 22 Get all the elements that have a certain class and change their font weight
export function changeSameclassElementsStyleJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs22'> I am parent&ltspan class='childfs22'> Item1&lt/span>&ltspan class='childfs22'> Item2&lt/span>&lt/div>");

$(".childfs22").css("fontWeight", "bold");
    `
}

export function changeSameclassElementsStyleJqueryTest(){
    
    $("#testArea").append("<div id='divfs22'> I am parent<span class='childfs22'> Item1</span><span class='childfs22'> Item2</span></div>");

    $(".childfs22").css("fontWeight", "bold");

}

// 23 Get an item by id and change its font weight
export function changeIdElemntStyleJqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs22'> I am parent&ltspan class='childfs22'> Item1&lt/span>&ltspan class='childfs22'> Item2&lt/span>&lt/div>");

$(".childfs22").css("fontWeight", "bold");
    `
}

export function changeIdElemntStyleJqueryTest(){
    
    $("#testArea").append("<div id='divfs23'> I am div</div>");

    $("#divfs23").css("fontWeight", "bold");

}

// 24 Get all the elements that have a certain class and the display property of none and change their font color
export function changeSameclassElementsStyle2JqueryCode(){
    return `
$("#testArea").append("&ltdiv id='divfs24'> I am parent&ltspan class='childfs24'> Item1&lt/span>&ltspan class='childfs24'> Item2&lt/span>&lt/div>");

$(".childfs24").css({"color": "red", "display": "block"});
    `
}

export function changeSameclassElementsStyle2JqueryTest(){
    
    $("#testArea").append("<div id='divfs24'> I am parent<span class='childfs24'> Item1</span><span class='childfs24'> Item2</span></div>");

    $(".childfs24").css({"color": "red", "display": "block"});

}

// 25 Get the options of a select element that are selected (attribute selected)
export function checkSelectedAttributeJqueryCode(){
    return `
$("#testArea").append("&ltselect id='selectfs25'>&ltoption class='optionfs25' value='1'>Option1&lt/option> &ltoption class='optionfs25' value='2'>Option2&lt/option> &lt/select>");

$("#testArea").append("&ltp id='outputfs25'> &lt/p>")

$("#selectfs25").on("change",checkSelect);

function checkSelect(){

    let selectedOption = $("#selectfs25").children("option:selected").text();

    $("#outputfs25").html(selectedOption);
}
    `
}

export function checkSelectedAttributeJqueryTest(){
    
    $("#testArea").append("<select id='selectfs25'><option class='optionfs25' value='1'>Option1</option> <option class='optionfs25' value='2'>Option2</option> </select>");

    $("#testArea").append("<p id='outputfs25'> </p>")
    
    $("#selectfs25").on("change",checkSelect);
    
    function checkSelect(){

        let selectedOption = $("#selectfs25").children("option:selected").text();

        $("#outputfs25").html(selectedOption);
    }

}

// 26 Change the href attribute of the first &lta> element (You have to create several &lta> elements)

// 27 Show an alert with the value of the first &ltinput> of the page (Create an &ltinput> element to test this case)
   
// 28 Remove all items from a specific selector

// 29 Animate an item after 2 seconds from the initial page load
/*======================================*/

/*=============== Tests ================*/
// Events

// onLoadJqueryTest();
// onMouseMoveJqueryTest();
// onDblClickJqueryTest();
// onClickJqueryTest();
// onKeyDownJqueryTest();
// onChangeInputTextJqueryTest();
// onLoadImageJqueryTest();
// onLoadImageFailJqueryTest();
// onSubmitJqueryTest();
// onMouseOverJqueryTest();
// onChangeCheckboxJqueryTest();
// onClickUlLiItemJqueryTest();

// Functions and Selectors

// createHTMLElementJqueryTest()
// removeHTMLElementJqueryTest();
// appendHTMLElementToParentJqueryTest()
// prependHTMLElementToParentJqueryTest()
// createAndAddAfterHTMLElementJqueryTest()
// createAndAddBeforeHTMLElementVanillaTest();
// createAndAddHTMLElementAndCloneJqueryTest();
// addClassToElementJqueryTest();
// removeClassToElementJqueryTest();
// addDisabledAttrToBtnJqueryTest();
// removeDisabledAttrOfBtnJqueryTest();
// setDataSrcAttrToImgJqueryTest();
// hideElementOnClickJqueryTest();
// showElementOnClickBtnJqueryTest();
// FadeInJqueryTest();
// fadeOutJqueryTest();
// iterateAndStyleSetOfElementsJqueryTest();
// changeParentStyleJqueryTest();
// changeChildrenStyleJqueryTest();
// changeSameclassElementsStyleJqueryTest();
// changeIdElemntStyleJqueryTest();
// changeSameclassElementsStyle2JqueryTest();
// checkSelectedAttributeJqueryTest();
/*======================================*/
