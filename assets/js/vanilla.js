/*============ Global variables ===========*/
const testArea = document.querySelector("#testArea");
/*========================================*/

/*========== TestArea scenarios ==========*/
function scenario01(){
    //let testArea = document.getElementById("testArea");

    testArea.appendChild(paragraph);
    // console.log("scenario 01 loaded -->", testArea);
    // console.log("paragraph scenario01 -->", testArea.firstChild);
}
/*========================================*/

/*========== Other functions ==========*/
// Removes all elements inside testArea and their events
function cleanTestArea(){

    while(testArea.firstChild){
        testArea.removeChild(testArea.lastChild);
    }

}

/*========= Excercise functions ==========*/
// 01 Onload event
// window.addEventListener("load", function(event){
//     console.log("Onload");
// });

export function onLoadVanillaCode(){
    return `
window.addEventListener("load", function(event){
    console.log("Onload");
});`;
}

export function onLoadVanillaOutput(element){
element.children[2].children[1].insertAdjacentHTML('beforeend', "<p>This event makes a change on the page when the page loads. In this case it outputs the Onload message on console</p>");
}

//02 OnClick Event
export function onClickVanillaCode(){
    return `
document.getElementById("btne2").addEventListener("click", click);
function click(){
    element.insertAdjacentHTML('beforeend', "&ltp>button clicked&lt/p>");
};`
}

export function onClickVanillaOutput(element){

    let injectionString = "<button id = btne2>Click here</button>";
    element.children[2].children[1].insertAdjacentHTML('beforeend', injectionString);
    
    document.getElementById("btne2").addEventListener("click", click);
    function click(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p>button clicked</p>");
    }

}

//03 Ondblclick Event
export function onDblClickVanillaCode(){
    return `
document.getElementById("btn").addEventListener("dblclick", doubleClick);

function doubleClick(){
    element.insertAdjacentHTML('beforeend', "&ltp>button double-clicked&lt/p>");
}`
}

export function onDblClickVanillaOutput(element){

    let injectionString = "<button id = btne3>Click here</button>";
    element.children[2].children[1].insertAdjacentHTML('beforeend', injectionString);
    document.getElementById("btne3").addEventListener("dblclick", doubleClick);

    function doubleClick(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p>button double-clicked</p>");
    } 

}

//04 Onkeydown Event
export function onKeyDownVanillaCode(){
    return `
document.addEventListener("keydown", keyPress(event);

function keyPress(){
    element.insertAdjacentHTML('beforeend', "&ltp>key-pressed&lt/p>");
}`
}

export function onKeyDownVanillaOutput(element){
    document.addEventListener("keydown", keyPress);

    function keyPress(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p>key-pressed</p>");
    }

}

//05 Onmousemove Event
export function onMouseMoveVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltp> &ltspan id = 'mouseTrack'>&lt/span>&lt/p>");
window.addEventListener('mousemove', mouseMovementTracking);

    function mouseMovementTracking(event){
    document.getElementById("mouseTrack").textContent = " x-value: "  + event.x + "y-value: " + event.y "
    }`
}

export function onMouseMoveVanillaOutput(element){

    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p> <span id = 'mouseTrack'></span></p>");
    window.addEventListener('mousemove', mouseMovementTracking);

    function mouseMovementTracking(event){
        document.getElementById("mouseTrack").textContent = "x-value: " + event.x + " y-value: " + event.y ;
    }
}

// 06 Onchange Event
export function onChangeInputTextVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltinput type= 'text' id = 'inpute6'>");
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltp id='onChangeOutput'>&lt/p>");

document.getElementById("input1").addEventListener('change', catchInputOnChange);

function catchInputOnChange(){
    document.getElementById("onChangeOutput").textContent = document.getElementById("inpute6").value;
}`
}

export function onChangeInputTextVanillaOutput(element){

    element.children[2].children[1].insertAdjacentHTML('beforeend', "<input type= 'text' id = 'inpute6'>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onChangeOutput'></p>");

    document.getElementById("inpute6").addEventListener('change', catchInputOnChange);

    function catchInputOnChange(){
        document.getElementById("onChangeOutput").textContent = document.getElementById("inpute6").value;
    }
}

// 07 OnLoad Event to load Image
export function onLoadImageVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltimg id = 'imge7' src='/assets/katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
element.insertAdjacentHTML('beforeend', "&ltp id='onLoadOutput'>&lt/p>");

document.getElementById("imge7").addEventListener('load', imageOnLoad);

function imageOnLoad(){
    document.getElementById("onLoadOutput").textContent = "Image loaded";
}`
}

export function onLoadImageVanillaOutput(element){

    element.children[2].children[1].insertAdjacentHTML('beforeend', "<img id = 'imge7' src='/assets/katara.jpeg' alt='katara' width ='50px' height='50px'>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onLoadOutput'></p>");

    document.getElementById("imge7").addEventListener('load', imageOnLoad);

    function imageOnLoad(){
        document.getElementById("onLoadOutput").textContent = "Image loaded";
    }
}

// 08 OnError Event to load Image 
export function onLoadImageFailVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltimg id = 'imge8' src='./katara.jpeg' alt='loaded image' width ='50px' height='50px'>");
element.insertAdjacentHTML('beforeend', "&ltp id='onLoadOutputFail'>&lt/p>");

document.getElementById("imge8").addEventListener('error', imageOnLoadFail);

function imageOnLoadFail(){
    document.getElementById("onLoadOutputFail").textContent = "Image load failed";
}`
}

export function onLoadImageFailVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<img id = 'imge8' src='./katara.jpeg' alt='katara' width ='50px' height='50px'>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onLoadOutputFail'></p>");

    document.getElementById("imge8").addEventListener("error", imageOnLoadFail);

    function imageOnLoadFail(){
        document.getElementById("onLoadOutputFail").textContent = "Image failed to load";
    }
}
/*====================================*/

/*=========== Call functions ===========*/

/*======================================*/