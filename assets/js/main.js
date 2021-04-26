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
//========================================//

//============= Functions ===============//
// Sets events to display either the events 
// or the functions and selectors container
function setTopicListItemListeners(){
    
    // Correcting empty display property bug;
    eventDivContainer.style.display = "none";
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
                codeContainer.children[0].children[1].innerHTML = vanilla.domContentLoadedVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onReadyJqueryCode();
                vanilla.domContentLoadedVanillaOutput(codeContainer);
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
                codeContainer.children[0].children[1].innerHTML = vanilla.onSubmitVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onSubmitJqueryCode();
                vanilla.onSubmitVanillaOutput(codeContainer);
                break;

            case "e10":
                // OnChange Event for an option selection element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onChangeOptionSelectionVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onChangeOptionSelectionJqueryCode();
                vanilla.onChangeOptionSelectionVanillaOutput(codeContainer);
                break;

            case "e11":
                // OnMouseOver event
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onMouseOverVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onMouseOverJqueryCode();
                vanilla.onMouseOverVanillaOutput(codeContainer);
                break;

            case "e12":
                // OnChange Event for checkbox
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onChangeCheckboxVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onChangeCheckboxJqueryCode();
                vanilla.onChangeCheckboxVanillaOutput(codeContainer);
                break;

            case "e13":
                // OnClick Event for ul list item (show clicked element)
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.onClickUlLiItemVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onClickUlLiItemJqueryCode();
                vanilla.onClickUlLiItemVanillaOutput(codeContainer);
                break;
        }
    }

    //Functions and Selectors
    for(let fs = 1; fs < 29; fs++){
        let id = "fs" + fs;
        switch(id){

            case "fs1":
                // Create an HTML element with any text value
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.createHTMLElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.createHTMLElementJqueryCode();
                vanilla.createHTMLElementVanillaOutput(codeContainer);
                break;

            case "fs2":
                // Remove an HTML element with any text value
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.removeHTMLElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.removeHTMLElementJqueryCode();
                vanilla.removeHTMLElementVanillaOutput(codeContainer);
                break;

            case "fs3":
                // Append an HTML element to a parent element with any text value
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.appendHTMLElementToParentVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.appendHTMLElementToParentJqueryCode();
                vanilla.appendHTMLElementToParentVanillaOutput(codeContainer);
                break;

            case "fs4":
                // Prepend an HTML element with any text value to a parent element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.prependHTMLElementToParentVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.prependHTMLElementToParentJqueryCode();
                vanilla.prependHTMLElementToParentVanillaOutput(codeContainer);
                break;

            case "fs5":
                // Create and add an HTML element with any text value after another element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.createAndAddAfterHTMLElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onMouseMoveJqueryCode();
                vanilla.createAndAddAfterHTMLElementVanillaOutput(codeContainer);
                break;

            case "fs6":
                // Create and add an HTML element with any text value before another element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.createAndAddBeforeHTMLElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.createAndAddBeforeHTMLElementJqueryCode();
                vanilla.createAndAddBeforeHTMLElementVanillaOutput(codeContainer);
                break;

            case "fs7":
                // Clone an HTML element within other element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.createAndAddHTMLElementAndCloneVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onLoadImageJqueryCode();
                vanilla.createAndAddHTMLElementAndCloneVanillaOutput(codeContainer);
                break;

            case "fs8":
                // Add a class to an HTML item
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.addClassToElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.addClassToElementJqueryCode();
                vanilla.addClassToElementVanillaOutput(codeContainer);
                break;

            case "fs9":
                // Remove a class to an HTML item
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.removeClassToElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.removeClassToElementJqueryCode();
                vanilla.removeClassToElementVanillaOutput(codeContainer);
                break;

            case "fs10":
                // Toggle a class to an HTML item
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.toggleClassToElementVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.toggleClassToElementJqueryCode();
                vanilla.toggleClassToElementVanillaOutput(codeContainer);
                break;

            case "fs11":
                // Add a disabled attribute to an HTML button
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.addDisabledAttrToBtnVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.addDisabledAttrToBtnJqueryCode();
                vanilla.addDisabledAttrToBtnVanillaOutput(codeContainer);
                break;

            case "fs12":
                // Remove the disabled attribute of an HTML button
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.removeDisabledAttrOfBtnVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.removeDisabledAttrOfBtnJqueryCode();
                vanilla.removeDisabledAttrOfBtnVanillaOutput(codeContainer);
                break;

            case "fs13":
                // Set a data-src attribute to a img element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.setDataSrcAttrToImgVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.setDataSrcAttrToImgJqueryCode();
                vanilla.setDataSrcAttrToImgVanillaOutput(codeContainer);
                break;

            case "fs14":
                // Remove the data-src attribute of the img element
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.removeDataSrcAttrToImgVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.removeDataSrcAttrToImgJqueryCode();
                vanilla.removeDataSrcAttrToImgVanillaOutput(codeContainer);
                break;
    
            case "fs15":
                // Hide an HTML element on click (display: none)
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.hideElementOnClickVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.hideElementOnClickJqueryCode();
                vanilla.hideElementOnClickVanillaOutput(codeContainer);
                break;

                
            case "fs16":
                // Show an HTML element on click (display: block)
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.showElementOnClickBtnVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.showElementOnClickBtnJqueryCode();
                vanilla.showElementOnClickBtnVanillaOutput(codeContainer);
                break;
    
            case "fs17":
                // Fade in an HTML element using jQuery
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.FadeInVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.FadeInJqueryCode();
                vanilla.FadeInVanillaOutput(codeContainer);
                break;
    
            case "fs18":
                // Fade out an HTML element using jQuery
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.fadeOutVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onMouseMoveJqueryCode();
                // vanilla.fadeOutVanillaOutput(codeContainer);
                break;
    
            case "fs19":
                // Iterate a collection of elements and apply a change of style on them
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.iterateAndStyleSetOfElementsVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.iterateAndStyleSetOfElementsJqueryCode();
                vanilla.iterateAndStyleSetOfElementsVanillaOutput(codeContainer);
                break;
    
            case "fs20":
                // Get the parent element of a certain element and change its font weight
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.changeParentStyleVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.changeParentStyleJqueryCode();
                vanilla.changeParentStyleVanillaOutput(codeContainer);
                break;
    
            case "fs21":
                // Get the children element of a certain element and change its font weight
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.changeChildrenStyleVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.changeChildrenStyleJqueryCode();
                vanilla.changeChildrenStyleVanillaOutput(codeContainer);
                break;
    
            case "fs22":
                // Get all the elements that have a certain class and change their font weight
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.changeSameclassElementsStyleVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.changeSameclassElementsStyleJqueryCode();
                vanilla.changeSameclassElementsStyleVanillaOutput(codeContainer);
                break;
    
            case "fs23":
                // Get an item by id and change its font weight
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.changeIdElemntStyleStyleVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.onChangeOptionSelectionJqueryCode();
                vanilla.changeIdElemntStyleVanillaOutput(codeContainer);
                break;
    
            case "fs24":
                // Get all the elements that have a certain class and the display property of none and change their font color
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.changeSameclassElementsStyle2VanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.changeSameclassElementsStyle2JqueryCode();
                vanilla.changeSameclassElementsStyle2VanillaOutput(codeContainer);
                break;
    
            case "fs25":
                // Get the options of a select element that are selected (attribute selected)
                codeContainer = document.getElementById(id);
                codeContainer.children[0].children[1].innerHTML = vanilla.checkSelectedAttributeVanillaCode();
                codeContainer.children[1].children[1].innerHTML = jquery.checkSelectedAttributeJqueryCode();
                vanilla.checkSelectedAttributeVanillaOutput(codeContainer);
                break;
    
            case "fs26":
                // Change the href attribute of the first &lta> element (You have to create several &lta> elements)

                break;

            case "fs27":
                // Show an alert with the value of the first &ltinput> of the page (Create an &ltinput> element to test this case)

                break;
    
            case "fs28":
                // Remove all items from a specific selector

                break;
    
            case "fs29":
                // Animate an item after 2 seconds from the initial page load

                break;
        }
    }

}

//========================================//


//=========== Functions Calls ============//
setTopicListItemListeners();
showHideSolutions();
injectionSwitch();
//========================================//
