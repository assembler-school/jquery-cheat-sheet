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
$("#testArea").append("&ltform id='forme9'>&ltinput type='submit' value='submit'>&lt/form>");

$("#forme9").on("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    $("#testArea").append("&ltp id ='onSubmitOutput'>&lt/p>");
    $("#onSubmitOutput").text("Form submited");
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


/*======================================*/
