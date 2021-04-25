/*============ Global variables ===========*/
const testArea = $("#testArea");
/*========================================*/

/*========== TestArea scenarios ==========*/
function scenario1(){

}
/*========================================*/

/*========= Excercise functions ==========*/
// 01 OnLoad Event
// $(window).on("load", function(event){
//     console.log("Onload");
// });

export function onLoadJqueryCode(){
    return `    $(window).on("load", function(event){
                    console.log("Onload");
    });`;
}

export function onLoadJqueryOutput(){
    return "This event makes a change on the page when the page loads";
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

// 07 OnLoad Event to load Image
export function onLoadImageFailJqueryCode(){
    return `
$("#testArea").append("&ltimg id = 'imge8' src='./katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
$("#testArea").append("&ltp id = 'onLoadOutputTestFail'>&lt/p>");

$("#imge8").on("error", imageOnLoad);

function imageOnLoad(){
    $("#onLoadOutputTestFail").text("Image load failure");
}`
}

// 08 OnError Event to load Image 
export function onLoadImageFailJqueryTest(){
    
    $("#testArea").append("<img id = 'imge8' src='./katara.jpeg' alt='katara' width ='50px' height='50px'>");
    $("#testArea").append("<p id = 'onLoadOutputTestFail'></p>");

    $("#imge8").on("error", imageOnLoadFail);

    function imageOnLoadFail(){
        $("#onLoadOutputTestFail").text("Image load failure");

    }
}
/*======================================*/

/*=============== Tests ================*/
// onMouseMoveJqueryTest();
// onDblClickJqueryTest();
// onClickJqueryTest();
// onKeyDownJqueryTest();
// onChangeInputTextJqueryTest();
// onLoadImageJqueryTest();
// onLoadImageFailJqueryTest();
/*======================================*/
