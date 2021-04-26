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
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='onChangeSelectionOutput'> Changed to option 1</p>");

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
    // element.children[2].children[1].removeChild(newElement);

}

// 02 Remove an HTML element with any text value
export function removeHTMLElementVanillaCode(){
    return `
let newElement = document.createElement("div");
newElement.textContent = "I am a new div";
element.appendChild(newElement);
newElement.remove();`
}

export function removeHTMLElementVanillaOutput(element){
    
    let newElement = document.createElement("div");
    newElement.textContent = "I am a new div";
    element.children[2].children[1].appendChild(newElement);
    newElement.remove();

}

// 03 Append an HTML element to a parent element with any text value
export function appendHTMLElementToParentVanillaCode(){
    return `
let newElement = document.createElement("div");
newElement.textContent = "I am a new appended div";
element.appendChild(newElement);
`
}

export function appendHTMLElementToParentVanillaOutput(element){
    
    let newElement = document.createElement("div");
    newElement.textContent = "I am a new appended div";
    element.children[2].children[1].appendChild(newElement);
    
}

//04 Prepend an HTML element with any text value to a parent element
export function prependHTMLElementToParentVanillaCode(){
    return `
let span = document.createElement("span");
span.textContent ="I am a new prepended span"
element.prepend(span);
`
}

export function prependHTMLElementToParentVanillaOutput(element){
    
    let span = document.createElement("span");
    span.textContent ="I am a new prepended span"
    element.children[2].children[1].prepend(span);
    
}

// 05 Create and add an HTML element with any text value after another element
export function createAndAddAfterHTMLElementVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs5'> I am first div</div>");
document.getElementById("divfs5").insertAdjacentHTML('beforeend', "<div>I am second div</div>");
`
}

export function createAndAddAfterHTMLElementVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs5'> I am first div</div>");
    document.getElementById("divfs5").insertAdjacentHTML('beforeend', "<div>I am second div</div>");
    
}

// 06 Create and add an HTML element with any text value before another element
export function createAndAddBeforeHTMLElementVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltdiv id='divfs6'> I am first div&lt/div>");
document.getElementById("divfs6").insertAdjacentHTML('beforebegin', "&ltdiv>I am second div&lt/div>");
`
}

export function createAndAddBeforeHTMLElementVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs6'> I am first div</div>");
    document.getElementById("divfs6").insertAdjacentHTML('beforebegin', "<div>I am second div</div>");
    
}

// 07 Clone an HTML element within other element
export function createAndAddHTMLElementAndCloneVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs7'> I am first div&lt/div>");
let clone = document.getElementById("divfs7").cloneNode(true);
element.appendChild(clone);`
}

export function createAndAddHTMLElementAndCloneVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs7'> I am first div</div>");
    let clone = document.getElementById("divfs7").cloneNode(true);
    element.children[2].children[1].appendChild(clone);
    
}

// 08 Add a class to an HTML item
export function addClassToElementVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs8'> I am first div&lt/div>");
document.getElementById("divfs8").classList.add("fsClass");`
}

export function addClassToElementVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs8'> I am first div</div>");
    document.getElementById("divfs8").classList.add("fsClass");
    
}

// 09 Remove a class of an HTML item
export function removeClassToElementVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs9' style='color:red'> I am first div&lt/div>");
document.getElementById("divfs9").classList.add("fsClass");
document.getElementById("divfs9").classList.remove("fsClass");`
}

export function removeClassToElementVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs9' style='color:red'> I am first div</div>");
    document.getElementById("divfs9").classList.add("fsClass");
    document.getElementById("divfs9").classList.remove("fsClass");
}

// 10 Toggle a class to an HTML item
export function toggleClassToElementVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs10' style='color:red'> I am first div&lt/div>");
document.getElementById("divfs10").classList.add("fsClass");
document.getElementById("divfs10").classList.toggle("fsClass");`
}

export function toggleClassToElementVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs10' style='color:red'> I am first div</div>");
    document.getElementById("divfs10").classList.add("fsClass");
    document.getElementById("divfs10").classList.toggle("fsClass");
}

// 11 Add a disabled attribute to an HTML button
export function addDisabledAttrToBtnVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs11'> I am disabled button&lt/div>");
document.getElementById("btnfs11").setAttribute("disabled", true);
    `
}

export function addDisabledAttrToBtnVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs11'> I am disabled button</button>");
    document.getElementById("btnfs11").setAttribute("disabled", true);
}

// 12 Remove the disabled attribute of an HTML button
export function removeDisabledAttrOfBtnVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs11'> I am disabled button&lt/button>");
document.getElementById("btnfs11").setAttribute("disabled", true);
document.getElementById("btnfs11").setAttribute("disabled", false);
    `
}

export function removeDisabledAttrOfBtnVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs12'> I am disabled button</button>");
    document.getElementById("btnfs12").setAttribute("disabled", true);
    document.getElementById("btnfs12").setAttribute("disabled", false);
}

