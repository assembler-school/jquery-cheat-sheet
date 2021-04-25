//================= Imports ================//
import * as vanilla from "./vanilla.js";
import * as jquery from "./jquery.js";
//========================================//

//=========== Global variables ==========//
const topicListItems = document.querySelectorAll(".topicListItem");
const eventDivContainer = document.getElementById("eventDivContainer");
const funSelDivContainer = document.getElementById("funSelDivContainer");
const codeContainers = $(".codeContainer");
const statements = $(".topicTitle");
var vanillaCodes = [];
var jqueryCodes = [];
var outputSolutions = [];
//var listItems = $(".listItem").children()[1];
//========================================//

//============= Functions ===============//
// Sets events to display either the events 
// or the functions and selectors container
function setTopicListItemListeners(){
    
    // Correcting empty display property bug;
    eventDivContainer.style.display = "block";
    funSelDivContainer.style.display = "none";

    // Adding eventListeners
    topicListItems[0].addEventListener("click", function(event){

        if(event.target === topicListItems[0] && eventDivContainer.style.display === "none"){
            
            eventDivContainer.style.display = "block";
            funSelDivContainer.style.display = "none";

        }else if(event.target === topicListItems[0] && eventDivContainer.style.display === "block"){

            eventDivContainer.style.display = "none";
            funSelDivContainer.style.display = "none";
        }
    });

    topicListItems[1].addEventListener("click", function(event){

        if(event.target === topicListItems[1] && funSelDivContainer.style.display === "none"){
            
            funSelDivContainer.style.display = "block";
            eventDivContainer.style.display = "none";

        }else if(event.target === topicListItems[1] && funSelDivContainer.style.display === "block"){
            
            funSelDivContainer.style.display = "none";
            eventDivContainer.style.display = "none";
        }
    });
}
    
// Sets events on every statement to either  
// display or hide its solution container
function showHideSolutions(){
    
    // Sets display none to all codeContainers
    for(let j=0; j<codeContainers.length; j++){
        codeContainers[j].style.display = "none";
    }

    // Applies listener to statements to 
    //show one codeContainer and hide the others
    for(let i=0; i<statements.length; i++){
        statements[i].addEventListener("click", function(event){
            
            if(event.target === statements[i] && codeContainers[i].style.display === "none"){
                for(let z=0; z<codeContainers.length; z++){
                    if(z!==i){
                        codeContainers[z].style.display = "none";
                    }
                    
                }
                codeContainers[i].style.display = "flex";
            }else if(event.target === statements[i] && codeContainers[i].style.display === "flex"){

                codeContainers[i].style.display = "none";
            }
        });
    }
}

// Injects the content to their corresponding divs
function injectionSwitch(){
    
    // output container variable
    let codeContainer;

    //Events divs
    for(let e = 1; e < 14; e++){
        let id = "e" + e;
        switch(id){

            case "e1":
                // OnLoad Event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onLoadVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onLoadJqueryCode();
                vanilla.onLoadVanillaOutput(codeContainer);
                break;

            case "e2":
                // OnClick Event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;

            case "e3":
                // OnDblClick Event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onDblClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onDblClickJqueryCode();
                vanilla.onDblClickVanillaOutput(codeContainer);
                break;

            case "e4":
                // OnKeyDown Event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onKeyDownVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onKeyDownJqueryCode();
                vanilla.onKeyDownVanillaOutput(codeContainer);
                break;

            case "e5":
                // OnMouseMove Event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onMouseMoveVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onMouseMoveJqueryCode();
                // vanilla.onMouseMoveVanillaOutput(codeContainer);
                break;

            case "e6":
                // OnChange Event capture input text value
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onChangeInputTextVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onChangeInputTextJqueryCode();
                vanilla.onChangeInputTextVanillaOutput(codeContainer);
                break;

            case "e7":
                // OnLoad Event for image
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onLoadImageVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onLoadImageJqueryCode();
                vanilla.onLoadImageVanillaOutput(codeContainer);
                break;

            case "e8":
                // OnError Event to load image
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onLoadImageFailVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onLoadImageFailJqueryCode();
                vanilla.onLoadImageFailVanillaOutput(codeContainer);
                break;

            case "e9":
                // OnSubmit Event for form
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;

            case "e10":
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;

            case "e11":
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;

            case "e12":
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;

            case "e13":
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickJqueryCode();
                vanilla.onClickVanillaOutput(codeContainer);
                break;
        }
    }

    //Functions and Selectors
}


function injectArraysContent(){
    for(let i = 0; i < codeContainers.length; i++){
        codeContainers[i].children[0].children[1].innerHTML = vanillaCodes[i];
        codeContainers[i].children[1].children[1].innerHTML = jqueryCodes[i];
        codeContainers[i].children[2].children[1].innerHTML = outputSolutions[i];
    }
}
//========================================//


//=========== Functions Calls ============//
setTopicListItemListeners();
showHideSolutions();
injectionSwitch();
// injectArraysContent();
//========================================//
