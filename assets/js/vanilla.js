/*============ Global variables ===========*/
const testArea = document.getElementById("testArea");
var paragraph = document.createElement("p");
paragraph.setAttribute("id", "paragraph");
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
    return `                    window.addEventListener("load", function(event){
                                console.log("Onload");
                    });`;
}

export function onLoadVanillaOutput(){
    return "    This event makes a change on the page when the page loads. \n       In this case it outputs the Onload message on console";
}

/*====================================*/

/*=========== Call functions ===========*/

/*======================================*/