// 13 Set a data-src attribute to a img element
export function setDataSrcAttrToImgVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltimg id='imgfs13' src='/assets/katara.jpeg' width='50px' height='50px'>");
document.getElementById("imgfs13").setAttribute("data-src", "ImData");
    `
}

export function setDataSrcAttrToImgVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<img id='imgfs13' src='/assets/katara.jpeg' width='50px' height='50px'>");
    document.getElementById("imgfs13").setAttribute("data-src", "ImData");
    
}

// 14 Remove the data-src attribute of the img element
export function removeDataSrcAttrToImgVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltimg id='imgfs13' src='/assets/katara.jpeg' width='50px' height='50px'>");
document.getElementById("imgfs13").setAttribute("data-src", "ImData");
document.getElementById("imgfs13").removeAttribute("data-src");
    `
}

export function removeDataSrcAttrToImgVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<img id='imgfs14' src='/assets/katara.jpeg' width='50px' height='50px'>");
    document.getElementById("imgfs14").setAttribute("data-src", "ImData");
    document.getElementById("imgfs14").removeAttribute("data-src");
    
}

// 15 Hide an HTML element on click (display: none)
export function hideElementOnClickVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs15'>If you dont wanna see me, click me!&lt/div>");

document.getElementById("divfs15").onclick = function(){
    this.style.display="none";
}
    `
}

export function hideElementOnClickVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs15'>If you dont wanna see me, click me!</div>");
    document.getElementById("divfs15").onclick = function(){
        this.style.display="none";
    }   
}

// 16 Show an HTML element on click (display: block)
export function showElementOnClickBtnVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltp id='pfs16' style='display:none'>Suprise strike!&lt/p>");

element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs16'>Click meto see what lurks in the shadows&lt/button>");

document.getElementById("btnfs16").onclick = function(){
    document.getElementById("pfs16").style.display="block";
}   
    `
}

export function showElementOnClickBtnVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='pfs16' style='display:none'>Suprise strike!</p>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs16'>Click me to see what lurks in the shadows</button>");
    document.getElementById("btnfs16").onclick = function(){
        document.getElementById("pfs16").style.display="block";
    }   
}

// 17 Fade in an HTML element using jQuery
export function FadeInVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs17'> Click me to fade in the div&lt/button>");

element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs17' style='background-color:red; height:100px; width:100px; opacity:0'>&lt/div>");

document.getElementById("btnfs17").addEventListener("click", function(){
    document.getElementById("divfs17").style.opacity ="1"; 
    document.getElementById("divfs17").style.transition ="2s";
});  
    `
}

export function FadeInVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs17'> Click me to fade in the div</button>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs17' style='background-color:red; height:100px; width:100px; opacity:0'></div>");
    
    document.getElementById("btnfs17").addEventListener("click", function(){
        document.getElementById("divfs17").style.opacity ="1"; 
        document.getElementById("divfs17").style.transition ="2s";
    });

}

// 18 Fade out an HTML element using jQuery
export function fadeOutVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs18'> Click me to fade in the div&lt/button>");

element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs18' style='background-color:red; height:100px; width:100px; opacity:1'>&lt/div>");

document.getElementById("btnfs18").addEventListener("click", function(){
    document.getElementById("divfs18").style.opacity ="0"; 
    document.getElementById("divfs18").style.transition ="2s";
});  
    `
}

export function fadeOutVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs18'> Click me to fade in the div</button>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs18' style='background-color:red; height:100px; width:100px; opacity:1'></div>");
    
    document.getElementById("btnfs18").addEventListener("click", function(){
        document.getElementById("divfs18").style.opacity ="0"; 
        document.getElementById("divfs18").style.transition ="2s";
    });

}

// 19 Iterate a collection of elements and apply a change of style on them
export function iterateAndStyleSetOfElementsVanillaCode(){
    return `
element..insertAdjacentHTML('beforeend', "&ltul id='ulfs19'>&ltli class='itemfs19'> Item1&lt/li>&ltli class='itemfs19'> Item2&lt/li>&lt/ul>");

document.querySelectorAll(".itemfs19").forEach(function(element){
    element.style.color ="red";
}); 
    `
}

export function iterateAndStyleSetOfElementsVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<ul id='ulfs19'><li class='itemfs19'> Item1</li><li class='itemfs19'> Item2</li></ul>");
    
    document.querySelectorAll(".itemfs19").forEach(function(element){
        element.style.color ="red";
    });
}

// 20 Get the parent element of a certain element and change its font weight
export function changeParentStyleVanillaCode(){
    return `
element.children[2].children[1].insertAdjacentHTML('beforeend', "&ltdiv id='divfs20'> I am parent&ltspan class='childfs20'> Item1&lt/span>&ltspan class='childfs20'> Item2&lt/span>&lt/div>");

document.querySelectorAll(".childfs20")[0].parentNode.style.fontWeight = "bold";
    `
}

