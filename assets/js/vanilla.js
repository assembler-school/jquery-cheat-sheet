/*============ Global variables ===========*/
const testArea = document.getElementById("testArea");
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

export function onLoadVanillaOutput(){
    return "    This event makes a change on the page when the page loads. \n       In this case it outputs the Onload message on console";
}

//02 Onload Event
export function onClickVanillaCode(){
    return `
document.getElementById("btn").addEventListener("click", function(){
    element.insertAdjacentHTML('beforeend', "&ltp> button clicked&lt/p>");
});`
}

export function onClickVanillaOutput(element){
    // cleanTestArea();
    let injectionString = "<button id = btne2>Click here</button>";
    element.children[2].children[1].insertAdjacentHTML('beforeend', injectionString);
    document.getElementById("btne2").addEventListener("click", function(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p> button clicked</p>");
    });

}

//03 Ondblclick Event
export function onDblClickVanillaCode(){
    return `
document.getElementById("btn").addEventListener("dblclick", function(){
    element.insertAdjacentHTML('beforeend', "&ltp> button double-clicked&lt/p>");
});`
}

export function onDblClickVanillaOutput(element){
    cleanTestArea();
    let injectionString = "<button id = btne3>Click here</button>";
    element.children[2].children[1].insertAdjacentHTML('beforeend', injectionString);
    document.getElementById("btne3").addEventListener("dblclick", function(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p> button double-clicked</p>");
    });

}

//04 Onkeydown Event
export function onKeyDownVanillaCode(){
    return `
document.getElementById("btn").addEventListener("dblclick", function(){
    element.insertAdjacentHTML('beforeend', "&ltp> button double-clicked&lt/p>");
});`
}

export function onKeyDownVanillaOutput(element){
    cleanTestArea();
    let injectionString = "<button id = btne4>Click here</button>";
    element.children[2].children[1].insertAdjacentHTML('beforeend', injectionString);
    document.getElementById("btne3").addEventListener("keydown", function(){
        element.children[2].children[1].insertAdjacentHTML('beforeend', "<p> button double-clicked</p>");
    });

}
/*====================================*/

/*=========== Call functions ===========*/

/*======================================*/