//HTML document has been loaded
function htmlDocumentLoadedjquery(){
    $(".demo").eq(1).append(`<p>The document is loaded!</p>`)
}
eventsList[0].jqueryMethod=function(){
    htmlDocumentLoadedjquery();
}
eventsList[0].jquerySnippet=`<code>$().on("ready",function(){})</code>`
//HTML item has been clicked 
function htmlItemClickedjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Click on me!</button>`)
    const p=$(`<p></p>`)
    
    $(btn).on("click",function(){
        p.text(`You clicked me ${timesquery} times`)
        $(demo).append(p)
        timesquery++;
    })
    $("#jqueryBtn").remove();
    $(demo).append(btn);
}
eventsList[1].jqueryMethod=function(){
    htmlItemClickedjquery();
}
eventsList[1].jquerySnippet=`<code>
                                $("item").on
                                ("click",function(){})
                            </code>`
//item has benn double clicked
function htmlItemDoubleClickedjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Double click on me!</button>`)
    const p=$(`<p></p>`)
    
    $(btn).on("dblclick",function(){
        p.text(`You clicked me ${timesquery} times`)
        $(demo).append(p)
        timesquery++;
    })
    $("#jqueryBtn").remove();
    $(demo).append(btn);
}
eventsList[2].jqueryMethod=function(){
    htmlItemDoubleClickedjquery();
}
eventsList[2].jquerySnippet=`<code>
                                $("item").on
                                ("dblclick",function(){})
                            </code>`
//user presses a key on the keyboard 
function pressKeyjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Press a key!</button>`)
    const p=$(`<p></p>`)
    
    btn.on("keypress",function(e){
        p.text(`You pressed the ${e.key} key`)
        $(demo).append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[3].jqueryMethod=function(){
    pressKeyjquery();
}
eventsList[3].jquerySnippet=`<code>
                                $("item").on
                                ("keypress",function(){})
                            </code>`
//user moves the mouse cursor
function movesCursorjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Move the mouse</button>`)
    const p=$(`<p></p>`)

    $(btn).on("mousemove",function(){
        p.text(`You moved the mouse!`)
        $(demo).append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[4].jqueryMethod=function(){
    movesCursorjquery();
}
eventsList[4].jquerySnippet=`<code>
                            $("item").on
                            ("mousemove",function(){})
                        </code>`
//user changes a value of an text input
function changeValueInputjquery(){
    const demo=$(".demo").eq(1)
    const btn=$(`<button>Write something!</button>`)
    const p=$(`<p></p>`)
    const input=$("<input>");

    input.on("change",function(){
        p.text(`You changed the input to ${input.val()}!`)
        demo.append(p)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
    demo.append(input);
}
eventsList[5].jqueryMethod=function(){
    changeValueInputjquery();
}
eventsList[5].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            p.text("You changed the value to "+input.val())!)
                        </code>`
//image is loaded
function imageIsLoadedjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const img=$("<img src='../assets/img/imageloaded.png'>");
    img.addClass("imgExample")
       img.ready(function(){
           p.text(`The img was loaded!`);
           demo.append(img)
           demo.append(p)
        })
}
eventsList[6].jqueryMethod=function(){
    imageIsLoadedjquery();
}
eventsList[6].jquerySnippet=`<code>
                            $("item").ready(function(){
                                p.text("The img was loaded!");
                            })
                        </code>`
//image fails to load
function imageFailsjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const img=$("<img src='../assets/img/imageloade.png'>");
    img.addClass("imgExample")
       img.on("error",function(){
           p.text(`img failed to load!`),
          demo.append(img),
          demo.append(p)

       })
}
eventsList[7].jqueryMethod=function(){
    imageFailsjquery();
}
eventsList[7].jquerySnippet=`<code>
                            $("item").ready(function(){
                                p.text("img failed to load!");
                            })
                        </code>`
//form is submitted
function formSubmitjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const input=$("<input type='submit' value='Send form'>");

    input.on("click",function(e){
        e.preventDefault()
        p.text(`You submit the form!`)
        demo.append(p)
    })
    demo.append(input);
}
eventsList[8].jqueryMethod=function(){
    formSubmitjquery();
}
eventsList[8].jquerySnippet=`<code>
                            $("item").on
                            ("submit",function(){})
                            p.text("Form submited"!)
                        </code>`
//user changes the option of a select element
function changeValueSelectjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const select=$("<select>");
    for(let i=1;i<3;i++){
        const option=$(`<option>option-${i}</option>`)
        select.append(option);
    }
    select.on("change",function(e){
        
        p.text(`You selected the ${select.val()}!`)
        demo.append(p)
    })
    demo.append(select);
}
eventsList[9].jqueryMethod=function(){
    changeValueSelectjquery();
}
eventsList[9].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            p.text("You selected the"+item.val()!)
                        </code>`
//When you position the mouse over an element
function mouseOverjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Move the cursor around me!</button>");
    
    btn.on("mouseover",function(e){
        
        p.text(`You are moving the cursor around me!`)
        demo.append(p)
    })
    btn.on("mouseout",function(e){
        p.text(`You are NOT moving the cursor around me!`)
    })
    $("#jqueryBtn").remove();
    demo.append(btn);
}
eventsList[10].jqueryMethod=function(){
    mouseOverjquery();
}
eventsList[10].jquerySnippet=`<code>
                            $("item").on
                            ("mouseover",function(){})
                            p.text("Hi world"!)
                        </code>`
//When a checkbox is checked or unchecked
function checkboxCheckedJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Check and uncheck!</button>")
    const checkbox=$("<input type='checkbox'>")
    checkbox.on("change",function(e){
        if(checkbox.is(":checked")){
            p.text(`The checkbox is on!`)
            demo.append(p)

        }else{
            p.text(`The checkbox is off!`)
        }

    })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(checkbox)
}
eventsList[11].jqueryMethod=function(){
    checkboxCheckedJquery();
}
eventsList[11].jquerySnippet=`<code>
                            $("item").on
                            ("change",function(){})
                            if(checkbox.is(":checked")){
                        </code>`
//When a ul list item is clicked, show the item that was clicked
function itemListClickedjquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const ul=$("<ul>");
    const option1=$(`<li>option1</li>`)
    const option2=$(`<li>option2</li>`)
        $("li").each(function(idx,element){
            element.on("click",function(){
                p.text(`You selected the ${element}!`)
                demo.append(p)
    
            })
    })
    demo.append(ul);
    ul.append(option1)
    ul.append(option2)
}
eventsList[12].jqueryMethod=function(){
    itemListClickedjquery();
}
eventsList[12].jquerySnippet=`<code>
                             $("elementlist").each(
                                 function(i,element){
                                element.on("click",function(){
                                p.text("You selected the"+ element)
                        </code>`