export function changeParentStyleVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs20'> I am parent<span class='childfs20'> Item1</span><span class='childfs20'> Item2</span></div>");

    document.querySelectorAll(".childfs20")[0].parentNode.style.fontWeight = "bold";
}

// 21 Get the collection of children of a certain element and change its font weight
export function changeChildrenStyleVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs21'> I am parent&ltspan class='childfs21'> Item1&lt/span>&ltspan class='childfs21'> Item2&lt/span>&lt/div>");

let children = document.getElementById("divfs21").children;

for(let i=0; i &lt children.length; i++){
    children[i].style.fontWeight ="bold";
}`
}

export function changeChildrenStyleVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs21'> I am parent<span class='childfs21'> Item1</span><span class='childfs21'> Item2</span></div>");

    let children = document.getElementById("divfs21").children;

    for(let i=0; i<children.length; i++){
        children[i].style.fontWeight ="bold";
    }
}

// 22 Get all the elements that have a certain class and change their font weight
export function changeSameclassElementsStyleVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs22'> I am parent&ltspan class='childfs22'> Item1&lt/span>&ltspan class='childfs22'> Item2&lt/span>&lt/div>");

let sameClassElements = document.querySelectorAll(".childfs22")

for(let i=0; i &lt sameClassElements.length; i++){
    sameClassElements[i].style.fontWeight = "bold";
}
    `
}

export function changeSameclassElementsStyleVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs22'> I am parent<span class='childfs22'> Item1</span><span class='childfs22'> Item2</span></div>");

    let sameClassElements = document.querySelectorAll(".childfs22")

    for(let i=0; i<sameClassElements.length; i++){
        sameClassElements[i].style.fontWeight = "bold";
    }
}

// 23 Get an item by id and change its font weight
export function changeIdElemntStyleStyleVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "<div id='divfs23'> I am div</div>");

document.getElementById("divfs23").style.fontWeight ="bold";
    `
}

export function changeIdElemntStyleVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs23'> I am div</div>");

    document.getElementById("divfs23").style.fontWeight ="bold";

}

// 24 Get all the elements that have a certain class and the display property of none and change their font color
export function changeSameclassElementsStyle2VanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltdiv id='divfs24'> I am parent&ltspan style='display:none' class='childfs24'> Item1&lt/span>&ltspan style='display:none' class='childfs24'> Item2&lt/span>&lt/div>");

let sameClassElements = document.querySelectorAll(".childfs22")

for(let i=0; i &lt sameClassElements.length; i++){
    sameClassElements[i].style.fontWeight = "bold";
}
    `
}

export function changeSameclassElementsStyle2VanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<div id='divfs24'> I am parent<span style='display:none' class='childfs24'> Item1</span><span style='display:none' class='childfs24'> Item2</span></div>");

    let sameClassElements = document.querySelectorAll(".childfs24")

    for(let i=0; i<sameClassElements.length; i++){
        sameClassElements[i].style.color = "red";
        sameClassElements[i].style.display = "block";
    }
}

// 25 Get the options of a select element that are selected (attribute selected)
export function checkSelectedAttributeVanillaCode(){
    return `
element.insertAdjacentHTML('beforeend', "&ltselect id='selectfs25'>&ltoption class='optionfs25' value='1'>Option1&lt/option> &ltoption class='optionfs25' value='2'>Option2&lt/option> &lt/select>");
element.insertAdjacentHTML('beforeend', "&ltp id='outputfs25'> &lt/p>")
element.insertAdjacentHTML('beforeend', "&ltbutton id='btnfs25'>Check selected option &lt/button>")

document.getElementById("btnfs25").addEventListener("click",checkSelect);

function checkSelect(){
    
    let options = document.querySelectorAll(".optionfs25");

    for(let i=0; i &lt options.length; i++){
        if(options[i].selected === true){
            document.getElementById("outputfs25").textContent = options[i].textContent;
        }
    }
}
    `
}

export function checkSelectedAttributeVanillaOutput(element){
    
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<select id='selectfs25'><option class='optionfs25' value='1'>Option1</option> <option class='optionfs25' value='2'>Option2</option> </select>");
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<p id='outputfs25'> </p>")
    element.children[2].children[1].insertAdjacentHTML('beforeend', "<button id='btnfs25'>Check selected option </button>")
    
    document.getElementById("btnfs25").addEventListener("click",checkSelect);
    
    function checkSelect(){

        let options = document.querySelectorAll(".optionfs25");
    
        for(let i=0; i < options.length; i++){
            if(options[i].selected === true){
                document.getElementById("outputfs25").textContent = options[i].textContent;
            }
        }
    }
}

// 26 Change the href attribute of the first &lta> element (You have to create several &lta> elements)

// 27 Show an alert with the value of the first &ltinput> of the page (Create an &ltinput> element to test this case)
   
// 28 Remove all items from a specific selector

// 29 Animate an item after 2 seconds from the initial page load
/*====================================*/

