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

// Events
// 01 Onload event
export function domContentLoadedVanillaOutput(element){

    document.addEventListener("DOMContentLoaded", loadedDOM);

    function loadedDOM(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p>The DOM has been loaded</p>");
    }
}

export function domContentLoadedVanillaCode(){
    return `
document.addEventListener("DOMContentLoaded", loadedDOM);

function loadedDOM(){
    element.insertAdjacentHTML('beforeend', "&ltp>The DOM has been loaded&lt/p>");
}`;
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

// 09 OnSubmit for form 
export function onSubmitVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltform id='forme9'>&ltinput type='submit' value='submit'>&lt/form>");

document.getElementById("forme9").addEventListener("submit", onFormSubmit);

function onFormSubmit(event){
    event.preventDefault();
    element.insertAdjacentHTML('beforeend', "&ltp id='onSubmitOutput'>&lt/p>");
    document.getElementById("onSubmitOutput").textContent = "Form submited";
}`
}

export function onSubmitVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<form id='forme9'><input type='submit' value='submit'></form>");
    
    document.getElementById("forme9").addEventListener("submit", onFormSubmit);

    function onFormSubmit(event){
        event.preventDefault();
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onSubmitOutput'></p>");
        document.getElementById("onSubmitOutput").textContent = "Form submited";
    }
}

// 10 OnChange Event for an option selection element
export function onChangeOptionSelectionVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&lt select id='selecte10'> &ltoption value='1'>Option1&lt/option>&ltoption value='2'>Option2&lt/option>&lt/select>");

element.insertAdjacentHTML('beforeend', "&ltp id='onChangeSelectionOutput'> Changed to option 1&lt/p>")

document.getElementById("selecte10").addEventListener("change", onChangeOption);

function onChangeOption(){
    document.getElementById("onChangeSelectionOutput").textContent = "Changed to option " + document.getElementById("selecte10").value;
}`
}

export function onChangeOptionSelectionVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<select id='selecte10'><option value='1'>Option1</option> <option value='2'>Option2</option> </select>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onChangeSelectionOutput'> Changed to option 1</p>")

    document.getElementById("selecte10").addEventListener("change", onChangeOption);

    function onChangeOption(){

        document.getElementById("onChangeSelectionOutput").textContent = "Changed to option " + document.getElementById("selecte10").value;
    }
}

// 11 OnMouseOver event
export function onMouseOverVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='dive11' style='background-color:red; height:100px; width:100px'>&lt/div>");

document.getElementById("dive11").addEventListener("mouseover", onMouseOver);

function onMouseOver(){
    if(document.getElementById("dive11").style.backgroundColor === "red"){
        document.getElementById("dive11").style.backgroundColor = "green";
    }else{
        document.getElementById("dive11").style.backgroundColor = "red";
    }
}`
}

export function onMouseOverVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='dive11' style='background-color:red; height:100px; width:100px'></div>");
    
    document.getElementById("dive11").addEventListener("mouseover", onMouseOver);

    function onMouseOver(){
        if(document.getElementById("dive11").style.backgroundColor === "red"){
            document.getElementById("dive11").style.backgroundColor = "green";
        }else{
            document.getElementById("dive11").style.backgroundColor = "red";
        }
    }
}

// 12 OnChange Event for checkbox
export function onChangeCheckboxVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltinput id='checkboxe12' type='checkbox'>");
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltp id='onChangeCheckOutput'>Checkbox is &lt/p>");

document.getElementById("checkboxe12").addEventListener("change", onChangeCheckbox);

function onChangeCheckbox(){
    if(document.getElementById("checkboxe12").checked){
        document.getElementById("onChangeCheckOutput").textContent = "Checkbox is checked";
    }else{
        document.getElementById("onChangeCheckOutput").textContent = "Checkbox is unchecked";
    }
}`
}

export function onChangeCheckboxVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<input id='checkboxe12' type='checkbox'>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onChangeCheckOutput'>Checkbox is </p>");
    
    document.getElementById("checkboxe12").addEventListener("change", onChangeCheckbox);

    function onChangeCheckbox(){
        if(document.getElementById("checkboxe12").checked){
            document.getElementById("onChangeCheckOutput").textContent = "Checkbox is checked";
        }else{
            document.getElementById("onChangeCheckOutput").textContent = "Checkbox is unchecked";
        }
    }
}

// 13 OnClick Event for ul list item (show clicked element)
export function onClickUlLiItemVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltul id='ule13'>&lt/ul>");

document.getElementById("ule13").insertAdjacentHTML('beforeend', "&ltli id='e13Item1' class='ulItem'> Item1 &lt/li> &ltli id='e13Item2' class='ulItem'> Item2 &lt/li>&ltli id='e13Item3' class='ulItem'> Item3 &lt/li>");

element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltdiv id='ulLiItemOutput'>&lt/div>");

document.querySelectorAll(".ulItem").forEach(function(element){
    element.addEventListener("click", onClickShowUlLiItem);
});

function onClickShowUlLiItem(event){
    if(event.target){
        document.getElementById("ulLiItemOutput").textContent = event.target.textContent;
    }
}`
}

export function onClickUlLiItemVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<ul id='ule13'></ul>");
    document.getElementById("ule13").insertAdjacentHTML('beforeend', "<li id='e13Item1' class='ulItem'> Item1 </li> <li id='e13Item2' class='ulItem'> Item2 </li><li id='e13Item3' class='ulItem'> Item3 </li>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='ulLiItemOutput'></div>");
    
    document.querySelectorAll(".ulItem").forEach(function(element){
        element.addEventListener("click", onClickShowUlLiItem);
    });

    function onClickShowUlLiItem(event){
        if(event.target){
            document.getElementById("ulLiItemOutput").textContent = event.target.textContent;
        }
    }
}

// Functions and Selectors

// 01 Create an HTML element with any text value
export function createHTMLElementVanillaCode(){
    return `
let newElement = document.createElement("div");
newElement.textContent = "I am a new div";
element.appendChild(newElement);`
}

export function createHTMLElementVanillaOutput(element){
    
    let newElement = document.createElement("div");
    newElement.textContent = "I am a new div";
    element.children[2].children[1].appendChild(newElement);

}
/*====================================*/

/*=========== Call functions ===========*/

/*======================================*/