//Functions section
//Create an HTML element
function createHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p></p>`)
    const btn=$("<button>Click me to create a paragraph</button>")
        btn.on("click", function(){
            p.text("Hi world!")
            demo.append(p)
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
}
functionsList[0].jqueryMethod=function(){
    createHtmlElementJquery();
}
functionsList[0].jquerySnippet=`<code>
                             $("&lt;p&gt;Hello world!&lt;/p&gt;")
                        </code>`
//Remove an HTML element
function removeHtmlElementJquery(){
    const demo=$(".demo").eq(1)
    const p=$(`<p>Dont delete me please :'(</p>`)
    const btn=$("<button>Click me to delete the paragraph</button>")
        btn.on("click", function(){
            p.text("Hi world!")
            p.remove()
        })
    $("#jqueryBtn").remove()
    demo.append(btn);
    demo.append(p);
}
functionsList[1].jqueryMethod=function(){
removeHtmlElementJquery();
}
functionsList[1].jquerySnippet=`<code>
                         $(element).remove()
                    </code>`
//Append an HTML element
function appendHtmlElementJquery(){}
//Prepend an HTML element 
function prependHtmlElementJquery(){}
//Create and add an HTML element after another element 
function createAfterHtmlElementJquery(){}
//Create and add an HTML element before another element 
function createBeforeHtmlElementJquery(){}
//Clone an HTML element within other element
function cloneHtmlElementJquery(){}
//Add a class to an HTML item
function addClassHtmlElementJquery(){}
//Remove a class to an HTML item
function removeClassHtmlElementJquery(){}
//Toggle a class of an HTML item
function toggleClassHtmlElementJquery(){}
//Add a disabled attribute to an HTML button
function disabledAttrHtmlElementJquery(){}
//Remove the disabled attribute of an HTML button
function removedisabledAttrHtmlElementJquery(){}
//Set a data-src attribute to a img element
function dataSrcHtmlElementJquery(){}
//Remove the data-src attribute of the img element
function removeDataSrcHtmlElementJquery(){}
//Hide an HTML element on click (display: none)
function hideHtmlElementJquery(){}
//Show an HTML element on click (display: block)
function blockHtmlElementJquery(){}
//Fade in an HTML element using jQuery
//Fade out an HTML element using jQuery
//Animate an item after 2 seconds from the initial page load
function animateHtmlElementJquery(){}
//Selectors section
//Iterate a collection of elements and apply a change of style on them
function changeStyleHtmlElementJquery(){}
//Get the parent element of a certain element and change its font weight
function getParentHtmlElementJquery(){}
//Get the collection of children of a certain element and change its font weight
function collectionChildrenHtmlElementJquery(){}
//Get all the elements that have a certain class and change their font weight
function fontWeightOfCollectionHtmlElementJquery(){}
//Get an item by id
function getIdHtmlElementJquery(){}
//Get all the elements that have a certain class and the display property of none 
function hideCollectionHtmlElementJquery(){}
//Get the options of a select element that are selected
function getOptionsJquery(){}
//Change an attribute of a first element
function changeAttributeFirstElementHtmlElementJquery(){}
//Show an alert with the value of the first input of the page
function alertOnChangeInputJquery(){}
//Remove all items from a specific selector
function removeItemsFromSpecificSelectorJquery(){}